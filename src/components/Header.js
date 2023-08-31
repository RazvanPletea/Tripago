import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div className="header-container">
      <div className="animated-typing">
        <TypeAnimation
          sequence={[
            "Naruto", // Types 'One'
            1000, // Waits 1s
            "Filler", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "And manga-cannon",
            1000, // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={3}
          speed={30}
          deletionSpeed={20}
          style={{ fontSize: "48px", display: "inline-block" }}
        />
      </div>
    </div>
  );
}
