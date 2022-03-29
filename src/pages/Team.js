import React from "react";
import JoinCommunity from "../components/team/JoinCommunity";
import TeamHero from "../components/team/TeamHero";
import "./Team.css";
const Team = () => {
  return (
    <div className="team">
      <TeamHero />
      <JoinCommunity />
    </div>
  );
};

export default Team;
