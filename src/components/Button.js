import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42;
  border-radius: 0;
  user-select: none;
  margin: 0 10px;
  color: #fff;
  background-color: ${props => props.primary ? "#2c2e2f" : "#68b828"};
`
class Button extends Component {
  render() {
    const { name, type, children, onClick } = this.props
    return (
      <StyledButton name={name} type={type} onClick={onClick}> {children} </StyledButton>
    )
  }
}

export default Button
