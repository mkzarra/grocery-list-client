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

  render() {
    let items = <Spinner />;
    if (!this.props.loading) {
      items = this.props.items.map(item => {
        return (
          <Item key={item.id}
            itemName={item.name}
            price={item.price}
            organic={item.organic}
          />
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
    loading: state.item.loading
  }
}

const mapDispatchToProps = dispacth => {
  return {
    onFetchItems: () => dispacth(actions.fetchItems())
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);