import { useFrame } from "@react-three/fiber";
import { Instances, ComputersProvider } from "./Provider";
import { Bun } from "../Bun";
import { MeshReflectorMaterial, useScroll } from "@react-three/drei";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Group, Object3DEventMap } from "three";

export const AllElements = () => {
  const allElementsRef = useRef<Group<Object3DEventMap>>(null!);
  const tl = useRef(gsap.timeline());
  const scroll = useScroll();

  useFrame(() => {
    tl?.current.seek(scroll?.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      allElementsRef.current.position,
      { duration: 1, x: -2.7, y: -0.58, z: 5 },
      1
    );
    tl.current.to(
      allElementsRef.current.rotation,
      { duration: 0.5, x: 0, y: -0.47, z: 0 },
      1
    );

    tl.current.to(
      allElementsRef.current.position,
      { duration: 1, x: 0, y: -1, z: 1 },
      0
    );
    tl.current.to(
      allElementsRef.current.rotation,
      { duration: 1, x: 0, y: -1.3, z: 0 },
      0
    );
  }, []);

  return (
    <group position={[0, -0.85, 0.5]} ref={allElementsRef}>
      <Instances>
        <ComputersProvider scale={[0.5, 0.5, 0.5]} />
      </Instances>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 30]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.2}
          maxDepthThreshold={1.4}
          color="#202020"
          metalness={0.8}
          mirror={0}
        />
      </mesh>
      <Bun
        scale={0.5}
        position={[0, 0.3, 0.5]}
        rotation={[0, -Math.PI * 0.85, 0]}
        color="#222"
      />
      <pointLight
        distance={1.5}
        intensity={1}
        position={[-0.15, 0.7, 0]}
        color="orange"
      />
    </group>
  );
};
