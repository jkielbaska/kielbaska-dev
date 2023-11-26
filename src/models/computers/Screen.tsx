import { useGLTF, RenderTexture } from "@react-three/drei";
//@ts-expect-error - to get glb files with no typings
import computersScene from "../../assets/3d/computers_1-transformed.glb";
import { Euler, GroupProps, Vector3 } from "@react-three/fiber";

interface ScreenProps extends GroupProps {
  frame?: string;
  panel?: string;
  invert?: boolean;
  x?: number;
  y?: number;
  position?: Vector3;
  rotation?: Euler;
  scale?: Vector3;
  children: React.ReactNode;
}

export function Screen({ frame, panel, children, ...groupProps }: ScreenProps) {
  const { nodes, materials } = useGLTF(computersScene);
  return (
    <group {...groupProps}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}
