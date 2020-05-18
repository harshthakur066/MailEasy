import React, { useContext, useEffect } from "react";
import { Context as SurveyContext } from "../../context/surveyContext";

const SurveyList = () => {
  const { state, fetchSurveys } = useContext(SurveyContext);

  useEffect(() => {
    fetchSurveys();
    // eslint-disable-next-line
  }, []);

  const renderContent = () => {
    switch (state) {
      case null:
        return <h2>Loading...</h2>;
      case false:
        return <h2>No data to show</h2>;
      default:
        return renderSurveys();
    }
  };

  const renderSurveys = () => {
    return state.reverse().map((survey) => {
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
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  console.log(state);
  return <div>{renderContent()}</div>;
};

export default SurveyList;
