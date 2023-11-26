import { useMessage } from "../hooks/useMessage";
import { FormToast } from "./FormToast";

export const ContactForm = ({
  name,
  email,
  message,
  button,
  successToast,
  errorToast,
  handleFocus,
  handleBlur,
}: {
  name: string;
  email: string;
  message: string;
  button: string;
  successToast: string;
  errorToast: string;
  handleFocus: () => void;
  handleBlur: () => void;
}) => {
  const {
    form: {
      handleSendMessage,
      register,
      formState: { errors },
    },
    isLoading,
    ref,
  } = useMessage(successToast, errorToast);

  return (
    <>
      <form
        onSubmit={handleSendMessage}
        ref={ref}
        className="gap-[15px] flex flex-col sm:w-[400px] w-[50%]"
      >
        <input
          type="text"
          id="name"
          placeholder={errors?.name ? errors.name?.message : name}
          className={`p-[20px] outline-none bg-transparent shadow-xl border-2 border-x-2 border-zinc-900 text-gray-400 rounded-t-xl ${
            errors.name && "border-red-900"
          }`}
          onFocus={handleFocus}
          {...register("name")}
          onBlur={handleBlur}
        />

        <input
          type="email"
          id="email"
          placeholder={errors?.email ? errors.email?.message : email}
          className={`p-[20px] outline-none bg-transparent border-2  border-zinc-900 text-gray-400 ${
            errors?.email && "border-red-900"
          }`}
          onFocus={handleFocus}
          {...register("email")}
          onBlur={handleBlur}
        />

        <textarea
          placeholder={errors?.message ? errors.message?.message : message}
          id="message"
          className={`p-[20px] outline-none bg-transparent border-2 border-zinc-900 text-gray-400 ${
            errors?.message && "border-red-900"
          }`}
          rows={5}
          onFocus={handleFocus}
          {...register("message")}
          onBlur={handleBlur}
        />

        <button
          className={`outline-none bg-transparent border-2 border-x-2 border-zinc-900 rounded-b-xl h-[50px] text-gray-400 md:hover:text-borderOrange
          ${errors?.email && "border-red-900"}`}
        >
          {isLoading ? "..." : button}
        </button>
      </form>
      <FormToast />
    </>
  );
};
