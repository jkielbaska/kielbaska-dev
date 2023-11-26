import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="header fixed backdrop-blur-sm z-10 flex justify-between w-full p-5 pr-7">
      <div className=" w-10 h-10 rounded-lg  bg-transparent text-zinc-400 border-4 border-zinc-200 flex items-center justify-center font-bold hover:border-4 hover:border-turquoise hover:bg-transparent ">
        <NavLink to="/" className="">
          JK
        </NavLink>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center rounded-md bg-transparent text-sm font-semibold text-zinc-200 hover:text-turquoise">
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
          <Menu.Items className="absolute right-0 z-10 w-[110px] flex uppercase  justify-center rounded-md bg-white">
            <div className="py-1 flex flex-col">
              {links.map((link) => (
                <Menu.Item key={link.to} as={Fragment}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-borderOrange hover:cursor-default"
                        : "text-zinc-500 hover:text-turquoise"
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
