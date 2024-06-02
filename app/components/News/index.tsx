import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import the Swiper type
import "swiper/css";
import s from "./news.module.scss";
import { fetchAllNews } from "@/app/services/news";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ArrowLeft from "@assets/arrowLeft.svg";
import ArrowRight from "@assets/arrowRight.svg";

const News = () => {
  const [news, setNews] = useState([]);
  const isMedia1024 = useMediaQuery(1024);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null); // Define the type for swiper

  useEffect(() => {
    fetchAllNews()
      .then((res) => res.data)
      .then((data) => {
        setNews(data);
      });
  }, []);

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiper) {
      const lastIndex = news.length - 1;
      const activeIndex = swiper.activeIndex;
      const slidesToScroll = Math.min(3, news.length - activeIndex);
      const nextIndex = Math.min(activeIndex + slidesToScroll, lastIndex);

      swiper.slideTo(nextIndex);
    }
  };

  return (
    <section className={s.newsBlock}>
      <div className="container">
        <h2 className={s.title}>Новости</h2>
        {isMedia1024 ? (
          <ul className={s.list}>
            {news.map(({ date, id, title, link, photoName }) => (
              <li key={id} className={s.item}>
                <a href={link}>
                  <Image
                    className={s.img}
                    src={`/uploads/${photoName}`}
                    width={320}
                    height={180}
                    alt={title}
                  />
                  <div className={s.cardBody}>
                    <h3 className={s.cardTitle}>{title}</h3>
                    <div className={s.bottomBlock}>
                      <span className={s.date}>{date}</span>
                      <button className={s.details}>Подробнее</button>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className={s.swiperWrapper}>
              <div className={s.arrow} onClick={handleSlidePrev}>
                <ArrowLeft />
              </div>
              <Swiper
                autoHeight
                loop
                spaceBetween={16}
                slidesPerView={3}
                slidesPerGroup={3}
                onSlideChange={() => {}}
                onSwiper={setSwiper}
              >
                {news.map(({ date, id, title, link, photoName }) => (
                  <SwiperSlide key={id}>
                    <a href={link} className={s.cardWrapper}>
                      <Image
                        className={s.img}
                        src={`/uploads/${photoName}`}
                        width={370}
                        height={186}
                        alt={title}
                      />
                      <div className={s.cardBody}>
                        <h3 className={s.cardTitle}>{title}</h3>
                        <div className={s.bottomBlock}>
                          <span className={s.date}>{date}</span>
                          <button className={s.details}>Подробнее</button>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={s.arrow} onClick={handleSlideNext}>
                <ArrowRight />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default News;
