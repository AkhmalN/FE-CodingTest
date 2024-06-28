// src/redux/actions/contactActions.js
import axios from "axios";

const API_URL = "https://contact.herokuapp.com/contact";

export const fetchContacts = () => async (dispatch) => {
  dispatch({ type: "FETCH_CONTACTS_REQUEST" });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: "FETCH_CONTACTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_CONTACTS_FAILURE", payload: error.message });
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, contact);
    dispatch({ type: "ADD_CONTACT", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const updateContact = (id, contact) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    dispatch({ type: "UPDATE_CONTACT", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  } catch (error) {
    console.error(error);
  }
};
