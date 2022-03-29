import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import "./TeamCard.css";

const LinkIcon = ({ type }) => {
  return <>{type === "twitter" ? <FaTwitter /> : <FaLinkedin />} </>;
};
const TeamCard = ({ name, role, image, links, animeDuration }) => {
  return (
    <Slide bottom duration={animeDuration}>
      <div className="team-col">
        <div className="team-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div>
          <h3 className="team-name">{name}</h3>
          <p className="team-role">{role}</p>
          <div className="links">
            {links?.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer">
                <LinkIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TeamCard;
