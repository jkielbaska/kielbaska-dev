import { Link } from "react-router-dom";

import { projects } from "../constants";
import { CTA } from "../components/CTA";

export const Projects = () => {
  return (
    <section className="w-full h-screen text-white">
      <h1 className="text-2xl w-full font-light h-20 pt-[130px] flex items-end justify-center">
        Check out some of
      </h1>

      <div className="flex pt-2 items-start justify-center text-5xl ">
        <p className="font-light">My&nbsp;</p>
        <Link
          to="https://github.com/jkielbaska"
          target="_blank"
          className="font-semibold shiny-text md:hover:text-turquoise"
        >
          Projects
        </Link>
      </div>
      <div className="w-full px-10 py-2 mt-4 text-zinc-400 sm:block hidden">
        <p className="text-center"></p>
      </div>
      <div className="flex flex-wrap justify-center mx-12 my-24 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12 ml-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <Link to={project.link} target="_blank">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="mt-5">
              <h4 className="text-3xl text-zinc-300 font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  className="font-semibold text-turquoise  md:hover:shiny-text"
                >
                  repository
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-zinc-800 w-[95%] mx-auto" />
      <CTA />
    </section>
  );
};

export default Projects;
{
  /* <img alt="arrow" className="w-4 h-4 object-contain" /> */
}
