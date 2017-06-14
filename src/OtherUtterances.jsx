import React, { Component } from 'react';

class OtherUtterances extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='others'>
        <h4>Utterances<span className='viewAll'>VIEW ALL</span></h4>
        <div className='othersContainer'>
          <h4>Here's a generic utterance.</h4>
        </div>
      </div>
    );
  }
}

export default OtherUtterances;