import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const insitialState = {
  lists: [],
  loading: false,
  error: false,
  active: true
}

const listStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const createListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const createListFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const deleteListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const deleteListFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const addToListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const addToListFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const removeFromListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const removeFromListFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const reducer = (state = insitialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_START: return listStart(state, action);
    case actionTypes.CREATE_LIST_SUCCESS: return createListSuccess(state, action);
    case actionTypes.CREATE_LIST_FAIL: return createListFail(state, action);
    case actionTypes.DELETE_LIST_SUCCESS: return deleteListSuccess(state, action);
    case actionTypes.DELETE_LIST_FAIL: return deleteListFail(state, action);
    case actionTypes.ADD_TO_LIST_SUCCESS: return addToListSuccess(state, action);
    case actionTypes.ADD_TO_LIST_FAIL: return addToListFail(state, action);
    case actionTypes.REMOVE_FROM_LIST_SUCCESS: return removeFromListSuccess(state, action);
    case actionTypes.REMOVE_FROM_LIST_FAIL: return removeFromListFail(state, action);
    default: return state;
  }
}

export default reducer;