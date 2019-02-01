import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './List.module.css';

class List extends Component {
  state = {
    items: [],
    error: false,
    loading: false,
    active: false
  }

  removeItemHandler = (event) => {
    event.preventDefault();
    const data = {
      'remove_from_list': event.target.value,
      token: this.props.token
    }
    this.props.onRemoveListItem(data)
  }

  render() {
    let items = <Spinner />;
    if (!this.props.loading) {
      items = this.props.items.map(item => {
        return (
          <div>
            <Item key={item.id}
              id={props.id}
              itemName={item.name}
              price={item.price}
              organic={item.organic}
            />
            <form onSubmit={this.removeItemHandler}>
              <input type="hidden" value={item.id} />
              <Button btnType="Danger" />
            </form>
          </div>
        );
      });
    }

    return (
      <div className={classes.List}>
        {items}
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
    onRemoveListItem: (data) => dispatch(actions.removeListItem(data)),
    onActivateList: (data) => dispatch(actions.activateList(data)),
    onDeactivateList: (data) => dispatch(actions.deactivateList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);