import React, { Component } from 'react';

class InactiveItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='inactiveItem'>
        <h4>Utterance</h4>
        <h4>> Intent Name</h4>
      </div>
    );
  }
}

export default InactiveItem;