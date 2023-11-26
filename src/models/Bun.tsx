import { useGLTF } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";
import { suspend } from "suspend-react";

const bunnyPromise = import("@pmndrs/assets/models/bunny.glb");

export const Bun = ({
  scale,
  position,
  rotation,
  color,
}: {
  scale?: Vector3;
  position?: Vector3;
  rotation?: Euler;
  color: string;
}) => {
  const { nodes } = useGLTF(suspend(bunnyPromise).default);
  return (
    <mesh
      receiveShadow
      castShadow
      geometry={nodes.mesh.geometry}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial color={color} roughness={0.5} />
    </mesh>
  );
};
