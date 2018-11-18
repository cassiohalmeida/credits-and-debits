import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledTitle = styled.h1`
  color: #767676;
`

class Title extends Component {
  render() {
    return (
      <StyledTitle>
        Credits and Debits - {this.props.teste}
      </StyledTitle>
    )
  }
}

const mapStateToProps = (state) => ({
  teste: state.amount
})

export default connect(mapStateToProps)(Title)
