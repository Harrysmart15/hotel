import React from "react";
import "../../App.css";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { Animate } from "./Animate";
import { iconsData } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer id="skills">
      <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>
      
     <div className="animate">

     <Animate />
      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <a href={iconData.href} key={iconData.id} target={"_blank"}>
              <TechnologyIcon
                key={iconData.id}
                src={iconData.icon}
                alt={iconData.name}
                title={iconData.name}
                {...iconData}
              />
            </a>
          );
        })}
      </TechnologiesIcons>
      </div>
    </TechnologiesContainer>
  );
};

export default Technologies;
