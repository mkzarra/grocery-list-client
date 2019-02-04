import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List/List';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import classes from './ListHistory.module.css';

class ListHistory extends Component {
  state = {
    lists: [],
    error: false,
    loading: false,
    activeList: {}
  }

  removeListHandler = (event) => {
    event.preventDefault();
    const data = {
      listId: event.target.value,
      token: this.props.token
    }
    this.props.onRemoveListList(data);
  }

    render() {
    let lists = <Spinner />;
    if (!this.props.loading) {
      lists = this.props.lists.map(list => {
        return (
          <div>
            <List key={list.id}
              id={list.id}
              listName={list.name}
              price={list.price}
              organic={list.organic}
            />
            <form onSubmit={this.removeListHandler}>
              <input type="hidden" value={list.id} />
              <Button btnType="Danger" />
            </form>
          </div>
        );
      });
    }

    return (
      <div className={classes.List}>
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
    onCreateList: (data) => dispatch(actions.createList(data)),
    onDeleteList: (data) => dispatch(actions.deleteList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHistory);