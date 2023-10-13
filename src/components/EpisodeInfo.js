import React, { useState, useEffect, useRef } from "react";
import EpisodeList from "./EpisodesList";
import SearchBox from "./SearchBox";
import InfiniteScroll from "react-infinite-scroll-component";

export default function EpisodeInfo() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://kitsu.io/api/edge/anime/1555/episodes?page[limit]=20`
  );
  const [userSearch, setUserSearch] = useState("");
  const timerRef = useRef(null);

  // Fetch episodes function
  const fetchEpisodes = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setList((prevList) => [...prevList, ...data.data]);

      // Check if there is a next page
      if (data.links.next) {
        setCurrentPageUrl(data.links.next);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const searchUrl = `https://kitsu.io/api/edge/anime/1555/episodes?page[limit]=10&filter[number]=${userSearch}`;

  useEffect(() => {
    setLoading(true);
    setList([]);

    clearTimeout(timerRef.current);

    const newTimer = setTimeout(() => {
      let userSearchNumber = parseInt(userSearch);
      const pageOffset = userSearchNumber;
      fetchEpisodes(
        `https://kitsu.io/api/edge/anime/1555/episodes?page[limit]=20&page[offset]=${pageOffset}`
      );
      fetchEpisodes(searchUrl);
    }, 500);
    timerRef.current = newTimer;
    // eslint-disable-next-line
  }, [userSearch, timerRef]);

  return (
    <div>
      <SearchBox
        setCurrentPageUrl={setCurrentPageUrl}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
      />
      <InfiniteScroll
        dataLength={list.length}
        next={() => {
          if (list.length < 500) {
            fetchEpisodes(currentPageUrl);
          }
        }}
        hasMore={!loading && userSearch === ""}
        loader={""}
      >
        <EpisodeList loading={loading} list={list} />
      </InfiniteScroll>
    </div>
  );
}
