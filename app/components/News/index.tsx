import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import the Swiper type
import "swiper/css";
import Image from "next/image";
import s from "./news.module.scss";
import { fetchAllNews } from "@/app/services/news";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ArrowLeft from "@assets/arrowLeft.svg";
import ArrowRight from "@assets/arrowRight.svg";
import { useLang } from "@/hooks/useLang";
import { Post } from "@/app/services/news";

const News = () => {
  const [news, setNews] = useState<Post[]>([]);
  const isMedia1024 = useMediaQuery(1024);
  const [visibleNews, setVisibleNews] = useState(3);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const { lang, translations } = useLang();

  const handleLoadMore = () => {
    setVisibleNews((prevCount) => Math.min(prevCount + 3, news.length));
  };

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
    <section id="news" className={s.newsBlock}>
      <div className="container">
        <h2 className={s.title}>{translations[lang].news.title}</h2>
        {isMedia1024 ? (
          <>
            <ul className={s.list}>
              {news
                .slice(0, visibleNews)
                .map(({ date, id, title, link, photoName }) => (
                  <li key={id} className={s.item}>
                    <a href={link} target="_blank">
                      <Image
                        className={s.img}
                        src={`/uploads/${photoName}`}
                        width={320}
                        height={180}
                        alt={title[lang]}
                      />
                      <div className={s.cardBody}>
                        <h3 className={s.cardTitle}>{title[lang]}</h3>
                        <div className={s.bottomBlock}>
                          <span className={s.date}>{date}</span>
                          <button className={s.details}>
                            {translations[lang].news.details}
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
            {visibleNews !== news.length && (
              <button
                className={`${s.details} ${s.loadMore}`}
                type="button"
                onClick={handleLoadMore}
              >
                {translations[lang].news.loadMore}
              </button>
            )}
          </>
        ) : (
          <>
            <div className={s.swiperWrapper}>
              <div className={s.arrow} onClick={handleSlidePrev}>
                <ArrowLeft />
              </div>
              <Swiper
                autoHeight
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
                        alt={title[lang]}
                      />
                      <div className={s.cardBody}>
                        <h3 className={s.cardTitle}>{title[lang]}</h3>
                        <div className={s.bottomBlock}>
                          <span className={s.date}>{date}</span>
                          <button className={s.details}>
                            {translations[lang].news.details}
                          </button>
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
