import { useMessage } from "../hooks/useMessage";
import { FormToast } from "../components/FormToast";
import React from "react";

export const ContactForm = ({
  type,
  name,
  email,
  message,
  button,
  successToast,
  errorToast,
}: {
  type: "contact";
  name: string;
  email: string;
  message: string;
  button: string;
  successToast: string;
  errorToast: string;
}) => {
  const {
    form: {
      handleSendMessage,
      register,
      formState: { errors },
    },
    isLoading,
    success,
    ref,
  } = useMessage(successToast, errorToast, type);

  return (
    <>
      <form
        onSubmit={handleSendMessage}
        ref={ref}
        className="flex flex-col gap-[25px] sm:w-[500px] w-[90%]"
      >
        <input
          type="text"
          id="name"
          placeholder={name}
          className="p-[20px]  bg-base-100  border border-primary"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-800">{errors.name?.message}</span>
        )}
        <input
          type="email"
          id="email"
          placeholder={email}
          className="p-[20px]  bg-base-100  border border-primary"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-800">{errors.email?.message}</span>
        )}
        <textarea
          placeholder={message}
          id="message"
          className="p-[20px]  bg-base-100  border border-primary"
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <span className="text-red-800">{errors.message?.message}</span>
        )}

        <button className="btn btn-outline btn-primary rounded-none h-[50px]">
          {isLoading ? "..." : button}
        </button>
      </form>
      <FormToast />
    </>
  );
};
