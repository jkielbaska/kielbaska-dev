import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";

const MessageSchema = z.object({
  name: z
    .string()
    .min(1, { message: "required" })
    .max(40, { message: "Your name is too long. Type 40 letters max" }),
  email: z.coerce.string().email().min(5, { message: "email required" }),
  message: z
    .string()
    .min(1, { message: "required" })
    .max(500, { message: "Your message is too long. Type 500 letters max" }),
});

type MessageSchemaType = z.infer<typeof MessageSchema>;

export const useMessage = (successToast: string, errorToast: string) => {
  const { handleSubmit, reset, ...form } = useForm<MessageSchemaType>({
    resolver: zodResolver(MessageSchema),
  });
  const ref = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleMessage: SubmitHandler<MessageSchemaType> = () => {
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        ref.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          toast.success(successToast);
          setIsLoading(false);
        },
        (error) => {
          setSuccess(false);
          toast.error(errorToast);
          setIsLoading(false);
        }
      );
  };

  return {
    success,
    isLoading,
    ref,
    form: { handleSendMessage: handleSubmit(handleMessage), ...form },
  };
};
