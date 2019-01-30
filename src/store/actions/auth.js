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

export const logout = (token) => {
  console.log(token);
  return dispatch => {
    dispatch(authStart());
    axios.delete(apiUrl + '/sign-out', { headers: {Authorization: 'Token token=' + token} })
      .then(res => {
        console.log(res);
        dispatch(authSuccess(null, null));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  }
}

export const signUp = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(apiUrl + '/sign-up', { credentials: data })
      .then(res => {
        console.log(res);
        console.log(data);
        dispatch(authSuccess(res.data.user.token, res.data.user.id));
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
        console.log(res.data.user);
        console.log(data);
        dispatch(authSuccess(res.data.user.token, res.data.user.id))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  }
}