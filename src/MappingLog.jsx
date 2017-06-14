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
        <div className='container'>
          <h4>{this.props.utterance}</h4>
          <ActiveItem />
        </div>
        <InactiveItem />
      </div>
    );
  }
}

export default MappingLog;