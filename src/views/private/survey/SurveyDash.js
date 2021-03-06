import React, { useEffect, useState, useContext } from "react";
import { Route, Link } from "react-router-dom"; // eslint-disable-line no-unused-vars
import styled from "styled-components"; // eslint-disable-line no-unused-vars
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import { UserContext } from "../../../contexts/UserContext";
//Todo
//--need to figure out how be wants to do the "dots" from figma (showing progress?)
//--how do we want to store the "form id" to make the call to questiongroups by id to get questions
//--expiration dates on surveys?
const SurveyDash = props => {
  const activeUser = useContext(UserContext);
  const [currentSurveys, addCurrentSurveys] = useState([]);
  const [allSurveys, setAllSurveys] = useState([]);
  const { url } = props.match;
  console.log("activeUserContext", activeUser);

  useEffect(() => {
    axiosWithAuth()
      .get("/questiongroups")
      .then(res => {
        if (res.data.forms.in_progress === true) {
          addCurrentSurveys(res.data.forms);
        } else {
          setAllSurveys(res.data.forms);
        }
      });
  }, []);

  return (
    <Wrapper>
      <StyledContainer>
        <h1>Weekly Surveys</h1>
        <h2>IN PROGRESS</h2>
        {currentSurveys.map((group, i) => {
          return (
            <StyledSurveyDivs key={i}>
              <div onClick={() => props.history.push(url + "/surveyintro")}>
                {group.name}
              </div>
            </StyledSurveyDivs>
          );
        })}
        <NewDiv>
          <h2>NEW</h2>
          {activeUser.roleTitle && activeUser.roleTitle !== "Student" && (
            <StyledButton
              onClick={() => props.history.push(url + "/createsurvey")}
            >
              Create Survey
            </StyledButton>
          )}
        </NewDiv>
        {allSurveys.map((group, i) => {
          return (
            <StyledSurveyDivs key={i}>
              <div onClick={() => props.history.push(url + "/surveyintro")}>
                {group.name}
              </div>
            </StyledSurveyDivs>
          );
        })}
        {/* Onclick to survey creation */}
      </StyledContainer>
    </Wrapper>
  );
};

//styles
const NewDiv = styled.div`
display: flex;
justify-content: space-between;
h2 {
  width: 50%;
}

`
const StyledButton = styled.button`
  padding: 1rem;
  width: 30%;
  align-items: center;
  text-align: center;
  color: #e6e6e6;
  background-color: #e05cb3;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  font-size: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  margin:2rem auto;
`;
const StyledSurveyDivs = styled.div`
  display: flex;
  background: #3d3b91;
  padding: 2rem;
`;
const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  color: #ccc9ff;
  width: 90%;
  height: 80vh;
  h1 {
    font-size: 2.4rem;
    align-self: center;
    font-weight: bold;
  }
`;

export default SurveyDash;
