import React, { Component } from 'react';
import FocusUtterance from './FocusUtterance.jsx';
import IntentBar from './IntentBar.jsx';
import IntentDescription from './IntentDescription.jsx';
import Response from './Response.jsx';
import OtherUtterances from './OtherUtterances.jsx';
import Organizations from './Organizations.jsx';
import Tags from './Tags.jsx';


class ActiveItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.activeItem}</p>
        <FocusUtterance />
        <IntentDescription />
        <Response />
        <OtherUtterances />
        <Organizations />
        <Tags /> 
      </div>
    );
  }
}

export default ActiveItem;