import React, { Component } from 'react';

class IntentDescription extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='intentDescription'>
        <h4>Intent Description</h4>
        <div className='descriptionContainer'>
          <p> 
            Mauris mattis magna eget varius dapibus. Morbi placerat, nibh nec aliquet laoreet, 
            lorem nunc pretium ligula, quis rutrum orci enim ac ex. Sed ultrices mattis magna, 
            non vehicula mi.
          </p>
        </div>
      </div>
    );
  }
}

export default IntentDescription;