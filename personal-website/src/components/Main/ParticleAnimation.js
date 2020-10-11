import React from "react";
import Particles from "react-particles-js";

function ParticleAnimation(props) {
  return (
    <div className="demo-1">
      <Particles
        className="demo-1"
        params={{
          particles: {
            number: {
              value: props.numberOfParticles,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.5
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 150,
                duration: 8
              }
            }
          }
        }}
      />
    </div>
  );
}

export default ParticleAnimation;
