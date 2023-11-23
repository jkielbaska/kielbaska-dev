// import emailjs from "@emailjs/browser";
import { ContactForm } from "../models/ContactForm";

export const Contact = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="z-0 blur-sm shadow-glow w-[85%] h-[80%] bg-yellow rounded-2xl outline outline-[1.5rem] outline-borderOrange" />
      <div className="absolute w-full h-full flex justify-center items-center rounded-xl z-[10]">
        <ContactForm
          type={"contact"}
          name={"name/company"}
          email={"email"}
          message={"What can I do for you?"}
          button={"Send!"}
          successToast={"Message sent succesfully"}
          errorToast={"something went wrong, try again :("}
        />
      </div>
    </div>
  );
};
// outline outline-[1rem] outline-borderOrange

{
  /* <div className="relative w-screen h-screen flex justify-center items-center bg-gradient-radial from-yellow via-borderOrange to-black"></div> */
}
