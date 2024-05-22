import { FC } from "react";
import blackHoleVideo from "../../assets/blackhole.webm";
import { Meteors } from "../ui/meteors";
import Reveal from "../animated/Reveal";

const Hero: FC = () => {
  return (
    <>
      <div className="relative flex flex-col h-full w-full" id="about">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-1] object-cover "
        >
          <source src={blackHoleVideo} type="video/webm" />
        </video>
        <div className="w-[80%]"></div>
        <div className="w-[80%] mx-auto mt-[100px] z-20">
          <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <Reveal width="fit-content" className="mx-auto">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Hey, I am Janith.
                </h1>
              </Reveal>
              <Meteors number={20} />
              <Reveal width="fit-content" className="mx-auto">
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                   I'm an engineering undergraduate at the University of Ruhuna, Sri Lanka, with a strong passion for web, app, and software development. Also I am an active open-source contributor focused on creating simple, innovative, and engaging digital experiences using the latest technologies.
                </p>
              </Reveal>
              <div className="mt-[20px] mx-auto  max-w-[200px] flex flex-row gap-2 justify-center items-center text-sm md:text:lg">
                <a
                  href="https://www.linkedin.com/in/janith-chamikara/"
                  className="inline-flex h-8  items-center justify-center rounded-md border border-slate-800 px-3 md:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/in/janith-chamikara/"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-slate-800 px-3 md:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  CV
                </a>
                <a
                  href="https://github.com/Janith-Chamikara"
                  className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 px-3 md:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
