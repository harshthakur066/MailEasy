import React, { useContext } from "react";

import { Context as UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Landing = () => {
  const { state } = useContext(UserContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MailEasy!</h1>
      <h4>Collect feedback form your users to take your buisness at the top</h4>
      {state ? (
        <Link to="/surveys">
          <h5> Go to dashboard </h5>
        </Link>
      ) : null}
    </div>
  );
};

export default Landing;
