import { ReactNode, useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

const Section = ({
  opacity,
  children,
}: {
  opacity: number;
  children: ReactNode;
}) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10`}
      style={{
        opacity: opacity,
      }}
    >
      <div className="w-full h-[90vh] text-white font-extralight">
        {children}
      </div>
    </section>
  );
};

export const Overlay = () => {
  const navigate = useNavigate();
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
    setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4));
    setOpacityThirdSection(scroll.curve(2 / 4, 1 / 4));
    setOpacityLastSection(scroll.range(3 / 4, 1 / 4));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <div className="w-full h-full text-2xl flex-col flex items-end justify-end sm:p-11 text-end">
            <p>
              <b>Hello :)</b>
            </p>
            <p> I'm delighted to welcome you on my page.</p>
          </div>
        </Section>
        <Section opacity={opacitySecondSection}>
          <div className="w-full h-full text-2xl flex-col flex items-start justify-center mb-8">
            <p>
              As a <b>Front-End engineer,</b>
            </p>
            <p> fueled by a passion for programming,</p>
            <p>
              I firmly believe <b>everything is doable.</b>
            </p>
            <p>Only imagination can stop us.</p>
            <button
              className="text-turquoise font-bold pt-2 uppercase md:hover:underline"
              onClick={() => navigate("/about")}
            >
              Explore more about my journey
            </button>
          </div>
        </Section>

        <Section opacity={opacityThirdSection}>
          <div className="text-end w-full h-full text-2xl flex-col flex items-end justify-center ">
            <p>Feel free to explore</p>
            <p>
              my{" "}
              <b>
                <a
                  className="md:hover:text-borderOrange"
                  target="_blank"
                  href="https://github.com/jkielbaska"
                >
                  projects on GitHub
                </a>
              </b>
              .
            </p>
            <p>Your curiosity is always welcome!</p>
            <button
              className="text-turquoise font-bold pt-2 uppercase md:hover:underline"
              onClick={() => navigate("/projects")}
            >
              my projects
            </button>
          </div>
        </Section>

        <Section opacity={opacityLastSection}>
          <div className="text-center text-2xl flex-col flex items-center justify-start pt-12  2xl:pt-24">
            <p>
              If you think I'll be a <b>good fit</b> for your company,
            </p>
            <p>
              or if you have <b>any questions</b>
            </p>
            <button
              className="hidden 2xl:block shiny-text font-bold uppercase text-3xl"
              onClick={() => navigate("/contact")}
            >
              Contact me!
            </button>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
