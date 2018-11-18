export const ADD_CREDIT = 'ADD_CREDIT'
export const ADD_DEBIT = 'ADD_DEBIT'
export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT'
export const DECREMENT_AMOUNT = 'DECREMENT_AMOUNT'
export const CLEAR_DEBITS_AND_CREDITS = 'CLEAR_DEBITS_AND_CREDITS'
// ​
// /*
//  * action creators
//  */
// ​
export const addCounter = () => ({ type: ADD_COUNTER })
export const addCredit = (value) => ({ type: ADD_CREDIT, value: value })
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