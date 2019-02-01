import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const listStart = () => {
  return {
    type: actionTypes.LIST_START
  }
}

export const activateListSuccess = active => {
  return {
    type: actionTypes.ACTIVATE_LIST_SUCCESS,
    active: active
  }
}

export const activateListFail = error => {
  return {
    type: actionTypes.ACTIVATE_LIST_FAIL,
    error: error
  }
}

export const deactivateListSuccess = active => {
  return {
    type: actionTypes.DEACTIVATE_LIST_SUCCESS,
    active: active
  }
}

export const deactivateListFail = error => {
  return {
    type: actionTypes.DEACTIVATE_LIST_FAIL,
    error: error
  }
}

export const addToListSuccess = items => {
  return {
    type: actionTypes.ADD_TO_LIST_SUCCESS,
    items: items
  }
}

export const addToListFail = error => {
  return {
    type: actionTypes.ADD_TO_LIST_FAIL,
    error: error
  }
}

export const removeFromListSuccess = items => {
  return {
    type: actionTypes.REMOVE_FROM_LIST_SUCCESS,
    items: items
  }
}

export const removeFromListsFail = error => {
  return {
    type: actionTypes.REMOVE_FROM_LIST_FAIL,
    error: error
  }
}

export const getItemFromListSuccess = item => {
  return {
    type: actionTypes.GET_ITEM_FROM_LIST_SUCCESS,
    item: item
  }
}

export const getItemFromListFail = error => {
  return {
    type: actionTypes.GET_ITEM_FROM_LIST_FAIL,
    error: error
  }
}

export const addToList = data => {
  return dispatch => {
    dispatch(listStart());
    axios.patch(apiUrl + '/lists/' + data.lists.list.id, {
      headers: {
        Authorization: "Token token=" + data.user.id
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(addToListSuccess(res.data.list.item));
      })
      .catch(error => {
        console.log(error);
        dispatch(addToListFail(error));
      });
  }
}

export const removeFromList = data => {
  return dispatch => {
    dispatch(listStart());
    axios.patch(apiUrl + '/lists/' + data.lists.list.id, {
      headers: {
        Authorization: "Token token=" + data.user.id
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(removeFromListSuccess(res.data.list.item))
      })
      .catch(error => {
        console.log(error);
        dispatch(removeFromListsFail(error));
      });
  }
}