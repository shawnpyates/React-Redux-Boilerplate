import React, { Component } from 'react';

class FocusUtterance extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.focusUtterance.text}</h4>
      </div>
    );
  }
}

export default FocusUtterance;