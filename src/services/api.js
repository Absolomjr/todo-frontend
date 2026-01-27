import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", //Spring Boot base URL
  headers: {
    "Content-Type": "application/json",
  },
});

//Automaticatically attach JWT token  to every request
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
