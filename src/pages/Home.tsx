import { Canvas } from "@react-three/fiber";
import { Experience } from "../models/computers/Experience";
import { Suspense } from "react";
import { Loader } from "../components/Loader";
// import { Title } from "../components/Title";

export const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [-2.8, 0.7, 5.5], fov: 40, near: 1, far: 25 }}
        eventPrefix="client"
      >
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </section>
  );
};
