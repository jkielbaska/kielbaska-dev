// import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { ContactForm } from "../components/ContactForm";
//@ts-expect-error - temporary change for jsx
import { Bun } from "../models/Bun";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Loader } from "../components/Loader";

export const Contact = () => {
  const [rotate, setRotate] = useState(false);
  const handleFocus = () => setRotate(true);
  const handleBlur = () => setRotate(false);
  return (
    <div className="w-full h-screen flex justify-center items-center md:flex-row flex-col-reverse ">
      <h1 className="absolute sm:top-[130px] sm:z-0 z-10 top-[80px] text-5xl right-auto left-auto shiny-text font-semibold">
        Contact me!
      </h1>
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
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
