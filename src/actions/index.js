import axios from "axios";

export const GET_CHARACTERS_FETCHING = "GET_CHARACTERS_FETCHING";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_FAILURE = "GET_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
  dispatch({ type: GET_CHARACTERS_FETCHING });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_CHARACTERS_FAILURE,
        payload: err
      });
    });
};

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
