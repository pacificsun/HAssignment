/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./card.module.scss";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  id: number;
}

export const CardComponent: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  tagline,
  description,
  id,
}) => {
  const [showPopup, setShowPopup] = useState<any>({});

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.imageWrapper}
        onMouseOver={() => setShowPopup({ [id]: true })}
        onMouseLeave={() => setShowPopup({ [id]: false })}
      >
        <img src={imageUrl} alt="image" />
        {showPopup && showPopup?.[id] && (
          <div className={styles.productHoverDescription}>
            <h6>{tagline}</h6>
            <span>&#9660;</span>
          </div>
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <h2>{name}</h2>
        <h5>{tagline}</h5>
        <span>{description}</span>
      </div>
    </div>
  );
};
