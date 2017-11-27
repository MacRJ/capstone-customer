export default(state=[], action) => {
  switch(action.type) {
    case 'GET_ALL_TABS_FULFILLED':
      return [...action.payload.data]
    case 'ADD_TAB_FULFILLED':
      return [...action.payload.data]
    case 'SELECT_FULFILLED':
      return [...action.payload.data]  
    default:
      return state
  }
}
