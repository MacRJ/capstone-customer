import axios from 'axios'
import config from '../src/app.config'


export const getBill = () => {
  return {
    type: 'GET_BILL',
    payload: axios.get(`${config.base_url}/bill`)
  }
}
// {getAllItems, getType, getPullDown}

// Getting all the Items for the 'bar'
export const getAllItems = () => {
  return {
    type: 'GET_ALL_ITEMS',
    payload: axios.get(`${config.base_url}/items`)
  }
}
// selecting a type of items
export const getType = (id) => {
  return {
    type: 'GET_TYPE',
    payload: axios.post(`${config.base_url}/items/select/${id}`)
  }
}
// PullDown Menu
export const getPullDown = (id) => {
  return {
    type: 'GET_PULLDOWN',
    payload: axios.get(`${config.base_url}/items/item/${id}`)
  }
}
export const addDrink = (id) => {
  return {
    type: 'ADD_DRINK',
    payload: axios.post(`${config.base_url}/bill/cust/5/${id}`)
  }
}
