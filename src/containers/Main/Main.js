import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Main.module.css';
import ListForm from '../ListForm/ListForm';

class Main extends Component {
  render() {
    let main = (
      <div>
        <div className={classes.Main}>
          <ListForm />
        </div>
      </div>
    )

    if (!this.props.token) {
      main = (
        <div>
          <div className={classes.Main}>
            <h3>Welcome!</h3>
            <p>Know how much you're spending before you pay with Grocery Helper</p>
          </div>
          <div className={classes.Main}>
            <h3>How it works...</h3>
            <p>We've estimated prices of some common grocery items so you can see your grocery bill. All you have to do add items to your list, and we'll show you how much you should expect to spend.</p>
          </div>
          <div className={classes.Main}>
            <h3>What to do if you can't find what you're looking for...</h3>
            <p>If we don't have it, you can create it. Please try to give as much information as possible when adding an item.</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        {main}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Main);