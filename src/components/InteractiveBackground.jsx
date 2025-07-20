import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const InteractiveBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: "#000000"
      }
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ff0000"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ff0000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />

      {/* Main content stays above the particles */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
