import Image from "next/image";
import director from "@assets/director.png";
import s from "./about.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Card from "@components/Card";
import ProfileIcon from "@assets/profile.svg";
import GroupOfProfiles from "@assets/groupOfProfiles.svg";
import Like from "@assets/like.svg";
import Star from "@assets/star.svg";
import Rocket from "@assets/rocket.svg";
import { useLang } from "@/hooks/useLang";

const About = () => {
  const isMedia1024 = useMediaQuery(1024);
  const { lang, translations } = useLang();

  return (
    <section className={s.about} id="about">
      <div className="container">
        <h2 className={s.title}>
          {translations[lang].aboutCompany.sectionTitle}
        </h2>
        <div className={s.block}>
          <div className={s.leftBlock}>
            <span className={s.city}>
              {translations[lang].aboutCompany.city}
            </span>
            <div className={s.backdrop}>
              <div className={s.commonInfo}>
                <p className={`${s.register} ${s.accent}`}>
                  {translations[lang].aboutCompany.registrationDate}
                </p>
                <p className={`${s.text}`}>
                  {translations[lang].aboutCompany.text}
                </p>
                <p className={`${s.text}`}>
                  {translations[lang].aboutCompany.subText}
                </p>
              </div>
              <div>
                <p className={`${s.text} ${s.accent}`}>
                  {translations[lang].aboutCompany.listHeading}
                </p>
                <ul className={s.list}>
                  <li className={s.text}>
                    {translations[lang].aboutCompany.firstWay}
                  </li>
                  <li className={s.text}>
                    {translations[lang].aboutCompany.secondWay}
                  </li>
                  <li className={s.text}>
                    {translations[lang].aboutCompany.thirdWay}
                  </li>
                  <li className={s.text}>
                    {translations[lang].aboutCompany.fourthWay}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <Image
              className={s.cardImg}
              src={director}
              width={isMedia1024 ? 200 : 288}
              alt={translations[lang].aboutCompany.directorName}
            />

            <>
              <h3 className={s.name}>
                {translations[lang].aboutCompany.directorName}
              </h3>
              <span className={s.position}>
                {translations[lang].aboutCompany.position}
              </span>
            </>
          </div>
        </div>
      </div>
      <div className={s.infoCarousel}>
        <Card title={translations[lang].aboutCompany.missionTitle}>
          <ul className={s.infoCard}>
            <li className={s.item} style={{ marginBottom: "15px" }}>
              {translations[lang].aboutCompany.missionText1}
            </li>
            <li className={s.item}>
              {translations[lang].aboutCompany.missionText2}
            </li>
          </ul>
        </Card>
        <Card title={translations[lang].aboutCompany.goalTitle}>
          <ul>
            <li className={s.item} style={{ marginBottom: "35px" }}>
              {translations[lang].aboutCompany.goalText1}
            </li>
            <li className={s.item}>
              {translations[lang].aboutCompany.goalText2}
            </li>
          </ul>
        </Card>
        <Card title={translations[lang].aboutCompany.valuesTitle}>
          <div className={s.grid} style={{ paddingBottom: 20 }}>
            <div className={s.column}>
              <div className={s.benefit}>
                <ProfileIcon className={s.icon} />
                <p className={s.benefitText}>
                  {translations[lang].aboutCompany.clients}
                </p>
              </div>
              <div className={s.benefit}>
                <GroupOfProfiles className={s.icon} />
                <p className={s.benefitText}>
                  {translations[lang].aboutCompany.team}
                </p>
              </div>
            </div>
            <div className={s.column} style={{ justifyContent: "center" }}>
              <div className={s.benefit}>
                <Star className={s.icon} />
                <p className={s.benefitText}>
                  {translations[lang].aboutCompany.quality}
                </p>
              </div>
            </div>
            <div className={s.column}>
              <div className={s.benefit}>
                <Rocket className={s.icon} />
                <p className={s.benefitText}>
                  {translations[lang].aboutCompany.innovation}
                </p>
              </div>
              <div className={s.benefit}>
                <Like className={s.icon} />
                <p className={s.benefitText}>
                  {translations[lang].aboutCompany.professionalism}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
