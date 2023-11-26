import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, useCursor } from "@react-three/drei";
import { Mesh } from "three";

export function SpinningBox({
  scale,
  position,
}: {
  scale: number;
  position: [number, number, number];
}) {
  const ref = useRef<Mesh>(null!);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useCursor(isHovering);
  useFrame(
    (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
  );
  return (
    <mesh
      position={position}
      ref={ref}
      scale={
        isClicked
          ? scale * 1
          : !isHovering && !isClicked
          ? scale * 1.2
          : scale * 1.4
      }
      onClick={() => setIsClicked((prevState) => !prevState)}
      onPointerOver={() => setIsHovering(true)}
      onPointerOut={() => setIsHovering(false)}
    >
      {isClicked ? (
        <Sphere args={[1.5, 100, 250]}>
          <MeshDistortMaterial
            color={isHovering ? "#ff38dd" : "#ff6638"}
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      ) : (
        <>
          <boxGeometry />
          <meshStandardMaterial color={isHovering ? "#ff38dd" : "#ff6638"} />
        </>
      )}
    </mesh>
  );
}
