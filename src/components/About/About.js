import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "./Profile Photo.png";

import { Timeline } from "./Timeline";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>
      
      
      <AboutContent>
      
        {/* <AboutImage src={myImage} /> */}
        <div class="rounded-circle">
                                    <img
                                        src="https://10619-2.s.cdn12.com/reviews/original/750828.jpg"
                                        class="rounded-circle mx-auto d-block"
                                        alt="my photo"
                                        width="170px"
                                        heigth="250px"
                                    />

                                </div>
        <AboutDetailsContainer>
          <StyledParagraph>
         I am eager to work in a competitive field and embrace challenges. With my skills and experience, I am seeking an opportunity to join a highly esteemed company that provides a platform for me to utilize my expertise and skills for the mutual growth and benefit of both the company and myself.
            
          </StyledParagraph>
          <StyledParagraph>
          I began my career from scratch, where I acquired extensive knowledge about the hotel industry through hands-on experience and learning from industry experts, as well as online platforms
          </StyledParagraph>
          <StyledParagraph>
          I started my self-learning journey with online tutorials on platforms like Google and YouTube. To further enhance my skills, I enrolled in the GUVI IIT MADRAS Fullstack Developer Program, which offered comprehensive programming training and real-world project experience. Additionally, I learned the MERN stack from GUVI and utilized ReactJS, Node.js, Express.js, and MongoDB to build a website. </StyledParagraph>
         
          
        </AboutDetailsContainer>
      </AboutContent>
      <Timeline />
    </StyledAbout>
  );
};

export default About;
