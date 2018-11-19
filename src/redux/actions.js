import { v4 } from 'uuid'

export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT'
export const DECREMENT_AMOUNT = 'DECREMENT_AMOUNT'
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS'
// ​
// /*
//  * action creators
//  */
// ​
export const incrementAmount = (value) => ({ type: INCREMENT_AMOUNT, payload: { value } })
export const decrementAmount = (value) => ({ type: DECREMENT_AMOUNT, payload: { value } })
export const addTransaction = (value, type) => ({
  type: ADD_TRANSACTION, payload: {
    value: value,
    type: type,
    createdAt: new Date().toString(),
    id: v4()
  }
})

// ​
// export function addDebit(value) {
//   return { type: ADD_DEBIT, value }
// }
// ​
// export function incrementAmount(value) {
//   return { type: INCREMENT_AMOUNT, value }
// }

// export function decrementAmount(value) {
//   return { type: DECREMENT_AMOUNT, value }
// }

// export function clearDebitsAndCredits() {
//   return { type: CLEAR_DEBITS_AND_CREDITS }
// }