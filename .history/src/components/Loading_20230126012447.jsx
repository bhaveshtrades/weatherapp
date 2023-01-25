import React from 'react'

function Loading() {
  return (
    <div className="spinner-border text-center" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loading;
