import React from 'react'

const topic = props => {
  let classBackground = 'mb-5 background-text'
  classBackground += (props.inverse) ? ' background-text-inverse' : ''

  return (
    <div className={classBackground}>
      <h2 className="mb-4 display-4">{props.title}</h2>
      <p className="lead text-left">{props.children}</p>
    </div>
  )
}

export default topic
