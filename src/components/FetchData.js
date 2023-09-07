import React, { useState, useEffect } from "react";
import { cannon, mixed, filler } from "./EpisodeTags";
import "./fetchData.css";
import "../colors.css";
import { useSearchContext } from "../context/Context";

export default function FetchData() {
  const id = 1555;
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://kitsu.io/api/edge/anime/${id}/episodes`
  );

  const fetchEpisodes = async (currentPageUrl) => {
    try {
      const response = await fetch(currentPageUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setCurrentPageUrl(data.links.next);
      setList((prevList) => [...prevList, ...data.data]);

      // show the episodes only if they are all loaded
      if (!data.links.next) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchEpisodes(currentPageUrl);
  }, [currentPageUrl]);

  const getEpisodesType = (episodeNumber) => {
    if (cannon.includes(episodeNumber)) {
      return "cannon";
    } else if (mixed.includes(episodeNumber)) {
      return " mixed";
    } else if (filler.includes(episodeNumber)) {
      return "filler";
    }
    return "";
  };

  // searchbox

  const { filterValue } = useSearchContext();
  const filteredList = list.filter((item) => {
    const episodeNumber = item.attributes.number.toString();
    return (
      episodeNumber.includes(filterValue) ||
      parseInt(episodeNumber) >= parseInt(filterValue)
    );
  });

  return (
    <div className="episode-container">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <ul>
          {filteredList.map((item) => (
            <li key={`${item.id}`}>
              <img src={"/assets/tiny.jpg"} />
              <h3>
                <div className="episode-tag">
                  <span className="episode-number">
                    Ep {item.attributes.number}
                  </span>

                  <span className={getEpisodesType(item.attributes.number)}>
                    {getEpisodesType(item.attributes.number)}
                  </span>
                </div>
                <span className="episode-title">
                  {item.attributes.titles.en_us}
                </span>
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
