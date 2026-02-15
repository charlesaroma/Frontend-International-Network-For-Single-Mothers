import React from "react";
import Projects from "./projectsHero";
import Stats from "./projectStats";
import Funds from "./projectFunds";
import Sponsorship from "./projectSponsership";

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
