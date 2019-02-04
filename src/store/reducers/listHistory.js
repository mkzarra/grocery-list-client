import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const insitialState = {
  lists: [],
  loading: false,
  error: false,
  activeList: {}
}

const listStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const createListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false, activeList: action.activeList });
}

const createListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const deleteListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const deleteListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const deactivateListSuccess = (state, action) => {
  return updateObject(state, { loading: false, activeList: action.activeList });
}

const deactivateListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const activateListSuccess = (state, action) => {
  return updateObject(state, { loading: false, activeList: action.activeList });
}

const activateListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const getListSuccess = (state, action) => {
  return updateObject(state, { lists: action.lists, loading: false });
}

const getListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const reducer = (state = insitialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_START: return listStart(state, action);
    case actionTypes.CREATE_LIST_SUCCESS: return createListSuccess(state, action);
    case actionTypes.CREATE_LIST_FAIL: return createListFail(state, action);
    case actionTypes.DELETE_LIST_SUCCESS: return deleteListSuccess(state, action);
    case actionTypes.DELETE_LIST_FAIL: return deleteListFail(state, action);
    case actionTypes.DEACTIVATE_LIST_SUCCESS: return deactivateListSuccess(state, action);
    case actionTypes.DEACTIVATE_LIST_FAIL: return deactivateListFail(state, action);
    case actionTypes.ACTIVATE_LIST_SUCCESS: return activateListSuccess(state, action);
    case actionTypes.ACTIVATE_LIST_FAIL: return activateListFail(state, action);
    case actionTypes.GET_LIST_SUCCESS: return getListSuccess(state, action);
    case actionTypes.GET_LIST_FAIL: return getListFail(state, action);
    default: return state;
  }
}

export default reducer;