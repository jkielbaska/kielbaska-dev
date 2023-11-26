import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="w-full flex items-center flex-col p-7 gap-7 md:flex-row">
      <p className="text-zinc-300 font-light flex-1 pl-2 pr-2 text-3xl text-center md:text-start">
        Want to hire me? <br className="sm:block hidden" />
        Or maybe you have questions?
      </p>
      <Link
        to="/contact"
        className="text-white font-light bg-gradient-to-r border border-1 border-zinc-400 from-zinc-800 to-borderOrange  rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center"
      >
        Contact me!
      </Link>
    </section>
  );
};
