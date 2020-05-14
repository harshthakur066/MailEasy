import createDataContext from "./createDataContext";
import axios from "axios";

const tokenReducer = (state, action) => {
  switch (action.type) {
    case "handel_token":
      return action.payload;
    default:
      return state;
  }
};

const handleToken = (dispatch) => async (token) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: "handel_token", payload: res.data });
};

export const { Provider, Context } = createDataContext(
  tokenReducer,
  { handleToken },
  null
);
