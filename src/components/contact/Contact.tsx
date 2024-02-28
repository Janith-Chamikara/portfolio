import { FC, useRef, useState } from "react";
import Reveal from "../animated/Reveal";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name should contain at least one character" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Please enter something cool :<" }),
});

const Contact: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const sendEmail = async () => {
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_yv0ybdu",
        "template_4r5d5dl",
        formRef?.current,
        {
          publicKey: "HFyOUor3wvTUeJByW",
        }
      );
      setIsLoading(false);
      toast.success("Email sended successfully.", {
        className: "bg-transparent backdrop-blur-xl",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      reset();
    } catch (err) {
      setIsLoading(false);
      toast.error("Error occured :(", {
        className: "bg-transparent backdrop-blur-xl",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };
  return (
    <>
      <div
        id="contact"
        className="mx-auto mt-[200px] w-[80%] flex flex-col gap-10 justify-between  md:flex-row"
      >
        <div className="flex flex-1 flex-col gap-5 ">
          <Reveal width="fit-content">
            <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Let's work together
            </h1>
          </Reveal>
          <Reveal width="fit-content">
            <div>
              <span className=" font-bold text-base text-neutral-300 ">
                Email :
              </span>
              <span className="text-base text-neutral-300 ">
                &nbsp; janithchamikara13@gmail.com
              </span>
            </div>
          </Reveal>

          <Reveal width="fit-content">
            <div>
              <span className="font-bold text-base text-neutral-300  ">
                Phone :
              </span>
              <span className="text-base text-neutral-300">
                &nbsp; +94 760 299 855
              </span>
            </div>
          </Reveal>
        </div>
        <div
          ref={ref}
          className="relative flex flex-1 flex-col gap-5 justify-between "
        >
          <motion.div
            variants={{
              initial: { opacity: 1 },
              animate: { opacity: 0, transition: { duration: 3 } },
            }}
            initial="initial"
            animate={isInView && "animate"}
            className="absolute mx-auto -z-1 top-0 left-0 stroke-[#6953a1]"
          >
            <svg
              className=" w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                fill="none"
                d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit(sendEmail)}
            ref={formRef}
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 1, delay: 3 },
              },
            }}
            initial="initial"
            animate={isInView && "animate"}
            action=""
            className="z-[20] flex flex-col gap-5 justify-between"
          >
            <input
              {...register("name")}
              className="text-white p-[10px] w-full bg-transparent border rounded-xl placeholder:p-3 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
              placeholder="Your name"
              type="text"
            />
            {errors.name && (
              //@ts-expect-error:MUST
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <input
              {...register("email")}
              className="text-white p-[10px] w-full bg-transparent border rounded-xl placeholder:p-3 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
              placeholder="Your email"
              type="email"
            />

            {errors?.email && (
              //@ts-expect-error:MUST
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <textarea
              {...register("message")}
              rows={8}
              className="text-white p-[10px] w-full bg-transparent border rounded-xl  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
              placeholder="Message"
            />
            {errors?.message && (
              //@ts-expect-error:MUST
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full p-[10px] rounded-xl bg-[#6953a1] text-white"
            >
              {isLoading ? "Please wait" : "Send"}
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contact;
