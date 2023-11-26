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
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
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
        <Section opacity={opacityLastSection}>
          <div className="text-center text-2xl flex-col flex items-center justify-start pt-12 sm:pt-24">
            <p>If you think I'll be a good fit for your company,</p>
            <p>or if you have any questions</p>
            <button
              className="text-transparent sm:shiny-text font-bold hover:text-orange uppercase text-3xl"
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
