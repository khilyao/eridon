import Image from "next/image";
import s from "./agricultural.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import formImg from "@assets/formImg.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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

const Agricaltural = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const isMedia1024 = useMediaQuery(1024);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section id="agricultural" className={s.block}>
      <div className={`${s.containerWrapper} container`}>
        <h2 className={s.title}>Агроконсультация</h2>
        <div className={s.backdoor}>
          {isMedia1024 && (
            <h3 className={s.subTitle}>Заявка на агроконсультацию</h3>
          )}
          <div className={s.formWrapper}>
            <Image src={formImg} className={s.formImg} alt="loop"></Image>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              {!isMedia1024 && (
                <h3 className={s.subTitle}>Заявка на агроконсультацию</h3>
              )}
              <input
                className={s.field}
                placeholder="ФИО"
                {...register("name", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Компания"
                {...register("company", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Должность"
                {...register("position", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Телефон"
                {...register("phone", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Место нахождения"
                {...register("place", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Площадь, га"
                {...register("square", { required: true })}
              />
              <input
                className={s.field}
                placeholder="Культура"
                {...register("culture", { required: true })}
              />
              {/* {errors ===  && <span>This field is required</span>} */}
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

export default Agricaltural;
