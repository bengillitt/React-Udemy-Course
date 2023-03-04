import { Component } from 'react';

import classes from './User.module.css';

class User extends Component{ //This is a classed based component
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => { // This is a functional component
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
