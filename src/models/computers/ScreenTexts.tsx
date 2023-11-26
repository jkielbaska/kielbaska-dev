import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Text, useCursor } from "@react-three/drei";
import { SpinningBox } from "../SpinningBox";
import { Screen } from "./Screen";
import { useNavigate } from "react-router-dom";
import { Mesh } from "three";

export const ScreenText = ({
  invert,
  x = 0,
  y = 1.2,
  frame,
  panel,
  position,
  rotation,
  scale,
}: {
  invert?: boolean;
  x?: number;
  y?: number;
  frame?: string;
  panel?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) => {
  const textRef = useRef<Mesh>(null!);
  const rand = Math.random() * 1000;
  useFrame(
    (state) =>
      (textRef.current.position.x =
        x + Math.sin(rand + state.clock.elapsedTime / 4) * 8)
  );
  return (
    <Screen
      invert={invert}
      x={x}
      y={y}
      frame={frame}
      panel={panel}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        position={[x, y, 0]}
        ref={textRef}
        fontSize={4}
        letterSpacing={-0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        J.Kielbaska
      </Text>
    </Screen>
  );
};

export function ScreenInteractive({
  text,
  href,
  frame,
  panel,
  position,
}: {
  text: string;
  href: string;
  frame: string;
  panel: string;
  position: [number, number, number];
}) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  useCursor(isHovering);

  return (
    <Screen frame={frame} panel={panel} position={position}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 10]}
      />
      <color attach="background" args={["orange"]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <Text
        position={[-2.5, 1.05, 2]}
        fontSize={0.3}
        letterSpacing={-0.1}
        color={"#000000"}
        onClick={() => navigate(href)}
        onPointerOver={() => setIsHovering(true)}
        onPointerOut={() => setIsHovering(false)}
      >
        {text}
      </Text>
      <SpinningBox position={[-3.15, 0.65, 0]} scale={0.5} />
    </Screen>
  );
}
