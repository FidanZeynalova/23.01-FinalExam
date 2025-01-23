import React from 'react'
import { Helmet } from 'react-helmet'

function NotFound() {
  return (
    <>
    <Helmet>
      <title>Error Page</title>
    </Helmet>
    <div className="Error" style={{fontSize:"150px",fontWeight:"bold",
      display:"flex",alignItems:"center",justifyContent:"center",margin:"200px auto"
    }}>Error✔</div>
  </>
  )
}

export default NotFound