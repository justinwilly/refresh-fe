//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
import Popup from 'react-popup';
import ModalButton from './modal.js'
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
import welcome from "../../../images/Onboarding/welcome.svg";


const AdminLogin = props => {
  //hooks
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [err, setErr] = useState(false);

  let errors = {};
  useEffect(() => {
    errors.userEmail =
    user.email.length < 4 && "user email must be greater than 5 characters";
  errors.userPassword =
    user.password.length < 4 &&
    "user password must be greater than 5 characters";
    props.debug &&
      console.log("errors:", errors, "user:", user);
  }, [user]);
  
  //route to sign up page
  const routeToLanding = e => {
    e.preventDefault();
    props.history.push("/");
  };

  //handle change for user info
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.toLowerCase()
    });
  };

  //handle submit of user info to backend
  const handleSubmit = e => {
      axiosWithAuth()
        .post("/admin/login", { email: user.email, password: user.password })
        .then(res => {
          console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            props.history.push("/leaderboard");
          } else {
            console.log(err.message)
            props.debug && console.log(err);
          }
        })
        .catch(err => {
          props.debug && console.log(err);
          alert('Invalid Credentials')
        });
  };

  
  //render
  return (
    <OnBoardContainer>
      <Popup className="mm-popup"/>
      <ButtonNoColor>
      <i class="fas fa-arrow-left fa-1x" onClick={routeToLanding}></i></ButtonNoColor>
      {/* <ButtonNoColor onClick={routeToLanding}>&lt;</ButtonNoColor> */}
      <Logo src={welcome} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={user.email}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
        />
        <Input
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
        />
        <Button onClick={handleSubmit} >
          Sign In
        </Button>
      </Form>
    </OnBoardContainer>
  );
};

// STYLED COMPONENTS
const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Catamaran", sans-serif;
  margin: auto auto 0 auto;
  line-height: 1.5;
  background-color: white;
  /* border: 2px solid red; */
  background-size: contain;
  color: black;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  padding: 5%;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    
    -webkit-text-fill-color: #fff;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:nth-child(*) {
    background-color: green;
    margin-bottom: 5%;
  }
`;

const Logo = styled.img`
  height: calc(100vh / 3.5);
  width: 100%;
  max-width: 100%;
  margin: auto;
  color: black;
  
  @media screen and (max-width: 1000px) {
    margin-top: auto;
  }
`;

const Form = styled.form`
  display: flex;
  margin: auto 0;
  flex-direction: column;
  width: 45%;
  /* border: 2px solid black; */
  input {
    font-size: calc(100% + 0.2vw);
    ::-webkit-input-placeholder {
      font-family: "Catamaran", sans-serif;
      color: #a6a6a6;
      font-size: calc(100%);
    }
  }
  .disabledColor {
    opacity: 30%;
  }
`;

const Input = styled.input`
  border: 1px solid black;
  margin: 3% 0;
  padding: 5%;
  width: 100%;
  border-radius: 3px;
  /* box-shadow: 1px 1px 1px 1px #35347f; */
  /* background: #3d3b91; */
  color: black;
  outline: none;
  font-size: calc(100%);
  ::-webkit-input-placeholder {
    font-family: "Catamaran", sans-serif;
    font-size: calc(100%);
  }
`;

const Button = styled.a`
display: flex;
justify-content: space-evenly;
border-radius: 0.5rem;
padding: 1.5rem 0.8rem;
width:75%;
text-align:center;
margin: 13% auto auto;
background: rgb(61,162,237);
color: white;
font-size:calc(110% + 0.5vw);
letter-spacing:0.1rem;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonNoColor = styled.a`
  margin-right: 60%;
  font-size: 2rem;
  font-style: medium;
  color: black;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
color: red;
font-size: 3rem
`

//EXPORT
export default AdminLogin;
