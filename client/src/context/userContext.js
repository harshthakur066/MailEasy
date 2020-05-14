import createDataContext from "./createDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "fetch_user":
      return action.payload || false;
    case "handel_token":
      return action.payload;
    default:
      return state;
  }
};

const fetchUser = (dispatch) => async () => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: "fetch_user", payload: res.data });
};

const handleToken = (dispatch) => async (token) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: "handel_token", payload: res.data });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchUser, handleToken },
  null
);
