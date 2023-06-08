import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineCarRepair } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import {RiHotelFill} from "react-icons/ri"

export const Timeline = () => {
  
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
        Harikarthi <span className="different">Carrer chart💫</span>
        </h2>
        <VerticalTimeline lineColor={"white"}>
          <VerticalTimelineElement
            date={"Dec  2022 - May  2023"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={< IoIosSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              GUVI IIT MADRAS
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
              
            </h4>
            <p data-aos="fade-right">
              Studied
              Fullstack developer Program / MERN Stack
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jan 2023 - May 2023"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<RiHotelFill />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Alfouz Arcade Restaurant
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chinna Salem
            </h4>
            <p data-aos="fade-right">
            Worked as a General Manager 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"oct 2017 - May 2023"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<GiAutoRepair/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Graphics Designs & Cafe Technical Care
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Bussiness ideas, Staff pulling, Accessories,card designing, pamplests,etc
            </h4>
            <p data-aos="fade-right">
            Freelancing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jan 2020 - Sep 2022"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<RiHotelFill/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Light House Corner Restaurant
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Salem
            </h4>
            <p data-aos="fade-right">
              Enterpuner
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"May 2017 - Dec 2019"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<RiHotelFill/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Hotel Amr Eveergreen 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
               in Salem
            </h4>
            <p data-aos="fade-right">
            Over All Incharge 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2014 - Apr 2017"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<IoIosSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Muthayammal Polytechnic College
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Rasipuram
            </h4>
            <p data-aos="fade-right">
              Diplomo in Mechanical Engineering 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<BsFillStarFill />}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};