// src/redux/actions/contactActions.js
import axios from "axios";
import * as types from "../actions/actionTypes";

const API_URL = "https://contact.herokuapp.com/contact";

export const fetchContacts = () => async (dispatch) => {
  dispatch({ type: types.GET_CONTACTS_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: types.GET_CONTACTS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CONTACTS_FAILED, payload: error.message });
  }
};

export const fetchContactDetail = (id) => async (dispatch) => {
  dispatch({ type: types.GET_DETAIL_CONTACT_REQUEST });
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({
      type: types.GET_DETAIL_CONTACT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_DETAIL_CONTACT_FAILED, payload: error.message });
  }
};

export const createContact =
  ({ firstName, lastName, age, photo }) =>
  async (dispatch) => {
    console.log("Data being sent to the server:", {
      firstName,
      lastName,
      age,
      photo,
    });
    // dispatch({ type: types.ADD_CONTACT_REQUEST });
    try {
      const response = await axios.post(API_URL, {
        firstName,
        lastName,
        age: Number(age),
        photo,
      });
      dispatch({ type: types.ADD_CONTACT_SUCCESS, payload: response.data });
      dispatch(fetchContacts());

      return response.status;
    } catch (error) {
      return error;
    }
  };

export const updateContact =
  (contact_id, firstName, lastName, age, photo) => async (dispatch) => {
    dispatch({ type: types.UPDATE_CONTACT_REQUEST });
    try {
      const response = await axios.put(`${API_URL}/${contact_id}`, {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
        photo: photo,
      });
      dispatch({ type: types.UPDATE_CONTACT_SUCCESS, payload: response.data });
      dispatch(fetchContacts());
      dispatch(fetchContactDetail(contact_id));
      return response.status;
    } catch (error) {
      console.error(error);
    }
  };

export const deleteContact = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_CONTACT_REQUEST });
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: types.DELETE_CONTACT_SUCCESS,
    });
  } catch (error) {
    console.error(error.message);
  }
};
