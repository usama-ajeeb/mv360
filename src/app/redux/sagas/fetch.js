import { axios } from "../../axios";
export const vendorfetch = async (url, options = {}, tries = 0) => {
  let data;
  if (options.body) {
    data = JSON.stringify(options.body);
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  try {
    var config = {
      method: options.method ? options.method : "get",
      url,
      data,
    };

    let response = axios(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  } catch (err) {
    console.log(err);
    if (err.status === 401) {
      console.log("Error", 401);
    }
    if (err.status === 412) {
      console.log("Error", 412);
    }
    throw err;
  }
};
