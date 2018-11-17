import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
`

class Button extends Component {
  handleClick = () => {
    alert('Clicked!')
  }
  render() {
    return (
      <StyledButton onClick={this.handleClick}>
        Add Credit
      </StyledButton>
    )
  }
}

export default Button
