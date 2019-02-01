import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const listStart = () => {
  return {
    type: actionTypes.LIST_START
  }
}

export const createListSuccess = lists => {
  return {
    type: actionTypes.CREATE_LIST_SUCCESS,
    lists: lists
  }
}

export const createListFail = error => {
  return {
    type: actionTypes.CREATE_LIST_FAIL,
    error: error
  }
}

export const deleteListSuccess = lists => {
  return {
    type: actionTypes.DELETE_LIST_SUCCESS,
    lists: lists
  }
}

export const deleteListFail = error => {
  return {
    type: actionTypes.DELETE_LIST_FAIL,
    error: error
  }
}

export const activateListSuccess = activeList => {
  return {
    type: actionTypes.ACTIVATE_LIST_SUCCESS,
    activeList: activeList
  }
}

export const activateListFail = error => {
  return {
    type: actionTypes.ACTIVATE_LIST_FAIL,
    error: error
  }
}

export const deactivateListSuccess = activeList => {
  return {
    type: actionTypes.DEACTIVATE_LIST_SUCCESS,
    activeList: activeList
  }
}

export const deactivateListFail = error => {
  return {
    type: actionTypes.DEACTIVATE_LIST_FAIL,
    error: error
  }
}

export const getListSuccess = lists => {
  return {
    type: actionTypes.GET_LIST_SUCCESS,
    lists: lists
  }
}

export const getListFail = error => {
  return {
    type: actionTypes.GET_LIST_FAIL,
    error: error
  }
}

export const createList = (data) => {
  return dispatch => {
    dispatch(listStart());
    axios.post(apiUrl + '/lists', { headers: { Authorization: "Token token=" + data.user.token } })
      .then(res => {
        console.log(res.data);
        dispatch(createListSuccess(res.data.lists.list));
        dispatch(activateListSuccess(res.data.lists.list));
      })
      .catch(error => {
        console.log(error);
        dispatch(createListFail(error));
        dispatch(activateListFail(error));
      });
  }
}

