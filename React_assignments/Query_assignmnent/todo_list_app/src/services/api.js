import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const GET = (url, params) => {
  return instance.get(url, { params }).then((res) => res.data);
};
export const PATCH = (url, body) => {
  return instance.patch(url, { body }).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
export const POST = (url, body) => {
  return instance.post(url, body).then((res) => res.data);
};
export const DELETE = (url) => {
  debugger;
  return instance.delete(url).then((res) => res.data);
};
