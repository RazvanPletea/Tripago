import React from "react";
import { cannon, mixed, filler } from "./EpisodeTags";
import "./episodeList.css";
import "../colors.css";

export default function EpiosodeList({ loading, list }) {
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

  return (
    <div className="episode-container">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={`${item.id}`}>
              <img
                src={"/assets/tiny.jpg"}
                alt={`Episode ${item.attributes.number}`}
              />
              <h3>
                <div className="episode-tag">
                  <span className="episode-number">
                    EP{item.attributes.number}
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
