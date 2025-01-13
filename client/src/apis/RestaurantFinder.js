import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3005/api/v1/restaurants",  //h
  baseURL: "http://localhost:4000/api/v1/restaurants", //b
});
