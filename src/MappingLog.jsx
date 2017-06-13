import React, { Component } from 'react';
import ActiveItem from './ActiveItem.jsx';
import InactiveItem from './InactiveItem.jsx';

class MappingLog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.activeItem}</span>
        <ActiveItem />
      </div>
    );
  }
}

export default MappingLog;