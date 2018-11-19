import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StylefParagraph = styled.p`
  text-align: right;
`

class Amount extends Component {
  render() {
    return (
      <StylefParagraph>
        Your amount: R$ {Number(this.props.state.amount).toLocaleString('pt-BR')}
      </StylefParagraph>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(Amount)
