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

export const activateListSuccess = lists => {
  return {
    type: actionTypes.ACTIVATE_LIST_SUCCESS,
    lists: lists
  }
}

export const activateListFail = error => {
  return {
    type: actionTypes.ACTIVATE_LIST_FAIL,
    error: error
  }
}

export const deactivateListSuccess = lists => {
  return {
    type: actionTypes.DEACTIVATE_LIST_SUCCESS,
    lists: lists
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

export const activateList = (lists, newList) => {
  return lists.unshift(newList);
}

export const createList = (data) => {
  console.log(data);
  return dispatch => {
    dispatch(listStart());
    axios.post(apiUrl + '/lists', {
      list: {
        user_id: data.userId,
        items: data.list
      },
      headers: {
        Authorization: "Token token=" + data.token
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(createListSuccess(res.data));
        dispatch(activateList(data.myLists, res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(createListFail(error));
        // dispatch(activateListFail(error));
      });
  }
}

export const getAllLists = (data) => {
  return dispatch => {
    dispatch(listStart());
    axios.get(apiUrl + '/lists', {
      headers: {
        Authorization: "Token token=" + data.token
      }
    })
      .then(res => {
        dispatch(getListSuccess(res.data.lists));
      })
      .catch(error => {
        console.log(error);
        dispatch(getListFail(error));
      });
  }
}

export const getList = (data) => {
  return dispatch => {
    dispatch(listStart());
    axios.get(apiUrl + '/lists/' + data.listId, {
      headers: {
        Authorization: "Token token=" + data.user.token
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(getListSuccess(res.data.lists.list));
      })
      .catch(error => {
        console.log(error);
        dispatch(getListFail(error));
      });
  }
}

export const deleteList = (data) => {
  return dispatch => {
    dispatch(listStart());

    axios.delete(apiUrl + '/lists/' + data.listId, {
      headers: {
        Authorization: "Token token=" + data.token
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(deleteListSuccess(res.data.list.id));
        dispatch(deactivateListSuccess({}));
      })
      .catch(error => {
        console.log(error);
        dispatch(deleteListFail(error));
      });
  }
}