import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import List from '../List/List';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import classes from './ListHistory.module.css';

class ListHistory extends Component {
  state = {
    lists: [],
    error: false,
    loading: false
  }

  componentDidMount() {
    console.log(this.props.lists);
    const data = {
      token: this.props.token
    }
    this.props.onGetAllLists(data);
  }

  render() {
    let lists = <Spinner />;
    const activeList = [...this.props.lists]
    const activeListObj = { ...activeList.shift() };
    let activeListId = activeListObj.id
    console.log(activeListId)
    if (!this.props.loading) {
      lists = this.props.lists.map(list => {
        if (activeListId !== list.id) {
          activeListId = null;
        }
        return (
          <div key={list.id}>
            <List activeId={activeListId} listId={list.id} loading={false} />
          </div>
        );
      });
    }

    if (!this.props.token || this.props.lists.length === 0) {
      lists = <Redirect to="/" />
    }
    return (
      <div className={classes.ListHistory}>
        {lists}
      </div>
    );
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
    onGetAllLists: (data) => dispatch(actions.getAllLists(data)),
    onCreateList: (data) => dispatch(actions.createList(data)),
    onDeleteList: (data) => dispatch(actions.deleteList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHistory);