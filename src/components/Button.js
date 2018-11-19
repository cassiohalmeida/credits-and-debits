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
`

const PrimaryButton = styled(StyledButton)`
  background-color: #2c2e2f;
`;

const SecundaryButton = styled(StyledButton)`
  background-color: #68b828;
`

class Button extends Component {
  renderType = () => {
    const { name, value, type, visual, children, onClick } = this.props
    switch(visual) {
      case 'primary':
        return <PrimaryButton name={name} value={value} type={type} onClick={onClick}> {children} </PrimaryButton>
      case 'secundary':
        return <SecundaryButton name={name} value={value} type={type} onClick={onClick}> {children} </SecundaryButton>
      default:
        return <StyledButton name={name} value={value} type={type} onClick={onClick}> {children} </StyledButton>
    }
  }
  render() {
    return (
      this.renderType()
    )
  }
}

export default Button
