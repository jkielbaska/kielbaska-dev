import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="relative w-full flex items-center flex-col p-7 sm:gap-7 gap-4 md:flex-row">
      <p className="text-zinc-300 font-light flex-1 pl-2 pr-2 text-xl sm:text-3xl text-center md:text-start">
        Want to hire me? <br className="sm:block hidden" />
        Or maybe you have questions?
      </p>
      <Link
        to="/contact"
        className="animate-border rounded-md bg-gradient-to-r from-zinc-800 via-borderOrange to-zinc-400 bg-[length:400%_400%] p-1 "
      >
        <span className="block rounded-md bg-black sm:px-5 sm:py-3 px-3 py-2  text-white md:hover:text-xl md:hover:transition-all">
          Contact me!
        </span>
      </Link>
      <p className="absolute right-1 bottom-1 text-xs text-zinc-500 font-light">
        by jkielbaska
      </p>
    </section>
  );
};
