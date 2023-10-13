import React from "react";
import { REPO_LINK } from "rb3198/constants";

export const InProgressDisclaimer: React.FC<{}> = () => {
  return (
    <p
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "18px",
        fontFamily: "Raleway",
      }}
    >
      Website Currently under development. Repository for this site can be found{" "}
      <a href={REPO_LINK} target="_blank">
        here
      </a>
    </p>
  );
};
