import createDataContext from "./createDataContext";
import axios from "axios";

const surveyReducer = (state, action) => {
  switch (action.type) {
    case "fetch_surveys":
      return action.payload;
    default:
      return state;
  }
};

const fetchSurveys = (dispatch) => async () => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: "fetch_surveys", payload: res.data });
};

export const { Provider, Context } = createDataContext(
  surveyReducer,
  { fetchSurveys },
  null
);
