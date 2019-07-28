import React, { Component } from 'react'

class CodeLogo extends Component {
  render() {
    return (
      <small className="text-dark">{this.props.children}</small>
    )
  }
}

export default CodeLogo
