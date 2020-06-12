import React from 'react'
import { withRouter } from 'react-router-dom'

function DonationMapPage() {
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
        Donation Map Page입니다.
      </div>
    )
}

export default withRouter(DonationMapPage)
