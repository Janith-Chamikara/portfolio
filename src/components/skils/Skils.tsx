import { FC } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Meteors } from "../ui/meteors";
import Reveal from "../animated/Reveal";
import { icons } from "../../assets/assets";

const Skils: FC = () => {
  return (
    <div className="mx-auto w-[80%] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] p-[10px] items-center justify-center relative overflow-hidden">
      <Reveal width="fit-content" className="mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Explore My Skills
        </h1>
      </Reveal>
      <Meteors number={10} />
      <InfiniteMovingCards
        items={icons}
        className="bg-transparent"
        direction="right"
        speed="fast"
      />
    </div>
  );
};

export default Skils;
