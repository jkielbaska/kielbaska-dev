import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 bottom-0 right-0 left-0 flex">
        <div className="h-20 border-2 border-opacity-40 border-borderOrange animate-spin" />
      </div>
    </Html>
  );
};
