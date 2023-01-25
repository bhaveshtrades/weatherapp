import React from 'react'

function Loading() {
  return (
    <div class="spinner-grow" style={{width: "20rem", height: "20rem"}} role="status">
    <span class="visually-hidden bg-slate-50">Loading...</span>
    </div>
  )
}

export default Loading;
