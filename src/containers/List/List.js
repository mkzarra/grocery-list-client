import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import classes from './List.module.css';

class List extends Component {
removeListHandler = (event) => {
  event.preventDefault();
  const data = {
    listId: this.props.listId,
    token: this.props.token
  }
  console.log(this.props.listId);
  this.props.onDeleteList(data);
}
  
  removeItemHandler = (event) => {
    event.preventDefault();
    const data = {
      itemId: event.target.value,
      token: this.props.token
    }
    this.props.onRemoveListItem(data);
  }

  render() {
    console.log(this.props.activeId)
    let items = <Spinner />;
    if (!this.props.loading) {
      items = this.props.items.map(item => {        
        return (
          <div key={item.id}>
            <Item
              id={item.id}
              itemName={item.name}
              price={item.price}
              organic={item.organic}
              remove={this.removeItemHandler}
              activeId={this.props.activeId}
              onList={true}
            />
          </div>
        );
      });
    }

    if (!this.props.items) {
      items = null;
    }

    return (
      <div className={classes.List}>
        {items}
        <form onSubmit={this.removeListHandler}>
          <input type="hidden" name="delete_list" />
          <Button btnType="Danger" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.list.items,
    error: state.list.error,
    loading: state.list.loading,
    active: state.list.active,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetListItem: (data) => dispatch(actions.getListItem(data)),
    onDeleteList: (data) => dispatch(actions.deleteList(data)),
    onRemoveListItem: (data) => dispatch(actions.removeListItem(data)),
    onActivateList: (data) => dispatch(actions.activateList(data)),
    onDeactivateList: (data) => dispatch(actions.deactivateList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);