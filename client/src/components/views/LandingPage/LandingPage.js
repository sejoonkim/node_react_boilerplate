import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "50px",
    textAlign: "center",
  },
  button: {
    color: "#fe8c00",
    borderRadius: 5,
    boxShadow: "0 0 0.2rem rgba(0, 0, 0, .1)",
    marginTop: "50px",
    width: "300px"
  },
}));

const RootBlock = styled.div`
  .image {
    margin-top: 30px;
  }

  body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
  }

  .images1 {
    ${'' /* margin-left: 450px; */}
  }

  .images2 {
      ${'' /* margin-left: 450px; */}
  }

  .images3 {
    ${'' /* margin-left: 450px; */}
    ${'' /* margin-bottom: 100px; */}
  }

  .title { 
    text-align:center;
    font-size: 52px;
    font-weight: 500;
    color: #000000;
  }

  .subtitle {
    text-align:center;
    font-size: 1.5rem;
    font-weight: bold;
    ${'' /* margin-top: 60px; */}
    color: #000000;
  }

  .main {
    margin-top: 60px;
    ${'' /* width: 1000px; */}
    margin: 0 auto;
  }
`;

function LandingPage(props) {
  const classes = useStyles()
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to logout.");
      }
    });
  };

  const toDonationMapPage = () => {
    props.history.push("/donationmap")
  }

  return (
    <RootBlock>
      <body background="https://cdn.pixabay.com/photo/2017/02/10/12/03/volunteer-2055010_960_720.png">

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
        
          <div class="title">
            <h2>CoBl</h2>
          </div>

          <div class="subtitle">
            <p>CoBl은 누구나 참여하고 변화를 만들어가는 P2B형식의 블록체인 기반</p>
            <p>기부금 내역 및 경로 플랫폼입니다.</p>
          </div>

         

          <div class="image">
            <div class="images1">
              <img src="https://image.flaticon.com/icons/png/512/66/66185.png" width="70" height="70"/>
            </div>
          </div>

          <div class="image">
            <div class="images2">
              <img src="https://image.flaticon.com/icons/png/512/48/48763.png" width="70" height="70"/>
            </div>
          </div>

          <div class="image">
            <div class="images3">
              <img src="https://image.flaticon.com/icons/png/512/96/96648.png" width="70" height="70"/>
            </div>
          </div>

           <div>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={toDonationMapPage}>기부하러 가기</Button>
          </div>
      </div> 
    </body>
    </RootBlock>
  );
}

export default withRouter(LandingPage);
