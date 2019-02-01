import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  state = {
    items: [],
    error: false,
    loading: false
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);