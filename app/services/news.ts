import axios from "axios";

axios.defaults.baseURL = `https://${process.env.NEXT_PUBLIC_MOCK_API_KEY}.mockapi.io`;

type Post = {
  photoName: string;
  link: string;
  title: {
    ru: string;
    en: string;
    kz: string;
  };
};

export const fetchAllNews = () => {
  return axios.get("/news");
};

export const addNewPost = (data: Post) => {
  return axios.post("/news", data);
};
