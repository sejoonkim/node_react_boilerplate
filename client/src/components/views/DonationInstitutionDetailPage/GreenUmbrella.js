import React from 'react'
import { withRouter } from 'react-router-dom'

function GreenUmbrella(props) {
    return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
    
    <div class="section1">
        <img src="https://image.flaticon.com/icons/png/512/91/91151.png"
        width="150" height="150" />
    
        <img src="https://image.freepik.com/free-icon/antiseptic_318-10727.jpg" width="150" height="150" />

        <img src="https://image.flaticon.com/icons/png/512/85/85816.png"
        width="150" height="150" />
    </div>

    <div class="frac">
        <span>7</span>
        <span class="symbol">/</span>
        <span class="bottom">10</span>

            <span>0</span>
        <span class="symbol">/</span>
        <span class="bottom">10</span>

            <span>4</span>
        <span class="symbol">/</span>
        <span class="bottom">10</span>
    </div>

    

  <div class="donation table">
    <table>
        <caption>기부 물품 목록</caption>
        <colgroup>
        <col style="width:50px"/>
        <col style="width:100px"/>
        <col style="width:100px"/>
        <col style="width:100px"/>
        </colgroup>

        <thead>
        <tr>
            <th scope="col">체크</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">수량변경</th>
        </tr>
        </thead>
  
        <tbody>
            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>마스크</td>
                <td><input type="text" name="qty" value="1" class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onclick="">▲</button>
                    <button class="minus" onclick="">▼</button>
                </td>
            </tr>

            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>손소독제</td>
                <td><input type="text" name="qty" value="1" class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onclick="">▲</button>
                    <button class="minus" onclick="">▼</button>
                </td>
            </tr>
            
            <tr>
                <td><input type="checkbox" class="checkbox" name="check_item"/></td>
                <td>방역복</td>
                <td><input type="text" name="qty" value="1" class="input" title="상품수량입력"/></td>
                <td>
                    <button class="plus" onclick="">▲</button>
                    <button class="minus" onclick="">▼</button>
                </td>
            </tr>
        </tbody>
   </table>
  </div>
</div>
    )
}

export default withRouter(GreenUmbrella)
