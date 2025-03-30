import React from 'react'

export default function Toast({data}) {
    const {state,msg}=data
  return (
    <div className="toast toast-end">
  {
    state=="success"?<div className="alert alert-success">
    <span>{msg}</span>
  </div>:<div className="alert alert-warning">
    <span>{msg}</span>
  </div>
  }
</div>
  )
}
