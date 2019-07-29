import React from 'react'

const skill = props => (
  <div className="col-md-4">
    <div className="row align-items-center">
      <div className="col-md-3">
        <img src={props.img} width="50" />
      </div>

      <div className="col-md-9">
        <h4>{props.name}</h4>
      </div>
    </div>
  </div>
)

export default skill
