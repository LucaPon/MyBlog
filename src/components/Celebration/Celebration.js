import React, { useEffect, useRef } from "react";
import "./Celebration.css";

const Celebration = ({ position }) => {
  const celebrationView = useRef();

  const celebrationEnd = (e) => {
    celebrationView.current.classList.remove("celebration-visible");
  };

  useEffect(() => {
    if (position <= 3 && position >= 0) {
      celebrationView.current.className = "celebration celebration-visible";
    }
  }, [position]);

  return (
    <div
      ref={celebrationView}
      onAnimationEnd={celebrationEnd}
      className="celebration"
    >
      <h1>{position === 1 ? "Complimenti!" : "Continua così!"}</h1>
      <h1>Hai raggiunto la {position}° posizione!</h1>
    </div>
  );
};

export default Celebration;
