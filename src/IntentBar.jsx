import React, { Component } from 'react';

class IntentBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='intentBar'>
          <select name='intentBar'>
            <option value="" disabled>Please Select</option>
            <option>Intent Name (full)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
      </div>
    );
  }
}

export default IntentBar;