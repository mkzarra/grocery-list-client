import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import PlusSign from '../../components/UI/PlusSign/PlusSign'
import Item from '../../components/Item/Item';
import ItemForm from '../ItemForm/ItemForm';
import Spinner from '../../components/UI/Spinner/Spinner';

class Items extends Component {
  state = {
    lists: []
  }
  
  componentDidMount() {
    this.props.onFetchItems();
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
    console.log(this.props.lists.length)
    // let listId = this.props.lists.length === 0 ? null : this.props.lists[0].id
    if (this.props.items.length > 0 && !this.props.loading) {
      items = this.props.items.map(item => {
        return (
          <Item key={item.id}
            id={item.id}
            itemName={item.name}
            price={+item.price}
            organic={item.organic}
            submit={this.addToListHandler}
            token={this.props.token}
            userId={this.props.userId}
            // listId={listId}
            addToList={this.props.onAddItemToList}
          />
        );
      });
    }

    if (!this.props.token || !this.props.lists) {
      items = <Redirect to="/" />;
    }

    let plusSign = this.props.token
      ? <PlusSign
        showForm={!this.props.visible}
        toggleDisplay={this.toggleDisplayHandler} />
      : null;

    let itemForm = this.props.token
      ? <ItemForm visible={this.toggleDisplayHandler} />
      : null;
      
    return (
      <div>
        {items}
        {plusSign}
        {itemForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.myLists.lists,
    items: state.item.items,
    loading: state.item.loading,
    listItems: state.list.items,
    userId: state.auth.userId,
    token: state.auth.token,
    visible: state.item.showForm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchItems: (data) => dispatch(actions.fetchItems(data)),
    onGetAllLists: (data) => dispatch(actions.getAllLists(data)),
    onShowItem: (data) => dispatch(actions.showItem(data)),
    onUpdateItem: (data) => dispatch(actions.updateItem(data)),
    onAddItemToList: (data) => dispatch(actions.addToList(data)),
    onToggleFormDisplay: (token, visible) => dispatch(actions.toggleFormDisplay(token, visible)),
    onCreateList: (data) => dispatch(actions.createList(data))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);