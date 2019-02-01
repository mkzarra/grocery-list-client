import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Item from '../../components/Item/Item';
import Spinner from '../../components/UI/Spinner/Spinner';

class Items extends Component {
  state = {
    items: [],
    loading: true
  }

  componentDidMount() {
    this.props.onFetchItems();
  }

  shouldComponentUpdate() {
    this.props.onFetchItems();
  }

  addToListHandler = (event) => {
    event.preventDefault();
    data = {
      'add_to_list': event.target.value,
      token: this.props.token
    }
    this.props.onAddItemToList(data)
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
            <form onSubmit={this.addToListHandler}>
              <input type="hidden" name="add_to_list" value={item.id} />
              <Button btnType="Success">Add to List</Button>
            </form>
          </div>
        );
      });
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items,
    loading: state.item.loading,
    listItems: state.list.items,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispacth => {
  return {
    onFetchItems: () => dispacth(actions.fetchItems()),
    onShowItem: (id, user) => dispacth(actions.showItem(id, user)),
    onUpdateItem: (data) => dispacth(actions.updateItem(data)),
    onAddItemToList = (data) => dispatch(actions.addItemToList(data))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);