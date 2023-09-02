import "./legend.css";
import "../colors.css";
import { useState, useEffect } from "react";
export default function Legend() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000);

    return () => {
      clearTimeout(delayTimer);
    };
  }, []);

  return (
    <div className="legend-container">
      <div className="filter manga">
        <span>MANGA-CANNON</span>
      </div>
      <div
        className={`legend-item ${
          animationComplete ? "slide-in-from-left" : "hidden"
        }`}
      >
        <span>
          Manga-canon: When an anime adaptation is referred to as "manga-canon,"
          it means that the episodes closely follow the storyline, characters,
          and events as depicted in the original manga. I
        </span>
      </div>
      <div className="filter">
        <span>Mixed-Manga-canon</span>
      </div>
      <div
        className={`legend-item ${
          animationComplete ? "slide-in-from-left" : "hidden"
        }`}
      >
        <span>
          {" "}
          In some anime adaptations, you may find a combination of manga-canon
          and filler episodes. This is referred to as "mixed-manga-canon." In
          such cases, the anime follows the main story arcs faithfully but also
          includes filler episodes or arcs in between
        </span>
      </div>

      <div className="filter">
        <span>FILLER</span>
      </div>
      <div
        className={`legend-item ${
          animationComplete ? "slide-in-from-left" : "hidden"
        }`}
      >
        <span>
          Filler: Filler episodes or arcs are episodes in an anime that are not
          based on the original manga source material. These episodes are
          created by the anime studio to extend the series or to give the manga
          time to get ahead of the anime.
        </span>
      </div>
    </div>
  );
}
