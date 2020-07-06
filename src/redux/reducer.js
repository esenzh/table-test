import { ADD, REMOVE, EDIT, FETCH_LIST } from "./type";

const initialState = {
  list: []
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return {
        list: action.payload,
      };
    case ADD:
      return {
        list: [...oldState, action.payload],
      };
    case REMOVE:
      const newList = oldState.list.filter(
        (student) => student[0].value !== action.payload
      );
      return {
        list: newList,
      };

    default:
      return oldState;
  }
}
