import axios from 'axios'


export const getBill = () => {
  return {
    type: 'GET_BILL',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/bill')
  }
}
// {getAllItems, getType, getPullDown}

// Getting all the Items for the 'bar'
export const getAllItems = () => {
  return {
    type: 'GET_ALL_ITEMS',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/items')
  }
}
// selecting a type of items
export const getType = (id) => {
  return {
    type: 'GET_TYPE',
    payload: axios.post(`https://murmuring-tundra-40675.herokuapp.com/items/select/${id} `)
  }
}
// PullDown Menu
export const getPullDown = (id) => {
  return {
    type: 'GET_PULLDOWN',
    payload: axios.get(`https://murmuring-tundra-40675.herokuapp.com/items/item/${id}`)
  }
}
