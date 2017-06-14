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
      activeItem: 0
    }
  }

  render() {
    return (
      <div>
        <FocusUtterance />
        <IntentBar />
        <div className="col-md-8">
          <IntentDescription />
          <Response />
          <OtherUtterances />
        </div>
        <div className="col-md-4">
          <Organizations />
          <h4>Locale  XXXX</h4>
          <Tags /> 
          <button className='confirm'>Confirm</button>
        </div>
      </div>
    );
  }
}

export default ActiveItem;