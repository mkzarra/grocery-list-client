import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { removeItemFail } from '../actions/item';

const initialState = {
  items: [],
  loading: false
}

const fetchItemsStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const fetchItemsSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const fetchItemsFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const addItemSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const addItemFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const removeItemSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const removeItemFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state, action);
    case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action);
    case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action);
    case actionTypes.ADD_ITEM_SUCCESS: return addItemSuccess(state, action);
    case actionTypes.ADD_ITEM_FAIL: return addItemFail(state, action);
    case actionTypes.REMOVE_ITEM_SUCCESS: return removeItemSuccess(state, action);
    case actionTypes.REMOVE_ITEM_FAIL: return removeItemFail(state, action);
    default: return state;
  }
}

export default reducer;