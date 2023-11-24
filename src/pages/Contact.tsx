// import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { ContactForm } from "../components/ContactForm";
import { Bun } from "../models/Bun";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

export const Contact = () => {
  const [rotate, setRotate] = useState(false);
  const handleFocus = () => setRotate(true);
  const handleBlur = () => setRotate(false);
  return (
    <div className="w-full h-screen flex justify-center items-center md:flex-row flex-col-reverse sm:shadow-innerGlow">
      <ContactForm
        name={"name/company"}
        email={"email"}
        message={"What can I do for you?"}
        button={"Send!"}
        successToast={"Message sent succesfully"}
        errorToast={"something went wrong, try again :("}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <div className="md:pb-0 pb-7">
        <Canvas
          camera={{ position: [-2.8, 0.7, 5.5], fov: 40, near: 1, far: 25 }}
        >
          <OrbitControls
            autoRotate={rotate}
            autoRotateSpeed={2.7}
            enableRotate={false}
            enableZoom={false}
          />
          <ambientLight intensity={1} />
          <pointLight
            distance={55}
            intensity={55}
            position={[0.2, 2, 0.7]}
            color="orange"
          />
          <pointLight
            distance={55}
            intensity={55}
            position={[0, 2, -3]}
            color="orange"
          />
          <pointLight
            distance={55}
            intensity={55}
            position={[-5, 0, 2]}
            color="orange"
          />
          <Bun color="#122" scale={1.9} />
        </Canvas>
      </div>
    </div>
  );
};
// outline outline-[1rem] outline-borderOrange

{
  /* <div className="relative w-screen h-screen flex justify-center items-center bg-gradient-radial from-yellow via-borderOrange to-black"></div> */
}
{
  /* <div className="z-0 blur-sm shadow-glow w-[85%] h-[80%] bg-black rounded-2xl outline outline-[0.2rem] outline-borderOrange" /> */
}
