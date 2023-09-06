import "./legend.css";
import "../colors.css";
import { useState } from "react";
import sharringanImage from "../images/uchiha-sharingan.gif";

export default function Legend() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className="intro-section">
      <div className="website-description">
        <div className="text-container">
          <h2 className="welcome">Welcome to tripago</h2>
          <p> Explore the world of Naruto with us!</p>
          <p>
            Uncover the mysteries of every episode as we organize them into
            three clear categories: "Manga Canon," "Mixed," and "Filler." With
            our guidance, you'll easily discern which episodes faithfully follow
            the manga's main story, which expand the narrative with
            anime-original content, and which take delightful detours into
            filler arcs.
          </p>

          <p>Ready to begin? Start your adventure now!</p>
        </div>

        <img
          className="description-image"
          src={sharringanImage}
          alt="Sharringan"
        />
      </div>
      {/* legend explaining the meaning of the filler/magna */}
      <div className="legend-container">
        <div className="filter manga" onClick={() => toggleCategory("manga")}>
          <span>CANNON</span>
        </div>
        {expandedCategory === "manga" && (
          <div className="legend-item visible">
            <span>
              Manga Canon Episodes: They faithfully follow the manga's main
              story, maintaining key events, character growth, and the original
              plot's integrity.
            </span>
          </div>
        )}

        <div
          className="filter mixed-legend"
          onClick={() => toggleCategory("mixed")}
        >
          <span>MIXED</span>
        </div>
        {expandedCategory === "mixed" && (
          <div className="legend-item visible">
            <span>
              These episodes blend elements from the manga with anime-original
              content, expanding the story while maintaining the core
              storyline's integrity.
            </span>
          </div>
        )}

        <div
          className="filter filler-legend"
          onClick={() => toggleCategory("filler")}
        >
          <span>FILLER</span>
        </div>
        {expandedCategory === "filler" && (
          <div className="legend-item visible">
            <span>
              These episodes stray from the manga's main story, often featuring
              unrelated or less engaging plots that may not resonate with fans
              of the original narrative.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
