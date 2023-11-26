import { Canvas } from "@react-three/fiber";
import { ScreenInteractive } from "../models/computers/ScreenTexts";
import { links } from "../constants/links";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center text-zinc-300">
      <p className="w-screen flex justify-center items-center text-4xl">404</p>
      <div className="w-full h-auto">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ScreenInteractive
            text={"404"}
            href={"/"}
            frame="Object_206"
            panel="Object_207"
            position={[0, 0, 0]}
          />
        </Canvas>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="md:hover:text-turquoise focus:outline-none"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
