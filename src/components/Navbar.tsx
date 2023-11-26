import { useState, useRef, useEffect } from "react";
import { useVisibilityChange } from "@uidotdev/usehooks";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

import gymno from "../assets/gymnopedie.mp3";
import { soundoff, soundon } from "../assets/icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const documentVisible = useVisibilityChange();
  const audioRef = useRef<HTMLAudioElement>(new Audio(gymno));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic && documentVisible) {
      audio.play();
    }
    return () => {
      audio.pause();
    };
  }, [isPlayingMusic, documentVisible]);

  return (
    <header className="fixed backdrop-blur-sm z-10 flex justify-between items-center w-full pl-5 pt-2 pr-7">
      <div className="w-10 h-10 rounded-lg  bg-transparent text-zinc-400 border-4 border-turquoise md:border-zinc-200 flex items-center justify-center font-bold md:hover:border-turquoise focus:outline-none">
        <NavLink to="/" className="">
          JK
        </NavLink>
      </div>
      <div className="">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic((prev) => !prev)}
          className="w-7 h-7 opacity-80 cursor-pointer object-contain"
        />
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center rounded-md bg-transparent text-sm font-semibold text-zinc-200 md:hover:text-turquoise">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 md:w-[110px] h-auto w-[140px]  flex uppercase focus:outline-none justify-center rounded-md bg-white">
            <div className="py-1 flex flex-col gap-1 pt-1 text-lg md:gap-0 md:pt-0 ">
              {links.map((link) => (
                <Menu.Item key={link.to} as={Fragment}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-borderOrange md:hover:cursor-default focus:outline-none"
                        : "text-zinc-500 md:hover:text-turquoise focus:outline-none"
                    }
                  >
                    {link.label}
                  </NavLink>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
};
