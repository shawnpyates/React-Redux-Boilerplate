import React, { Component } from 'react';

class Tags extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='tags'>
        <h4>Tags</h4>
        <div className='tagsContainer'>
        </div>
      </div>
    );
  }
}

export default Tags;