import Image from "next/image";
import s from "./agricultural.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import formImg from "@assets/formImg.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";

type Inputs = {
  name: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  place: string;
  square: string;
  culture: string;
};

const Agricultural = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const isMedia1024 = useMediaQuery(1024);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      setIsLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      reset();

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setIsLoading(false);
    }
  };

  return (
    <section id="agricultural" className={s.block}>
      <div className={`${s.containerWrapper} container`}>
        <h2 className={s.title}>Агроконсультация</h2>
        <div className={s.backdoor}>
          {isMedia1024 && (
            <h3 className={s.subTitle}>Заявка на агроконсультацию</h3>
          )}
          <div className={s.formWrapper}>
            <Image src={formImg} className={s.formImg} alt="loop" />
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              {!isMedia1024 && (
                <h3 className={s.subTitle}>Заявка на агроконсультацию</h3>
              )}

              <div
                style={{ opacity: isLoading ? "0.75" : "1" }}
                className={`${s.fieldWrapper} ${
                  isLoading && !isMedia1024 ? s.loading : ""
                }`}
              >
                <input
                  style={errors.name && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="ФИО"
                  {...register("name", { required: true })}
                />
                <input
                  style={errors.company && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="Компания"
                  {...register("company", { required: true })}
                />
                <input
                  style={errors.position && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="Должность"
                  {...register("position", { required: true })}
                />
                <input
                  style={errors.phone && { border: "2px solid #fc7c7c" }}
                  type="tel"
                  className={s.field}
                  placeholder="Телефон"
                  {...register("phone", { required: true })}
                />
                <input
                  style={errors.email && { border: "2px solid #fc7c7c" }}
                  type="email"
                  className={s.field}
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <input
                  style={errors.place && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="Место нахождения"
                  {...register("place", { required: true })}
                />
                <input
                  style={errors.square && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="Площадь, га"
                  {...register("square", { required: true })}
                />
                <input
                  style={errors.culture && { border: "2px solid #fc7c7c" }}
                  type="text"
                  className={s.field}
                  placeholder="Культура"
                  {...register("culture", { required: true })}
                />
              </div>
              <button className={s.submitBtn} type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agricultural;
