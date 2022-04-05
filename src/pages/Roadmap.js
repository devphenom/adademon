import React from "react";
import Flash from "react-reveal/Flash";
import "./Roadmap.css";
import roadmap from "../images/roadmap.png";

function Roadmap() {
  return (
    <section className="roadmap">
      <Flash>
        <img src={roadmap} alt="Roadmap" />
      </Flash>
    </section>
  );
}

export default Roadmap;
