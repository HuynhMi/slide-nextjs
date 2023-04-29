import { useSwiper } from "swiper/react";
import Image from "next/image";
import { icons } from "~/utilities/constants";

export default function SliderButton({ isNextButton }) {
  const swiper = useSwiper();
  return (
    <button
      className={`slider-button ${
        isNextButton ? 'slider-button--next' : 'slider-button--previous'
      }`}
      type="button"
      onClick={
        isNextButton ? () => swiper.slideNext() : () => swiper.slidePrev()
      }
    >
      <Image
        src={isNextButton ? icons.rightArrow : icons.leftArrow}
        alt="arrow_icon"
        height={25}
        width={25}
      />
    </button>
  );
}
