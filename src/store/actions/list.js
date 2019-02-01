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

export const addToListSuccess = lists => {
  return {
    type: actionTypes.ADD_TO_LIST_SUCCESS,
    lists: lists
  }
}

export const addToListFail = error => {
  return {
    type: actionTypes.ADD_TO_LIST_FAIL,
    error: error
  }
}

export const removeFromListSuccess = lists => {
  return {
    type: actionTypes.REMOVE_FROM_LIST_SUCCESS,
    lists: lists
  }
}

export const removeFromListsFail = error => {
  return {
    type: actionTypes.REMOVE_FROM_LIST_FAIL,
    error: error
  }
}