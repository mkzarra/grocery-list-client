import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  itemId: null,
  itemName: '',
  organic: false,
  price: '',
  taxable: false,
  department: '',
  PLU: '',
  nonGMO: false,
  additionalInfo: ''
}

const addToListSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const addToListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const removeFromListSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const removeFromListFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST_SUCCESS: return addToListSuccess(state, action);
    case actionTypes.ADD_TO_LIST_FAIL: return addToListFail(state, action);
    case actionTypes.REMOVE_FROM_LIST_SUCCESS: return removeFromListSuccess(state, action);
    case actionTypes.REMOVE_FROM_LIST_FAIL: return removeFromListFail(state, action);
    default: state;
  }
}

export default reducer;