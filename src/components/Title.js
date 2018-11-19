import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledTitle = styled.h1`
  color: #767676;
  margin: 0;
`

class Title extends Component {
  render() {
    return (
      <StyledTitle>
        Credits and Debits - R${Number(this.props.state.amount).toLocaleString('pt-BR')}
      </StyledTitle>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(Title)
