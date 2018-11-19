import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 3px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 0;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42;
  margin: 0 10px;
  color: #fff;
  background-color: ${props => props.primary ? "#2c2e2f" : "#68b828"}
`
class Button extends Component {
  render() {
    return (
      <StyledButton primary={this.props.primary}
        className={this.props.className} 
        name={this.props.name}
        type={this.props.type}
        onClick={this.props.onClick}>
        {this.props.children} 
      </StyledButton>
    )
  }
}

export default Button
