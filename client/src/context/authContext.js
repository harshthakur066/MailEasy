import createDataContext from "./createDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "fetch_user":
      return action.payload || false;
    default:
      return state;
  }
};

const fetchUser = (dispatch) => async () => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: "fetch_user", payload: res.data });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchUser },
  null
);
