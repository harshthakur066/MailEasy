import createDataContext from "./createDataContext";
import axios from "axios";

const surveyReducer = (state, action) => {
  switch (action.type) {
    case "fetch_surveys":
      return { ...state, surveys: action.payload || false };
    case "delete_survey":
      return {
        ...state,
        surveys: state.surveys.filter(
          (survey) => survey._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const fetchSurveys = (dispatch) => async () => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: "fetch_surveys", payload: res.data });
};

const deleteSurvey = (dispatch) => async (id) => {
  await axios.delete(`api/surveys/${id}`);
  alert("Survey Deleted");
  dispatch({ type: "delete_survey", payload: id });
};

export const { Provider, Context } = createDataContext(
  surveyReducer,
  { fetchSurveys, deleteSurvey },
  { surveys: [] }
);
