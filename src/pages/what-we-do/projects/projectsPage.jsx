import React from "react";
import Projects from "./projectsHero";
import Stats from "./projectStats";
import Funds from "./projectFunds";
import Sponsorship from "./projectSponsorship";

const whatWeDo = () => {
  return (
    <div>
      <Projects />
      <Stats />
      <Funds />
      <Sponsorship />
    </div>
  );
};

export default whatWeDo;
