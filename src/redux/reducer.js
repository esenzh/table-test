import {
  ADD,
  REMOVE,
  EDIT,
  FETCH_LIST,
  SHOW_LOADER,
  HIDE_LOADER,
  SORT_NAME,
  SORT_EMAIL,
} from "./type";

const initialState = {
  list: [],
  isLoading: false,
  isSorted: false,
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return {
        list: action.payload,
        isLoading: oldState.isLoading,
      };

    case ADD:
      return {
        list: [...oldState, action.payload],
        isLoading: oldState.isLoading,
      };

    case REMOVE:
      const newList = oldState.list.filter(
        (student) => student[0].value !== action.payload
      );
      return {
        list: newList,
        isLoading: oldState.isLoading,
      };

    case EDIT:
      const editedStudent = [
        { field: "ID", value: action.payload.id, type: "integer" },
        { field: "Name", value: action.payload.name, type: "string" },
        { field: "Age", value: action.payload.age, type: "integer" },
        { field: "Phone", value: action.payload.phone, type: "string" },
        { field: "E-mail", value: action.payload.email, type: "string" },
      ];
      const foundIndex = oldState.list.findIndex(
        (student) => student[0].value === action.payload.id
      );

      const newEditedList = oldState.list;
      newEditedList[foundIndex] = editedStudent;

      return {
        list: newEditedList,
        isLoading: oldState.isLoading,
      };

    case SORT_NAME:
      oldState.list.sort(function (a, b) {
        if (a[1].value > b[1].value) {
          return 1;
        }
        if (a[1].value < b[1].value) {
          return -1;
        }
        return 0;
      });

      return {
        list: oldState.list,
        isLoading: oldState.isLoading,
      };
      
    case SORT_EMAIL:
      oldState.list.sort(function (a, b) {
        if (a[4].value > b[4].value) {
          return 1;
        }
        if (a[4].value < b[4].value) {
          return -1;
        }
        return 0;
      });
      return {
        list: oldState.list,
        isLoading: oldState.isLoading,
      };

    case SHOW_LOADER:
      return {
        list: oldState.list,
        isLoading: true,
      };

    case HIDE_LOADER:
      return {
        list: oldState.list,
        isLoading: false,
      };

    default:
      return oldState;
  }
}
