import React, { useState } from 'react'
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
  
`;

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

function RedCross(props) {
    const classes = useStyles()
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)

    const toFinishedPage = () => {
        props.history.push("/finished")
    }
    
    const onIncrease1 = () => {
        setNumber1(number1 => number1 + 1)
    }
    const onDecrease1 = () => {
        setNumber1(number1 => {
            number1 = number1 === 0 ? number1 : number1 - 1
            return number1
        })
    }

    const onIncrease2 = () => {
        setNumber2(number2 => number2 + 1)
    }
    const onDecrease2 = () => {
        setNumber2(number2 => {
            number2 = number2 === 0 ? number2 : number2 - 1
            return number2
        })
    }

    const onIncrease3 = () => {
        setNumber3(number3 => number3 + 1)
    }
    const onDecrease3 = () => {
        setNumber3(number3 => {
            number3 = number3 === 0 ? number3 : number3 - 1
            return number3
        })
    }
    
    return (
    <RootBlock><div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column"
      }}
    >
    
    <div class="section1">
        <img src="https://image.flaticon.com/icons/png/512/91/91151.png"
        width="100" height="100" />
    
        <img src="https://image.freepik.com/free-icon/antiseptic_318-10727.jpg" width="100" height="100" />

        <img src="https://image.flaticon.com/icons/png/512/85/85816.png"
        width="100" height="100" />
    </div>

    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginBottom: "50px" }}class="frac">
        <div style={{marginRight: "auto", marginLeft: "auto", width: "6rem"}}>
            <span>7</span>
            <span class="symbol">/</span>
            <span class="bottom">10</span>
        </div>

        <div style={{marginRight: "auto", marginLeft: "auto", width: "6rem"}}>
            <span>0</span>
            <span class="symbol">/</span>
            <span class="bottom">10</span>
        </div>

        <div style={{marginRight: "auto", marginLeft: "auto", width: "1.2rem"}}>
            <span>4</span>
            <span class="symbol">/</span>
            <span class="bottom">10</span>
        </div>
    </div>

    

  <div class="donation table">
    <table>
        {/* <caption>기부 물품 목록</caption> */}
        <colgroup>
        <col style={{width: "50px"}}/>
        <col style={{width: "100px"}}/>
        <col style={{width: "100px"}}/>
        <col style={{width: "100px"}}/>
        </colgroup>

        <thead>
        <tr>
            <th scope="col">체크</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">수량변경</th>
        </tr>
        </thead>
  
        <tbody style={{marginLeft: "20px"}}>
            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>마스크</td>
                <td><input type="text" name="qty" value={number1} class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onClick={onIncrease1}>▲</button>
                    <button class="minus" onClick={onDecrease1}>▼</button>
                </td>
            </tr>

            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>손소독제</td>
                <td><input type="text" name="qty" value={number2} class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onClick={onIncrease2}>▲</button>
                    <button class="minus" onClick={onDecrease2}>▼</button>
                </td>
            </tr>
            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>방역복</td>
                <td><input type="text" name="qty" value={number3} class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onClick={onIncrease3}>▲</button>
                    <button class="minus" onClick={onDecrease3}>▼</button>
                </td>
            </tr>
        </tbody>
   </table>
  </div>
  <div>
            <Button
                variant="outlined"
                className={classes.button}
                onClick={toFinishedPage}>결제하기</Button>
  </div>
</div>
</RootBlock>
    )
}

export default withRouter(RedCross)
