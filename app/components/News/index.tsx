import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
  const swiper = useSwiper();

  useEffect(() => {
    fetchAllNews()
      .then((res) => res.data)
      .then((data) => {
        setNews(data);
      });
  }, []);

  const slidesPerView = 3; // Количество слайдов на вид

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiper) {
      const lastIndex = news.length - 1;
      const activeIndex = swiper.activeIndex;
      const slidesToScroll = Math.min(slidesPerView, news.length - activeIndex);
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
                    layout="responsive"
                    width={320}
                    height={180}
                    alt={title}
                  />
                  <div className={s.cardBody}>
                    <h3 className={s.cardTitle}>{title}</h3>
                    <div className={s.bottomBlock}>
                      <span className={s.date}>{date}</span>
                      <a className={s.details} href={link}>
                        Подробнее
                      </a>
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
                autoplay={{ delay: 3000 }}
                loop
                spaceBetween={16}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerView}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
              >
                {news.map(({ date, id, title, link, photoName }) => (
                  <SwiperSlide key={id}>
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
                        <a className={s.details} href={link}>
                          Подробнее
                        </a>
                      </div>
                    </div>
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
