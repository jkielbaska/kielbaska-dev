import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html>
      <div className="w-full h-full flex  justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-borderOrange border-t-borderOrange rounded-full animate-spin" />
      </div>
    </Html>
  );
};
