import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class ListHistory extends Component {
  state = {
    lists: [],
    error: false,
    loading: false,
    activeList: {}
  }
}

const mapStateToProps = state => {
  return {
    lists: state.myLists.lists,
    error: state.myLists.error,
    loading: state.myLists.loading,
    activeList: state.myLists.activeList,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetList: (data) => dispatch(actions.getList(data)),
    onCreateList: (data) => dispatch(actions.createList(data)),
    onDeleteList: (data) => dispatch(actions.deleteList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHistory);