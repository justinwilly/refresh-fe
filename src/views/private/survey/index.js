import React from "react";
import { Route, Switch } from "react-router-dom";
import SurveyDash from "./SurveyDash";
import SurveyForm from "./CreateSurvey";
import SurveyIntro from "./Survey"

const SurveyCanvas = props => {
  console.log("props on canvas", props);
  const { url } = props.match;
  return (
    <Switch>
      <Route exact path={url} component={SurveyDash} />
      <Route exact path={url + "/createsurvey"} component={SurveyForm} />
      <Route exact path={url + "/surveyintro"} component={SurveyIntro} />
    </Switch>
  );
};

export default SurveyCanvas;
