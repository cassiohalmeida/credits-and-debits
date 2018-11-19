import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #767676;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1.6em;
  }
`
class Title extends Component {
  render() {
    return (
      <StyledTitle>
        {this.props.children}
      </StyledTitle>
    )
  }
}

export default Title
