import React, { Component } from 'react';
import ActiveItem from './ActiveItem.jsx';
import InactiveItem from './InactiveItem.jsx';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class MappingLog extends Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Intents: React.PropTypes.object
    }).isRequired,
  }


  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1
    }
  }

  render() {
    console.log("PROPS FROM ML", this.props.data);
    let utterances = this.props.utterances;
    let utterancesRendered = utterances.map((utterance) => {
      return (
       <InactiveItem utterance={utterance} />
      ); 
    })
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>);
    }
    return (
      <div>
        <div className='container'>
          <h3>Mapping Log: OrgName>AgentName</h3>
          <ActiveItem focusUtterance={this.props.utterances[0]}
                      intents={this.props.data.intents}  
          />
        </div>
        {utterancesRendered}
      </div>
    );
  }
}

const IntentsQuery = gql`
  query IntentsQuery {
    intents {
      name
    }
  }
`;

const MappingLogWithData = graphql(IntentsQuery)(MappingLog);


export default MappingLogWithData;