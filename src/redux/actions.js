import { v4 } from 'uuid'

export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT'
export const DECREMENT_AMOUNT = 'DECREMENT_AMOUNT'
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS'

export const incrementAmount = (value) => ({ type: INCREMENT_AMOUNT, payload: { value } })
export const decrementAmount = (value) => ({ type: DECREMENT_AMOUNT, payload: { value } })
export const clearTransactions = () => ({ type: CLEAR_TRANSACTIONS })
export const addTransaction = (value, type) => ({
  type: ADD_TRANSACTION, payload: {
    value: value,
    type: type,
    createdAt: new Date().toString(),
    id: v4()
  }
})
