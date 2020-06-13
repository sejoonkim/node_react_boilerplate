import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withRouter } from 'react-router-dom'
import ScriptTag from 'react-script-tag'
// import * as d3 from 'd3'
// import * as topojson from 'topojson'

const useStyles = makeStyles({
    root: {
      width: 300,
      height: 390,
      margin: "1rem",
    },
    title: {
      fontSize: 14,
    },
    img: {
      width: "50%",
      height: "50%",
    },
    icons: {
      marginTop: "10px",
      marginBottom: "0px"
    },
    box: {
        padding: 10,
        // margin: 0
    }
  });


function DonationInstitutionListPage(props) {
    const classes = useStyles()

    const toRedCross = () => {
        props.history.push("/redcross");
    };

    const toGreenUmbrella = () => {
    props.history.push("/greenumbrella");
    };
    
    return (
        <div style={{ backgroundColor: "#f1f0f0" }}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={4} align="center">
            <Card className={classes.root}>
              <CardActionArea ref={input => input && input.focus()}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  alt="첫번째 가이드"
                  height="160"
                  src="https://www.redcross.or.kr/design/images/thumbnail/basic_system/2.0/2.04.jpg"
                  title="guide"
                />
                <CardContent className={classes.box}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    대한적십자사
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>구분:</b> 구호단체
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>설립목적:</b> 적십자에 관한 조약과 국제적십자회의에서 결의한 인도적 인무 달성
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>주요 활동/업무:</b> 구호사업, 지역보건사업, 사회봉사사업 등
                  </Typography>

                  <div className={classes.icons}>
                    <img src="https://image.flaticon.com/icons/png/512/91/91151.png"
                    width="50" height="50"/>
                
                    <img src="https://image.freepik.com/free-icon/antiseptic_318-10727.jpg" width="50" height="50"/>

                    <img src="https://image.flaticon.com/icons/png/512/85/85816.png"
                    width="50" height="50"/>
                  </div>
                </CardContent>

                
              </CardActionArea>
              <CardActions>
                <Button onClick={toRedCross} size="small" color="primary">
                  더 알아보기
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={4} align="center">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.img}
                component="img"
                alt="두번째 가이드"
                height="160"
                src="https://cdn.pixabay.com/photo/2013/07/12/13/53/umbrella-147514_960_720.png"
                title="guide"
              />
              <CardContent className={classes.box}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    초록우산 어린이재단
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>구분:</b> 고아 구호단체
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>설립목적:</b> 소외 어린이들을 위한 인도적 지원, 어린이 복지를 통한 미래대비
                  </Typography>
                  <Typography align="left" variant="caption" component="h6">
                    <b>주요 활동/업무:</b> 구호사업, 지역보건사업, 사회봉사사업 등
                  </Typography>

                  <div className={classes.icons}>
                    <img src="https://image.flaticon.com/icons/png/512/91/91151.png"
                    width="50" height="50"/>
                
                    <img src="https://image.freepik.com/free-icon/antiseptic_318-10727.jpg" width="50" height="50"/>

                    <img src="https://image.flaticon.com/icons/png/512/85/85816.png"
                    width="50" height="50"/>
                  </div>
                </CardContent>

                
              </CardActionArea>
              <CardActions>
                <Button onClick={toGreenUmbrella} size="small" color="primary">
                  더 알아보기
                </Button>
              </CardActions>
          </Card>
        </Grid>
          </Grid>
          </div>
    )
}

export default withRouter(DonationInstitutionListPage)
