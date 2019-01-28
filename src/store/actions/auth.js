import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}

export const signUp = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(apiUrl + '/sign-up', { credentials: data })
      .then(res => {
        console.log(res);
        console.log(data);
        dispatch(authSuccess(res.data.token, res.data.userId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(err => {
        console.log(err);
        console.log(data);
        dispatch(authFail(err));
      });
  }
}

export const signIn = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(apiUrl + '/sign-in', { credentials: data })
      .then(res => {
        console.log(res.data);
        console.log(data);
        dispatch(authSuccess(res.data.token, res.data.userId))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
    })
  }
}