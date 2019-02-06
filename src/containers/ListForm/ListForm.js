import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import classes from './ListForm.module.css';

class ListForm extends Component {
  state = {
    value: ''
  }

  disableButtonHandler = () => {
    return 'disabled'
  }

  createListHandler = (event) => {
    event.preventDefault();
    const data = {
      userId: this.props.userId,
      token: this.props.token,
      list: this.props.items,
      myLists: this.props.lists
    }
    this.props.onCreateList(data);
  }
  render() {

    let listForm = (
      <div className={classes.ListForm}>
        <form onSubmit={this.createListHandler}>
          <input type="hidden" name="create_list" />
          <Button onClick={this.disableButtonHandler} btnType="Success">Start New List</Button>
        </form>
      </div>
    );

    return (
      <div>
        {listForm}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listId: state.list.listId,
    token: state.auth.token,
    userId: state.auth.userId,
    lists: state.myLists.lists,
    items: state.list.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateList: (data) => dispatch(actions.createList(data)),
    onGetList: (data) => dispatch(actions.getList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);