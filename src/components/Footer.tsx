import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <div className="mt-[100px] w-full h-[65px]  z-50 px-10">
        <div className="flex flex-row justify-center items-center">
          <span className="text-sm text-white">
            © 2024{" "}
            <a
              href="https://www.linkedin.com/in/janith-chamikara/"
              className="hover:underline "
            >
              Janith Chamikara™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
