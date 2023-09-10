import React, { useState, useEffect } from "react";
import EpisodeList from "./EpisodesList";
import SearchBox from "./SearchBox";

export default function EpisodeInfo() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://kitsu.io/api/edge/anime/1555/episodes?page[limit]=20`
  );
  const [userSearch, setUserSearch] = useState("");

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

  // Fetch episodes when the component mounts
  useEffect(() => {
    fetchEpisodes(currentPageUrl);
  }, [currentPageUrl]);

  // fetch the episodes when user searches

  useEffect(() => {
    setList([]);
    setLoading(true);

    const searchUrl = `https://kitsu.io/api/edge/anime/1555/episodes?page[limit]=10&filter[number]=${userSearch}`;

    fetchEpisodes(searchUrl);
  }, [userSearch]);

  return (
    <div>
      <SearchBox
        setCurrentPageUrl={setCurrentPageUrl}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
      />
      <EpisodeList loading={loading} list={list} />
    </div>
  );
}
