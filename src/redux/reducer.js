import { INCREMENT_AMOUNT, DECREMENT_AMOUNT, ADD_TRANSACTION, CLEAR_TRANSACTIONS } from './actions'

const initialState = {
  transactions: [],
  amount: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload.value
      }
    case DECREMENT_AMOUNT:
      return {
        ...state,
        amount: (state.amount - action.payload.value)
      }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, {
          id: action.payload.id,
          value: action.payload.value,
          type: action.payload.type,
          createdAt: action.payload.createdAt
        }]
      }
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: []
      }
    default:
      return state
  }
}
