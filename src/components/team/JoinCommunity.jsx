import React from "react";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./JoinCommunity.css";

import twitter from "../../images/socials/twitter.svg";
import reddit from "../../images/socials/reddit.svg";
import github from "../../images/socials/github.svg";
import discord from "../../images/socials/discord.svg";
import medium from "../../images/socials/medium.svg";

const Icon = ({ image, name, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="icon-item">
        <div className="social-img" style={{ backgroundImage: `url(${image})` }}></div>
        <h5 className="social-name">{name}</h5>
      </div>
    </a>
  );
};

const JoinCommunity = () => {
  return (
    <div className="team-join">
      <Flash>
        <h2>JOIN THE COMMUNITY</h2>
      </Flash>
      <Fade>
        <p>Learn more about Adademon, chat with the team and the community, have your say in shaping the future of decentralized finance.</p>
      </Fade>
      <Slide bottom>
        <div className="icon-container">
          <Icon image={twitter} name="Twitter" link="https://twitter.com/ADADEMON_?t=gPBFY7DCnGGBy2iWngw8dg&s=09" />
          <Icon image={reddit} name="Reddit" link="https://www.reddit.com/user/Ada_demon/" />
          <Icon image={github} name="Github" link="https://github.com/ADADEMON" />
          <Icon image={discord} name="Discord" link="https://discord.gg/dmVcqaa86S" />
          <Icon image={medium} name="Medium" link="https://medium.com/@ADADEMON" />
        </div>
      </Slide>
    </div>
  );
};

export default JoinCommunity;
