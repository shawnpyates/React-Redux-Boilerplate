import React, { Component } from 'react';

class IntentBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS FROM IB", this.props.intents);
    let intents = this.props.intents;
    let intentsRendered = intents.map((intent) => {
      return (
        <option>{intent.name}</option>
      );
    });
    return (
      <div className='intentBar'>
          <select name='intentBar'>
            <option value="" disabled>Please Select</option>
            {intentsRendered}
          </select>
      </div>
    );
  }
}

export default IntentBar;