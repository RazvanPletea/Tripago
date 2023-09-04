import "./legend.css";
import "../colors.css";
import { useState, useEffect } from "react";
import sharringanImage from "../images/uchiha-sharingan.gif";
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
    <div className="intro-section">
      <div className="website-description">
        <div className="text-cotainer">
          <h2 className="welcome">Welcome to tripago</h2>
          <p> Explore the world of Naruto with us!</p>
          <p>
            Uncover the mysteries of every episode as we organize them into
            three clear categories:"Manga Canon," "Mixed," and "Filler." With
            our guidance, you'll easily discern which episodes faithfully follow
            the manga's main story, which expand the narrative with
            anime-original content, and which take delightful detours into
            filler arcs.{" "}
          </p>

          <p>Ready to begin? Start your adventure now!</p>
        </div>

        <img
          className="description-image"
          src={sharringanImage}
          alt="Sharringan"
        />
      </div>
      <div className="legend-container">
        <div className="filter manga">
          <span>CANNON</span>
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
        <div className="filter mixed-legend">
          <span>MIXED</span>
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

        <div className="filter filler-legend">
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
    </div>
  );
}
