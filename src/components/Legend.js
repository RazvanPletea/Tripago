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
          Manga Canon Episodes: They faithfully follow the manga's main story,
          maintaining key events, character growth, and the original plot's
          integrity.
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
          These episodes blend elements from the manga with anime-original
          content, expanding the story while maintaining the core storyline's
          integrity.
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
          These episodes stray from the manga's main story, often featuring
          unrelated or less engaging plots that may not resonate with fans of
          the original narrative.
        </span>
      </div>
    </div>
  );
}
