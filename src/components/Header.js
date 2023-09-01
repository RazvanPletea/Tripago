import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import clone1 from "../images/narutoClone1.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="parallax-effect">
        <Parallax pages={2} style={{}} className="parallax-container">
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

          {/* Clone 1 */}
          <ParallaxLayer
            offset={0.6}
            speed={0} // Adjust speed for the clone's movement
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
                opacity: 0.6,
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
              }}
            />
          </ParallaxLayer>

          {/* Clone 2 */}
          <ParallaxLayer
            offset={1} // Adjust offset for when the next clones appear
            speed={-2} // Adjust speed for the clone's movement
            factor={1}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              maxWidth: "100%",
              height: "100%",
            }}
          >
            {window.innerWidth < 1000 && (
              <img
                src={clone1}
                alt="Naruto"
                style={{
                  maxWidth: "500px",
                  width: "30%",
                  position: "absolute",
                  top: "30%", // Adjust position for the second set of clones
                  right: "35%", // Adjust position for the second set of clones
                  transform: "translateY(-150%)",
                  zIndex: 0,
                  opacity: 0.6,
                }}
              />
            )}
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="animated-typing">
        <TypeAnimation
          sequence={[
            "Naruto Shippuden",
            1000,
            "Anime Episodes",
            1000,
            "Filler and manga-cannon",
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={30}
          deletionSpeed={40}
          style={{ display: "inline-block" }}
        />
      </div>
    </div>
  );
}
