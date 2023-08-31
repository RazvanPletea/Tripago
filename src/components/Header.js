import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import clone1 from "../images/narutoClone1.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="parallax-effect">
        <Parallax pages={2} style={{}}>
          {/* the main naruto that is also sticky */}
          <ParallaxLayer
            sticky={{ start: 0, end: 2 }}
            offset={0}
            speed={0}
            factor={1}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
                height: "100vh", // Set to full viewport height
              }}
            >
              <img
                src={clone1}
                alt="Naruto"
                style={{
                  maxWidth: "500px",
                  width: "40%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              />
            </div>
          </ParallaxLayer>

          {/* the "clones" */}
          <ParallaxLayer
            offset={0.7}
            speed={0}
            factor={1}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              maxWidth: "100%",
              height: "100%",
            }}
          >
            <img
              src={clone1}
              alt="Naruto"
              style={{
                maxWidth: "500px",
                width: "30%",
                position: "absolute",
                top: "40%",
                right: "10%",
                transform: "translateY(-40%)",
                zIndex: 0,
                opacity: 0.6, // Adjust this value for image size
              }}
            />
            <img
              src={clone1}
              alt="Naruto"
              style={{
                maxWidth: "500px",
                width: "30%",
                position: "absolute",
                top: "40%",
                left: "10%",
                transform: "translateY(-50%)",
                zIndex: 2,
                opacity: 0.7,
                // Adjust this value for image size
              }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="animated-typing">
        <TypeAnimation
          sequence={[
            "Naruto Shippuden",
            1000,
            "Filler",
            2000,
            "And manga-cannon",
            1000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={30}
          deletionSpeed={20}
          style={{ fontSize: "48px", display: "inline-block" }}
        />
      </div>
    </div>
  );
}
