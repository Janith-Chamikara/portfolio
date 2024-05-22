import { FC } from "react";
import Reveal from "../animated/Reveal";
import { CardBody, CardContainer, CardItem } from "../ui/3D-card";
import { projects } from "../../assets/assets";
import { Meteors } from "../ui/meteors";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Projects: FC = () => {
  return (
    <>
      <div id="projects" className="mt-[200px] mx-auto w-[95%] md:w-[80%] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <Reveal width="fit-content" className="mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Discover My Projects
          </h1>
        </Reveal>
        <Meteors number={40} />
        <div className="flex flex-col gap-2 md:flex-row">
          {projects.map((project,index) => (
            <Reveal
              key={project.name}
              width="fit-content"
              className="w-fit p-[20px] my-0"
            >
              <CardContainer className="mt-0 mx-9 max-w-[250px] md:min-w-[400px]">
                <CardBody className="bg-gray-50 relative group/card bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-lg md:text:xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={project.imgLink}
                      className="w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem  className=" mt-2">
                    <InfiniteMovingCards
                      className="max-w-[300px]"
                      direction={index % 2 === 0 ? "right" : "left"}
                      items={project.techstack}
                      style={"w-[20px] h-[20px]"}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    {project.live && (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-white text-xs font-bold"
                      >
                        <a href={project.live}>Live →</a>
                      </CardItem>
                    )}
                    {project.yt && (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-white text-xs font-bold"
                      >
                        <a href={project.yt}>Youtube →</a>
                      </CardItem>
                    )}
                    {project.linkedin && (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-white text-xs font-bold"
                      >
                        <a href={project.linkedin}>LinkedIn →</a>
                      </CardItem>
                    )}
                    {project.github && (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-white text-xs font-bold"
                      >
                        <a href={project.github}>Github →</a>
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
