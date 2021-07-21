import * as types from "./types";

export const groupsUpload = () => ({
  type: types.GROUPS_UPLOAD,
});

export const getSubCategories = (data) => ({
  type: types.GET_GROUPS,
  payload: data,
});

export const getCompaniesDetail = () => ({
  type: types.COMPANIES_DETAILS,
});

export const getSubGroupCategories = (data) => ({
  type: types.GROUPS_SUBCATEGORIES,
  payload: data,
});

export const saveCommunication = (data, onSuccess) => ({
  type: types.SAVE_COMMUNICATION,
  payload: { data, onSuccess },
});

export const getCommunication = (ID, onGetValues) => ({
  type: types.GET_COMMUNICATION,
  payload: { ID, onGetValues },
});

export const uploadDocs = (data) => ({
  type: types.UPLOAD_DOCS,
  payload: data,
});

export const getCounties = (data) => ({
  type: types.GET_COUNTIES,
  payload: data,
});

export const getCities = (data) => ({
  type: types.GET_CITES,
  payload: data,
});

export const trainingUpload = (data) => ({
  type: types.UPLOAD_PROPERTY,
  payload: data,
});

export const propertyUpload = (data) => ({
  type: types.UPLOAD_TRAINING,
  payload: { ID: data },
});
