import React from 'react'

const topic = props => {
  return (
    <div className="background-text background-text-second mb-5">
      <h2 className="mb-4 display-4">{props.title}</h2>
      <p className="lead text-left">{props.children}</p>
    </div>
  )
}

export default topic
