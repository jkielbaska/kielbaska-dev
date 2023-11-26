import { BakeShadows, ScrollControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import { AllElements } from "./AllElements";
import { Overlay } from "../../components/Overlay";

export const Experience = () => {
  return (
    <>
      <color attach="background" args={["black"]} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <ScrollControls pages={3} damping={0.35}>
        <Overlay />
        <AllElements />
      </ScrollControls>

      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={6}
        />
        <DepthOfField
          target={[0, 0, 12.7]}
          focalLength={0.3}
          bokehScale={15}
          height={700}
        />
      </EffectComposer>
      <BakeShadows />
    </>
  );
};
