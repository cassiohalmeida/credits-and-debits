import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #767676;
`

class Title extends Component {
  render() {
    return (
      <StyledTitle>
        Credits and Debits
      </StyledTitle>
    )
  }
}

export default Title
