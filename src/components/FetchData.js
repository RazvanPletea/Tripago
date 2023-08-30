// import React, { useState, useEffect } from "react";

// export default function FetchData() {
//   const id = 1555;
//   const [list, setList] = useState([]);
//   const [url, setUrl] = useState(
//     `https://kitsu.io/api/edge/anime/${id}/episodes`
//   );
//   const [currentPageUrl, setCurrentPageUrl] = useState(
//     `https://kitsu.io/api/edge/anime/${id}/episodes`
//   );

//   const fetchEpisodes = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log(data);

//       setCurrentPageUrl(data.links.next); // Update the next page URL
//       setList((prevList) => [...prevList, ...data.data]); // Combine new episodes with existing ones
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEpisodes(currentPageUrl);
//   }, [currentPageUrl]);

//   console.log(list);

//   return (
//     <div>
//       <ul>
//         {list.map((item) => (
//           <li key={`${item.id}`}>
//             <h3>{item.attributes.titles.en_us}</h3>
//           </li>
//         ))}
//       </ul>
//       {currentPageUrl && (
//         <button
//           onClick={() => {
//             fetchEpisodes(currentPageUrl);
//           }}
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import styles from "./fetchData.css";
export default function FetchData() {
  const id = 1555;
  const [loading, setLoading] = useState("true");
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
      console.log(data);

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

  console.log(list);

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
              <img src={process.env.PUBLIC_URL + "/assets/tiny.jpg"} />
              <h3>
                <span className="episode-number">
                  Episode {item.attributes.number}
                </span>
                <span className="episode-title">
                  {item.attributes.titles.en_us}
                </span>
                <div className="manga-filler">
                  <span className="manga-cannon "> cannon</span>
                </div>
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
