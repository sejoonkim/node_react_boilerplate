import React, { useReducer, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ScriptTag from 'react-script-tag'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import * as d3 from 'd3'
// import * as topojson from 'topojson'

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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      marginTop: "40px"
    },
  }));  


  function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function DonationMapPage(props) {
    const classes = useStyles()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const toInstitutionListPage = () => {
        props.history.push("/institutionlist")
    }
    
    return (
    <>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: 'column'
        }}
        >
         <div class="img" style={{marginTop: "-200px"}}>
    <img src="data:image/png;base64,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" width="300" height="400"/>
    </div>

    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">시/도 선택하기</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>서울특별시</MenuItem>
          <MenuItem value={20}>부산광역시</MenuItem>
          <MenuItem value={30}>대구광역시</MenuItem>
          <MenuItem value={40}>인천광역시</MenuItem>
          <MenuItem value={50}>광주광역시</MenuItem>
          <MenuItem value={60}>대전광역시</MenuItem>
          <MenuItem value={70}>울산광역시</MenuItem>
          <MenuItem value={80}>경기도</MenuItem>
          <MenuItem value={90}>강원도</MenuItem>
          <MenuItem value={100}>충청북도</MenuItem>
          <MenuItem value={110}>충청남도</MenuItem>
          <MenuItem value={120}>전라북도</MenuItem>
          <MenuItem value={130}>전라남도</MenuItem>
          <MenuItem value={140}>경상북도</MenuItem>
          <MenuItem value={150}>경상남도</MenuItem>
          <MenuItem value={160}>제주특별자치도</MenuItem>
          <MenuItem value={170}>세종특별자치시</MenuItem>
        </Select>
      </FormControl>
    </div>
            <div>
            <Button
                variant="outlined"
                className={classes.button}
                onClick={toInstitutionListPage}>기부단체 보러 가기</Button>
            </div>
        </div>
      </>
    )
}

export default withRouter(DonationMapPage)
