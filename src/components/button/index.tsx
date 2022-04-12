/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./button.module.scss";
import downArrow from "../../assets/icons/downArrow.png";

interface IProps {
  onClick: () => void;
  buttonName: string;
}

export const Button: React.FC<IProps> = ({ onClick, buttonName }) => {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <h6 className={styles.buttonText}>{buttonName}</h6>
      <img src={downArrow} alt="downArrow" />
    </div>
  );
};
