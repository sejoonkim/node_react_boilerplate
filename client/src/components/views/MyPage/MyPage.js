import React from 'react'
import { withRouter } from 'react-router-dom'

function MyPage(props) {
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
      My Page입니다.
    </div>
    )
}

export default withRouter(MyPage)
