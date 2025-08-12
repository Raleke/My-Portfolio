import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Reduced from 250 for better performance
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#ffffff", "#87ceeb", "#f0f8ff"], // Reduced color variations
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8, // Reduced opacity for less visual impact
            random: false, // Disabled random opacity for better performance
            anim: {
              enable: false, // Disabled opacity animation
            },
          },
          size: {
            value: 1.5, // Reduced from 3 to smaller particles
            random: {
              enable: true,
              minimumValue: 0.5 // Reduced minimum size
            },
            anim: {
              enable: false, // Disabled size animation for performance
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.05, // Reduced speed for less CPU usage
            random: false, // Simplified movement
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: {
              enable: false, // Disabled click interaction for performance
            },
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false, // Disabled parallax for better performance
              }
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100, // Reduced interaction distance
              size: 3, // Smaller bubble size
              duration: 1,
              opacity: 0.6,
              speed: 1
            }
          },
        },
        retina_detect: true,
        background: {
          color: "transparent",
        },
      }}
    />
  );
}

export default Particle;
