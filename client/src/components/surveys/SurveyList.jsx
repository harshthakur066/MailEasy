import React, { useContext, useEffect } from "react";
import { Context as SurveyContext } from "../../context/surveyContext";

const SurveyList = () => {
  const { state, fetchSurveys, deleteSurvey } = useContext(SurveyContext);

  useEffect(() => {
    fetchSurveys();
    // eslint-disable-next-line
  }, []);

  const renderContent = () => {
    switch (state.surveys.length) {
      case 0:
        return <h2>Loading...</h2>;
      default:
        return renderSurveys().reverse();
    }
  };

  const renderSurveys = () => {
    return state.surveys.map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <button
              className="btn-small light-blue darken-2"
              style={{ marginRight: "5px" }}
            >
              Yes: {survey.yes}
            </button>
            <button style={{ marginRight: "10px" }} className="btn-small">
              No: {survey.no}
            </button>
            <button
              onClick={(id) => {
                deleteSurvey(survey._id);
              }}
              className="btn-small red darken-2"
            >
              <i style={{ padding: "0 6px" }} className="material-icons">
                delete
              </i>
            </button>
          </div>
        </div>
      );
    });
  };

  console.log(state);
  return (
    // eslint-disable-next-line
    <div>{renderContent()}</div>
  );
};

export default SurveyList;
