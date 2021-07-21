import { call } from "redux-saga/effects";
import { vendorfetch } from "./fetch";

export function* fetchSaga(url, options, process) {
  const thisProcess = process || Date.now();
  try {
    const resp = yield call(vendorfetch, url, options);
    return resp;
  } catch (err) {
    const { response, error } = err;
    if (response.status === 412) {
      console.log("412");
    }
    throw err;
  }
}
