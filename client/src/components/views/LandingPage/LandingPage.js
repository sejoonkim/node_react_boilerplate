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
  },
}));

const RootBlock = styled.div`
  ${'' /* img {
    width: 100%;
    height: auto;
  }
  .title-block {
    margin-top: 30px;
  }
  padding-top: 64px;

  h3 {
    font-weight: 500;
    margin: 0;
  }

  .sub-title {
    font-weight: 400;
    margin-top: 25px;
  } */}

  ${'' /* .div {
    clear: left;
  } */}
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
        <div style={{marginBottom: "50px"}}>Landing Page입니다.</div>
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={toDonationMapPage}>기부하러 가기</Button>
        </div>
      </div>
    </RootBlock>
  );
}

export default withRouter(LandingPage);
