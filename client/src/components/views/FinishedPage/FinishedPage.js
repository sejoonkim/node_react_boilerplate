import React from 'react'
import { withRouter } from 'react-router-dom'
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

function FinishedPage(props) {
  const classes = useStyles()
  const toIndexPage = () => {
    props.history.push("/")
  }
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
      <h1>기부가 완료되었습니다!</h1>
      <h2>블록번호 : <b>304144</b></h2>
      <div>
            <Button
                variant="outlined"
                className={classes.button}
                onClick={toIndexPage}>홈으로 돌아가기</Button>
      </div>
    </div>
    )
}

export default withRouter(FinishedPage)
