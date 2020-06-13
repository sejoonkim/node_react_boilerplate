import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

const DesignBlock = styled.div`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h3{
  margin-bottom: 40px;
  font-weight: 900;
  font-size: 70px;
  color: #0054FF;
  text-align: center;
  text-transform: uppercase;
}
.id{
  width: 300px;
  height: 40px;
  ${'' /* margin: 0 45%; */}
  margin-bottom: 15px;
  border: 2px solid #0054FF;
}
.id:hover{
  border-color: #0100FF;
  transition: 0.5s;
}
.pwd{
  width: 300px;
  height: 40px;
  ${'' /* margin: 10px 45%; */}
  margin-bottom: 15px;
  border: 2px solid #0054FF;
}
.pwd :hover{
  border-color: #0100FF;
  transition: 0.5s;
}
.but{
  width: 300px;
  height: 50px;
  ${'' /* margin: 15px 9%; */}
  border: 0;
  font-size: 20px;
  background-color:#0054FF;
  color: #fff;

}
input{
  padding-left: 10px;
}
`;

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column"
      }}
    >
    <DesignBlock>
      <div>
        <select class="sel">
        <option selected>한국어</option>
         {/* <option selected>영어</option> */}
        </select>
      </div>
      <h3>CoBl</h3>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <input type="email" className='id' value={Email} placeholder="이메일" onChange={onEmailHandler} />
        <input type="password" className='pwd' value={Password} placeholder="비밀번호" onChange={onPasswordHandler} />

        <br />
        <button type="submit" className='but'>로그인</button>
      </form>
    </DesignBlock>
    </div>
  );
}

export default withRouter(LoginPage);
