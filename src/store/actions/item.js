import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const fetchItemsStart = () => {
  return {
    type: actionTypes.FETCH_ITEMS_START
  }
}

export const fetchItemsSuccess = items => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items: items
  }
}

export const fetchItemsFail = error => {
  return {
    type: actionTypes.FETCH_ITEMS_FAIL,
    error: error
  }
}

export const fetchItems = () => {
  return dispatch => {
    axios.get(apiUrl + '/items')
      .then(res => {
        const fetchedItems = [];
        for (let key in res.data) {
          fetchItems.push({ ...res.data[key], id: key });
        }
        dispatch(fetchItemsSuccess(fetchedItems));
      })
      .catch(err => {
        dispatch(fetchItemsFail(err));
      });
  }
}