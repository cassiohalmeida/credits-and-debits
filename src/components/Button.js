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
`

const PrimaryButton = styled(StyledButton)`
  color: #fff;
  background-color: #2c2e2f;
  border-color: #202122;
`;

const SecundaryButton = styled(StyledButton)`
  background-color: #68b828;
  color: #fff;
`

class Button extends Component {
  renderType = (type) => {
    switch(type) {
      case 'primary':
        return <PrimaryButton> {this.props.children} </PrimaryButton>
      case 'secundary':
        return <SecundaryButton> {this.props.children} </SecundaryButton>
      default:
        return <StyledButton> {this.props.children} </StyledButton>
    }
  }
  render() {
    return (
      this.renderType(this.props.type)
    )
  }
}

export default Button
