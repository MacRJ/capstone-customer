export default(state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_ITEMS_FULFILLED':
      return [...action.payload.data]
    case 'GET_TYPE_FULFILLED':
      return [...action.payload.data]  
    default:
      return state
  }
}
