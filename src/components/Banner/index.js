import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import SliderButton from "~/components/SliderButton";

export default function Banner({ slides }) {
  return (
    <section className="banner">
      <div className="banner-wrapper">
        <Swiper
          lazy={true}
          direction="vertical"
          loop={true}
          allowTouchMove={false}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, "-10%", -1],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          modules={[EffectCreative, Autoplay]}
          watchSlidesProgress={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive, isPrev }) => (
                <div className="banner__item">
                  <Image src={slide.image} alt={slide.title} fill priority />
                  <div
                    className={`banner__mask ${
                      isActive
                        ? "mask--roll-in"
                        : isPrev
                        ? "mask--roll-out"
                        : ""
                    }`}
                  ></div>
                  <div className="banner-caption">
                    <div
                      className={`banner-caption__content ${
                        isActive
                          ? "caption-content--roll-in"
                          : isPrev
                          ? "caption-content--roll-out"
                          : ""
                      }`}
                    >
                      <h2 className="banner-caption__title">{slide.title}</h2>
                      <a href={slide.url} className="banner-caption__link">
                        view project
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <SliderButton />
          <SliderButton isNextButton />
        </Swiper>
      </div>
    </section>
  );
}
