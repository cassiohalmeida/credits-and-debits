import { ADD_CREDIT } from './actions'

const initialState = {
  creditsAndDebits: [],
  amount: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_CREDIT:
      return state + action.value
    default:
      return state
  }
}
