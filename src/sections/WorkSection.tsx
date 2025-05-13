import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "../styles/scss/sections/work_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import { Swiper } from "rb3198/components/Swiper";
import { WorkCard } from "rb3198/components/WorkCard";
import {
  compareCarsCardProps,
  financeCardProps,
  ospfVisualizerProps,
  retailCardProps,
} from "rb3198/constants/work";
import { WorkType } from "rb3198/types/enum/WorkType";
import { WorkTypePill } from "rb3198/components/WorkTypePill";

interface WorkSectionProps {}

export const WorkSection: React.FC<WorkSectionProps> = (props) => {
  const [activeWorkType, setActiveWorkType] = useState<WorkType>(
    WorkType.Professional
  );
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const changeType = useCallback((type: WorkType) => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    setTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setTransitioning(false);
      setActiveWorkType(type);
    }, 400);
  }, []);

  const TypePills = useMemo(() => {
    return (
      <div id={styles.pill_container}>
        <WorkTypePill
          type={WorkType.Professional}
          onClick={changeType}
          active={activeWorkType === WorkType.Professional}
        />
        <WorkTypePill
          type={WorkType.Personal}
          onClick={changeType}
          active={activeWorkType === WorkType.Personal}
        />
      </div>
    );
  }, [activeWorkType, changeType]);

  const professionalWork = [
    { ...retailCardProps },
    { ...compareCarsCardProps },
    { ...financeCardProps },
  ];
  return (
    <Section id={Sections.Work} title="Work">
      {TypePills}
      <div id={styles.container} data-transitioning={transitioning}>
        <Swiper spacing="20px">
          {activeWorkType === WorkType.Professional ? (
            professionalWork.map((props) => (
              <WorkCard {...props} key={props.title} />
            ))
          ) : (
            <WorkCard {...ospfVisualizerProps} />
          )}
        </Swiper>
      </div>
      {/* <WorkCard
          title="Fitnet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et bibendum mauris, sed pretium eros. Duis eget lacus auctor lacus commodo dignissim sed id neque. Nulla at mi sagittis, tincidunt tellus a, pretium purus. Etiam purus ex, hendrerit ac tortor eget, ornare accumsan odio. Nam quis eros dignissim, tempor risus vel, imperdiet nulla. Integer egestas, nisl ut ultrices bibendum, lacus quam venenatis massa, id tristique nibh arcu ac ipsum. Maecenas sed venenatis augue, nec fermentum eros.
  "
          subtitle="Fitness Network"
          timeline="Work in Progress"
          gitLinkConfig={{
            label: "View Code",
            link: "https://github.com/fit-net/fitnet",
          }}
          techStack={{
            frontend: ["React Native", "TypeScript"],
            backend: ["Fastify.js", "GraphQL", "AWS"],
            dbs: ["MongoDB"],
            tools: ["Git", "VS Code"],
          }}
          tabularProjectData={compareCarsCardProps.tabularProjectData}
        /> */}
    </Section>
  );
};
