"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import FileUpload from "@components/FileUpload";
import Header from "@components/Header";
import s from "./admin.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { addNewPost } from "@services/news";

type Inputs = {
  link: string;
  photoName: string;
  date: string;
  title: {
    ru: string;
    en: string;
    kz: string;
  };
};

const Admin = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!selectedFile) {
      setMessage("No file selected");
      return;
    }

    const newFileName = `${uuidv4()}${selectedFile.name.slice(
      selectedFile.name.lastIndexOf(".")
    )}`;
    const formData = new FormData();
    formData.append("file", selectedFile, newFileName);

    try {
      const response = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        data.photoName = newFileName;
        data.date = formatDate(new Date());
        await addNewPost(data);

        reset();
        setMessage("File uploaded and form submitted successfully");
      } else {
        setMessage("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("File upload failed");
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <main>
          <section className={s.section}>
            <div className={`container ${s.formWrapper}`}>
              <h3 className={s.title}>Новости</h3>
              <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.legend}>
                  <label htmlFor="titleRu">Оглавление (Ru)</label>
                  <input
                    className={s.field}
                    id="titleRu"
                    placeholder="Веселая ферма 2"
                    {...register("title.ru", { required: true })}
                  />
                </div>
                <div className={s.legend}>
                  <label htmlFor="titleEn">Оглавление (En)</label>
                  <input
                    className={s.field}
                    id="titleEn"
                    placeholder="Farm Frenzy 2"
                    {...register("title.en", { required: true })}
                  />
                </div>
                <div className={s.legend}>
                  <label htmlFor="titleKz">Оглавление (Kz)</label>
                  <input
                    className={s.field}
                    id="titleKz"
                    placeholder="Фермерлік ашуланшақ 2"
                    {...register("title.kz", { required: true })}
                  />
                </div>
                <div className={s.legend}>
                  <label htmlFor="link">Ссылка</label>
                  <input
                    className={s.field}
                    id="link"
                    placeholder="https://google.com"
                    {...register("link", { required: true })}
                  />
                </div>
                <div>
                  <span className={s.photoTip}>Фото для заставки</span>
                  <FileUpload onFileSelect={handleFileSelect} />
                </div>
                {errors.photoName && <p>{errors.photoName.message}</p>}
                <button className={s.submitBtn} type="submit">
                  Отправить
                </button>
                <p>{message}</p>
              </form>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className={s.section}>
          <div className={`container ${s.formWrapper}`}>
            <div className={s.adminWrapper}>
              <h3 style={{ marginBottom: "20px" }}>
                Введите пароль для админ-панели
              </h3>
              <input
                className={s.adminField}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
              />
              <button
                style={{ fontSize: 14 }}
                className={s.submitBtn}
                onClick={handleLogin}
              >
                Войти
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
