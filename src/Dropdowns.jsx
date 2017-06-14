import React, { Component } from 'react';

class Dropdowns extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='dropdowns'>
        <div className='organization'>
          <h4>Organization</h4>
          <select name="organization">
            <option value="" disabled>Please Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className='agent'>
          <h4>Agent</h4>
            <select name="agent">
              <option value="" disabled>Please Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
        </div> 
        <button>
          View Log
        </button>
      </div>
    );
  }
}

export default Dropdowns;