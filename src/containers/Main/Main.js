import React, { Component } from 'react';

import classes from './Main.module.css';

class Main extends Component {
  state = {

  }
  render() {
    return (
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
}

export default Main;