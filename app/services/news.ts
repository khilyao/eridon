import axios from "axios";

export type Post = {
  photoName: string;
  link: string;
  title: {
    ru: string;
    en: string;
    kz: string;
  };
  date: string;
  id: string;
};

export const fetchAllNews = () => {
  return axios.get("/api/news");
};

export const addNewPost = (data: Post) => {
  return axios.post("/api/news", data);
};
