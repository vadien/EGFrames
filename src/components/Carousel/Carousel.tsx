// Angele, Dmitry, Kenny

import { useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import styles from "./Carousel.module.scss";

type carouselProps = {
  imageArr: string[];
};

const Carousel = ({ imageArr }: carouselProps) => {
  const [imageState, setImageState] = useState(0);

  const showNextImage = () => {
    setImageState((currState) => {
      return currState === imageArr.length - 1 ? 0 : currState + 1;
    });
  };

  const showPrevImage = () => {
    setImageState((currState) => {
      return currState === 0 ? imageArr.length - 1 : currState - 1;
    });
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.carouselContent}>
        <button
          onClick={showPrevImage}
          className={styles.arrowBtnLeft}
          style={{ left: 0 }}
        >
          <ArrowCircleLeft size={32} />
        </button>
        <div className={styles.carouselImages}>
          {imageArr.map((image) => (
            <img
              key={image}
              src={image}
              className={styles.carouselImages}
              style={{ translate: `${-100 * imageState}%` }}
            />
          ))}
        </div>
        <button
          onClick={showNextImage}
          className={styles.arrowBtnRight}
          style={{ right: 0 }}
        >
          <ArrowCircleRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
