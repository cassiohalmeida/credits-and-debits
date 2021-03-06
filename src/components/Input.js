import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #eaeaea;
  padding: 10px;
  min-width: ${props => props.type === 'radio' ? "auto" : "300px"};
  margin: 2px 10px 0 5px;

  @media (max-width: 767px) {
    min-width: ${props => props.type === 'radio' ? "auto" : "100px"};
  }
`

class Input extends Component {
  render() {
    return (
      <StyledInput type={this.props.type}
        required={this.props.required}
        step="0.01"
        name={this.props.name}
        min='1'
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default Input
