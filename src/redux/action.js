import {
  ADD_NEW_STUDENT,
  REMOVE,
  EDIT,
  FETCH_LIST,
  SHOW_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  SORT_NAME,
  SORT_EMAIL,
} from "./type";
import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // I faced a CORS issue, to solve it used this url as a proxy

export const AddNewStudentAC = (student) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADER, payload: true });
      await axios(proxyUrl + "https://frontend-test.netbox.ru/", {
        method: "POST",
        body: {
          name: student.name,
          age: student.age,
          phone: student.phone,
          email: student.email,
        },
      });
      dispatch({type: ADD_NEW_STUDENT, payload: student})
      dispatch({ type: HIDE_LOADER, payload: false });
    } catch (e) {
      dispatch({ type: HIDE_LOADER, payload: false });
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};

export const EditRequestAC = (student) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADER, payload: true });
      await axios(proxyUrl + "https://frontend-test.netbox.ru/", {
        method: "POST",
        body: {
          id: student.id,
          name: student.name,
          age: student.age,
          phone: student.phone,
          email: student.email,
        },
      });
      dispatch({ type: EDIT, payload: student });
      dispatch({ type: HIDE_LOADER, payload: false });
    } catch (e) {
      dispatch({ type: HIDE_LOADER, payload: false });
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};

export const RemoveStudentRequestAC = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADER, payload: true });
      await axios(proxyUrl + "https://frontend-test.netbox.ru/", {
        method: "POST", // DELETE method is not allowed, that's why I used POST method
        body: { id },
      });
      dispatch({ type: REMOVE, payload: id });
      dispatch({ type: HIDE_LOADER, payload: false });
    } catch (e) {
      dispatch({ type: HIDE_LOADER, payload: false });
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};

export const fetchListAC = () => {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER, payload: true });
    try {
      const response = await axios.get(`https://frontend-test.netbox.ru/`);
      const data = response.data;
      dispatch({ type: FETCH_LIST, payload: data });
      dispatch({ type: HIDE_LOADER, payload: false });
    } catch (e) {
      dispatch({ type: HIDE_LOADER, payload: false });
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};

export const SortTableAC = (title) => {
  if (title === "name") {
    return {
      type: SORT_NAME,
    };
  }
  return {
    type: SORT_EMAIL,
  };
};
