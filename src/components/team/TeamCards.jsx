import React from "react";
import TeamCard from "../cards/TeamCard";

import avatar1 from "../../images/avatars/avatar1.png";
import avatar2 from "../../images/avatars/avatar2.png";
import avatar3 from "../../images/avatars/avatar3.png";
import avatar4 from "../../images/avatars/avatar4.png";
import avatar5 from "../../images/avatars/avatar5.png";
import avatar6 from "../../images/avatars/avatar6.png";
import avatar7 from "../../images/avatars/avatar7.png";
import avatar8 from "../../images/avatars/avatar8.png";

import "./TeamCards.css";

const TeamCards = () => {
  return (
    <div className="team-cards">
      <TeamCard animeDuration={1000} name="Larry Wright" role="Founder" image={avatar1} links={[{ type: "twitter", url: "https://twitter.com/larrywright__" }]} />
      <TeamCard
        animeDuration={1100}
        name="Leon Nicholas"
        role="CTO"
        image={avatar2}
        links={[
          { type: "twitter", url: "https://twitter.com/Leonmartin01" },
          { type: "linkedin", url: "http://www.linkedin.com/in/leon-nicholas-83079b236" },
        ]}
      />
      <TeamCard animeDuration={1200} name="Anjit Khan" role="Project Manager" image={avatar3} links={[{ type: "twitter", url: "https://twitter.com/anjitkhan?t=2-au_pOl8zGL5XYjwTBEDQ&s=09" }]} />
      <TeamCard animeDuration={1300} name="Marcelo Iglesias" role="Lead Engineer" image={avatar4} />
      <TeamCard animeDuration={1400} name="Ronan Ford" role="Lead Game Designer" image={avatar5} />
      <TeamCard
        animeDuration={1500}
        name="Rodrigo Hernandez"
        role="Software Engineer"
        image={avatar6}
        links={[
          { type: "linkedin", url: "https://www.linkedin.com/in/rodrigo-hernandez-b4a679235/" },
          { type: "twitter", url: "https://twitter.com/Hernandez_Row?t=WBi40PI84gX6nUHNdZ9KXg&s=09" },
        ]}
      />
      <TeamCard animeDuration={1600} name="Ethan Bush" role="Software Quality Assurance" image={avatar7} links={[{ type: "twitter", url: "https://twitter.com/ethanbush_p2e" }]} />
      <TeamCard animeDuration={1700} name="Felipe Weimal" role="Developer" image={avatar8} links={[{ type: "twitter", url: "https://twitter.com/felipeweimal" }]} />
    </div>
  );
};

export default TeamCards;
