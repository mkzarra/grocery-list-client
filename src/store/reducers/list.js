import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const insitialState = {
  items: [],
  loading: false,
  error: false,
  active: false
}

const listStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const activateListSuccess = (state, action) => {
  return updateObject(state, { loading: false, active: true });
}

const activateListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const deactivateListSuccess = (state, action) => {
  return updateObject(state, { loading: false, active: false });
}

const deactivateListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const addToListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const addToListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const removeFromListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const removeFromListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const reducer = (state = insitialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_START: return listStart(state, action);
    case actionTypes.ACTIVATE_LIST_SUCCESS: return activateListSuccess(state, action);
    case actionTypes.ACTIVATE_LIST_FAIL: return activateListFail(state, action);
    case actionTypes.DEACTIVATE_LIST_SUCCESS: return deactivateListSuccess(state, action);
    case actionTypes.DEACTIVATE_LIST_FAIL: return deactivateListFail(state, action);
    case actionTypes.ADD_TO_LIST_SUCCESS: return addToListSuccess(state, action);
    case actionTypes.ADD_TO_LIST_FAIL: return addToListFail(state, action);
    case actionTypes.REMOVE_FROM_LIST_SUCCESS: return removeFromListSuccess(state, action);
    case actionTypes.REMOVE_FROM_LIST_FAIL: return removeFromListFail(state, action);
    default: return state;
  }
}

export default reducer;