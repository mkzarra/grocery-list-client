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

