import React from "react";
import styles from "../styles/scss/sections/work_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import { Swiper } from "rb3198/components/Swiper";
import { WorkCard } from "rb3198/components/WorkCard";
import { compareCarsCardProps, retailCardProps } from "rb3198/constants/work";

interface WorkSectionProps {}

export const WorkSection: React.FC<WorkSectionProps> = (props) => {
  // TODO: Add Work after finalizing the content
  return null;
  // return (
  //   <Section id={Sections.Work} title="Work">
  //     <Swiper spacing="20px">
  //       <WorkCard {...retailCardProps} />
  //       <WorkCard {...compareCarsCardProps} />
  //       <WorkCard
  //         title="Fitnet"
  //         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et bibendum mauris, sed pretium eros. Duis eget lacus auctor lacus commodo dignissim sed id neque. Nulla at mi sagittis, tincidunt tellus a, pretium purus. Etiam purus ex, hendrerit ac tortor eget, ornare accumsan odio. Nam quis eros dignissim, tempor risus vel, imperdiet nulla. Integer egestas, nisl ut ultrices bibendum, lacus quam venenatis massa, id tristique nibh arcu ac ipsum. Maecenas sed venenatis augue, nec fermentum eros.
  // "
  //         subtitle="Fitness Network"
  //         timeline="Work in Progress"
  //         gitLinkConfig={{
  //           label: "View Code",
  //           link: "https://github.com/fit-net/fitnet",
  //         }}
  //         techStack={{
  //           frontend: ["React Native", "TypeScript"],
  //           backend: ["Fastify.js", "GraphQL", "AWS"],
  //           dbs: ["MongoDB"],
  //           tools: ["Git", "VS Code"],
  //         }}
  //         tabularProjectData={[]}
  //       />
  //     </Swiper>
  //   </Section>
  // );
};
