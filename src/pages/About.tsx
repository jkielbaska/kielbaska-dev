import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../components/CTA";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className=" text-white h-screen">
      <h1 className="text-4xl w-full font-light h-20 pt-[130px] flex items-end justify-center">
        Hello, I'm&nbsp;
        <span className="font-semibold text-turquoise">Jakub</span>
      </h1>
      <div className="text-xl mt-2 flex items-start justify-center gap-3 text-zinc-400">
        <p>Frontend Engineer based in Poland</p>
      </div>
      <div className="w-full px-10 py-2 mt-4 text-zinc-400 sm:block hidden">
        <p className="text-center">
          I believe that my skills in fast learning, adaptability, and
          communication make me a strong candidate. As a Front-End developer, I
          understand the importance of keeping up with the latest technologies
          and trends. I enjoy taking on new challenges and I am not afraid to
          step out of my comfort zone.
        </p>
      </div>

      <div className="p-10 w-full flex flex-col">
        <p className="text-xs font-extralight text-zinc-500 pl-1">some of</p>
        <h3 className="pl-1 text-2xl font-light ">My Skills</h3>
        <div className="mt-4 flex justify-center flex-wrap gap-7">
          {skills.map((skill) => (
            <Link
              to={skill.link_to}
              target="_blank"
              className="block-container w-20 h-20"
              title={skill.name}
              key={skill.name}
              aria-label={skill.name}
            >
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-10 w-full">
        <h3 className="pl-1 text-2xl font-light">Work Experience</h3>
        <div className="w-full py-4 px-2 text-zinc-400">
          <p>
            Down below is brief description of my commercial experience. If you
            want to know more -{" "}
            <Link to="/contact" className="underline md:hover:text-turquoise">
              contact me!
            </Link>
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline lineColor="#ffffff33">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentArrowStyle={{ borderRight: "7px solid  #ffffff33" }}
                contentStyle={{
                  borderBottom: "4px",
                  backgroundColor: "#ffffff33",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className="text-zinc-400">
                  <p className="text-zinc-500 text-xs">{experience.date}</p>
                  <h3 className=" text-xl">{experience.title}</h3>

                  {experience.href ? (
                    <Link
                      className="m-0 md:hover:underline flex md:w-1/3 w-full"
                      target="_blank"
                      to={experience.link_to}
                    >
                      {experience.company_name}
                      <span className="text-xs text-zinc-500 font-light">
                        &nbsp; (preview)
                      </span>
                    </Link>
                  ) : (
                    <p style={{ margin: 0 }}>{experience.company_name} </p>
                  )}
                </div>

                <ul className="text-zinc-400 my-5 ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="list-disc font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-zinc-800 w-[95%] mx-auto" />
      <CTA />
    </section>
  );
};
