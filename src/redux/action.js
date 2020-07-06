import { ADD, REMOVE, EDIT, FETCH_LIST, SHOW_ERROR } from "./type";
import axios from "axios";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // I faced a CORS issue, to solve it used this url as a proxy

// export const AddStudentAC = (newStudent) => {
//   return {
//     type: ADD,
//     payload: newStudent,
//   };
// };


export const EditAC = (student) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "UPDATE",
        url: "https://frontend-test.netbox.ru/",
        data: {
          id: student.id,
          name: student.name,
          age: student.age,
          phone: student.phone,
          email: student.email,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};

export const RemoveStudentRequestAC = id => {
  return async dispatch => {
    try {
      const response = await fetch(proxyUrl + 'https://frontend-test.netbox.ru/', {
          method: 'POST', // DELETE method is not allowed, that's why I used POST method
          body: {id}
      })
      dispatch({ type: REMOVE, payload: id });
    } catch (e) {
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};

export const fetchListAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://frontend-test.netbox.ru/`);
      const data = response.data;
      dispatch({ type: FETCH_LIST, payload: data });
    } catch (e) {
      dispatch({
        type: SHOW_ERROR,
        payload: "There is something wrong. Please, try again.",
      });
    }
  };
};
