import {
  GET_CHARACTERS_FAILURE,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FETCHING
} from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload
      };
    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        error: "Whoooooooops you really screwed that up didn't you",
        isFetching: false
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
