import React, { Component } from 'react';

class Response extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='response'>
        <h4>Response</h4>
        <div className='responseContainer'>
          <p> 
            Pellentesque et odio est. Duis non leo at odio vehicula pulvinar a aliquet nunc. 
            Cras erat nisi, euismod quis metus sollicitudin, egestas fringilla elit. 
          </p>
        </div>
      </div>
    );
  }
}

export default Response;