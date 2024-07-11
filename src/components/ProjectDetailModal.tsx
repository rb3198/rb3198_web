import React, { useCallback, useState } from "react";
import { Modal, ModalProps } from "./Modal";
import { TabularProjectData } from "rb3198/types/TabularProjectData";
import styles from "rb3198/styles/scss/project_detail_modal.scss";
import { ProjectModalContent } from "./ProjectModalContent";

export interface ProjectDetailModalProps extends ModalProps {
  tabularProjectData: TabularProjectData[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = (
  props
) => {
  const { tabularProjectData, title } = props;
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const renderTabs = useCallback(() => {
    return (
      <div className={styles.tabHeadsContainer}>
        {tabularProjectData.map(({ title }, idx) => {
          return (
            <div
              className={styles.tabHead}
              key={`project-tab-${title}`}
              data-active={activeTabIdx === idx}
              onClick={setActiveTabIdx.bind(this, idx)}
            >
              {title}
            </div>
          );
        })}
      </div>
    );
  }, [activeTabIdx, tabularProjectData]);

  if (!Array.isArray(tabularProjectData) || tabularProjectData.length === 0) {
    return null;
  }
  return (
    <Modal {...props}>
      {renderTabs()}
      <ProjectModalContent
        title={title || ""}
        content={tabularProjectData[activeTabIdx].content}
        images={tabularProjectData[activeTabIdx].imgConfig}
      />
    </Modal>
  );
};
