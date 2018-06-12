import axios from "axios";

// TODO: Get the server address from substitution / config!!
// baseURL: "weatherUrl"
export const HTTP = axios.create({
  headers: {}
});

axios.defaults.headers.common["Accept"] = "application/json";
