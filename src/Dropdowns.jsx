import React, { Component } from 'react';

class Dropdowns extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='dropdowns'>
        <div className='organization'>
          <h3>Organization</h3>
          <select name="organization">
            <option value="" disabled>Please Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className='agent'>
          <h3>Agent</h3>
            <select name="agent">
              <option value="" disabled>Please Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
        </div> 
      </div>
    );
  }
}

export default Dropdowns;