import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="header absolute z-10 m-4 flex justify-between w-11/12">
      <div className=" w-10 h-10 rounded-lg bg-transparent text-zinc-400 border-4 border-white flex items-center justify-center font-bold hover:border-4 hover:border-turquoise hover:bg-transparent ">
        <Link to="/" className="">
          JK
        </Link>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center rounded-md bg-transparent text-sm font-semibold text-white hover:text-turquoise">
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
          <Menu.Items className="absolute right-0 z-10 w-[100px] flex uppercase font-light justify-center rounded-md bg-white">
            <div className="py-1 flex flex-col">
              {links.map((link) => (
                <Menu.Item key={link.to} as={Fragment}>
                  <Link
                    to={link.to}
                    className={`hover:text-turquoise text-black`}
                  >
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
};

{
  /* <div
onClick={() => setIsOpen((prev) => !prev)}
className={classNames(`tham tham-e-squeeze tham-w-6 `, {
  "tham-active": isOpen,
})}
>
<div className="tham-box text-white items-center justify-center">
  <div className="tham-inner" />
</div>
</div> */
}
