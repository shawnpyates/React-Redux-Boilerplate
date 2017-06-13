import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <span>{this.props.currentUser}</span>
      </header>
    );
  }
}

export default Header;