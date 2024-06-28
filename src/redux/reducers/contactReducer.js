import * as types from "../actions/actionTypes";

const initialState = {
  contacts: [],
  contact: {},
  loading: false,
  error: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload, loading: false };
    case types.GET_CONTACTS_FAILED:
      return { ...state, loading: false, error: action.payload };

    case types.GET_DETAIL_CONTACT_REQUEST:
      return { ...state, loading: true };
    case types.GET_DETAIL_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    case types.GET_DETAIL_CONTACT_FAILED:
      return { ...state, error: action.payload, loading: false };
    case types.ADD_CONTACT_REQUEST:
      return { ...state, loading: true };
    case types.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
      };

    case types.UPDATE_CONTACT_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        contacts: [...state.contacts],
      };
    case types.UPDATE_CONTACT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default contactReducer;
