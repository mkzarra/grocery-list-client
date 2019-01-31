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

export const removeItemSuccess = items => {
  return {
    type: actionTypes.REMOVE_ITEM_SUCCESS,
    items: items
  }
}

export const removeItemFail = error => {
  return {
    type: actionTypes.REMOVE_ITEM_FAIL,
    error: error
  }
}

export const addItemSuccess = items => {
  return {
    type: actionTypes.ADD_ITEM_SUCCESS,
    items: items
  }
}

export const addItemFail = error => {
  return {
    type: actionTypes.ADD_ITEM_FAIL,
    error: error
  }
}

export const updateItemSuccess = items => {
  return {
    type: actionTypes.UPDATE_ITEM_SUCCESS,
    items: items
  }
}

export const updateItemFail = error => {
  return {
    type: actionTypes.UPDATE_ITEM_FAIL,
    error: error
  }
}

export const showItem = (id, user) => {
  return dispatch => {
    dispatch(fetchItemsStart());
    axios.get(apiUrl + '/items/' + id, user)
      .then(res => {
        const item = { ...res.data[key], id: key };
        dispatch(fetchItemsSuccess(item));
        })
      .catch(err => {
        dispatch(fetchItemsFail(err));
      });
  }
}

export const createItem = data => {
  return dispatch => {
    dispatch(fetchItemsStart());
    axios.post(apiUrl + '/items/', { headers: { Authorization: "Token token=" + data.user.token } })
      .then(res => {
        console.log(res.data);
        dispatch(addItemSuccess(res.data.item));
      })
      .catch(err => {
        console.log(err);
        dispatch(addItemFail(err));
      });
  }
}

export const deleteItem = data => {
  return dispatch => {
    dispatch(fetchItemsStart());
    axios.delete(apiUrl + '/items/' + data.items.item.id, { headers: { Authorization: "Token token=" + data.user.token } })
      .then(res => {
        console.log(res.data);
        dispatch(removeItemSuccess(res.data.item.id));
      })
      .catch(err => {
        console.log(err);
        dispatch(removeItemFail(err));
      });
  }
}

export const updateItem = (data) => {
  return dispatch => {
    dispatch(fetchItemsStart());
    axios.patch(apiUrl + '/items/' + data.items.item.id, { headers: { Authorization: "Token token=" + data.user.token } })
      .then(res => {
        console.log(res.data);
        dispatch(updateItemSuccess(res.data.items.item));
      })
      .catch(err => {
        console.log(err);
        dispatch(updateItemFail(err));
      });
  }
}

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchItemsStart());
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