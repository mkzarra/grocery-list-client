import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import PlusSign from '../../components/UI/PlusSign/PlusSign'
import Item from '../../components/Item/Item';
import ItemForm from '../ItemForm/ItemForm';
import Spinner from '../../components/UI/Spinner/Spinner';

class Items extends Component {
  state = {
    items: [],
    loading: true,
    showForm: false
  }

  componentDidMount() {
    this.props.onFetchItems();
  }

  addToListHandler = (event) => {
    event.preventDefault();
    const data = {
      itemId: event.target.value,
      token: this.props.token
    }
    console.log(event.target);
    console.log(data);
    this.props.onAddItemToList(data)
    if (!this.props.lists) {
      this.props.onCreateList({
        list: [{ ...data.itemId, ...this.props.userId }],
        ...this.props.token
      });
    }
  }

  toggleDisplayHandler = () => {
    console.log(this.props.visible);
    this.props.onToggleFormDisplay(this.props.token !== null, !this.props.visible);
  }

  render() {
    let items = <Spinner />;
    if (!this.props.loading && this.props.items === null) {
      items = null;
    }
    if (this.props.items.length > 0 && !this.props.loading) {
      items = this.props.items.map(item => {
        return (
            <Item key={item.id}
              id={item.id}
              itemName={item.name}
              price={+item.price}
              organic={item.organic}
              submit={this.addToListHandler}
            />
        );
      });
    }

    return (
      <div>
        {items}
        <PlusSign showForm={!this.props.visible} toggleDisplay={this.toggleDisplayHandler} />
        <ItemForm visible={this.toggleDisplayHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items,
    loading: state.item.loading,
    listItems: state.list.items,
    userId: state.auth.userId,
    token: state.auth.token,
    visible: state.item.showForm,
    lists: state.myLists.lists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchItems: (data) => dispatch(actions.fetchItems(data)),
    onShowItem: (data) => dispatch(actions.showItem(data)),
    onUpdateItem: (data) => dispatch(actions.updateItem(data)),
    onAddItemToList: (data) => dispatch(actions.addToList(data)),
    onToggleFormDisplay: (token, visible) => dispatch(actions.toggleFormDisplay(token, visible)),
    onCreateList: (data) => dispatch(actions.createList(data))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);