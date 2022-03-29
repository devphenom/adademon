import React from "react";
import Flash  from "react-reveal/Flash";
import TeamCards from "./TeamCards";
import "./TeamHero.css";

const TeamHero = () => {
  return (
    <div className="team-hero">
      <Flash>
        <h1>THE TEAM</h1>
      </Flash>
      <TeamCards />
    </div>
  );
};

export default TeamHero;
