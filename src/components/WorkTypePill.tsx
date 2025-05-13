import React from "react";
import { WorkType } from "rb3198/types/enum/WorkType";
import { getWorkTypeIcon } from "rb3198/utils";
import styles from "rb3198/styles/scss/work_pill.scss";

type WorkTypePillProps = {
  type: WorkType;
  onClick: (type: WorkType) => unknown;
  active?: boolean;
};

export const WorkTypePill: React.FC<WorkTypePillProps> = ({
  type,
  active,
  onClick: onClickCallback,
}) => {
  const Icon = getWorkTypeIcon(type);
  const onClick = () => onClickCallback(type);
  return (
    <div onClick={onClick} className={styles.container} data-active={active}>
      <Icon className={styles.icon} />
      {
        Object.keys(WorkType)[
          Object.values(WorkType).findIndex((x) => x === type)
        ]
      }
    </div>
  );
};
