import React, {Component} from 'react';
import Dropdowns from './Dropdowns.jsx';
import Header from './Header.jsx';
import MappingLog from './MappingLog.jsx';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';


// // Initialize GraphQL queries or mutations with the `gql` tag
// const MyQuery = gql`query { todos { text } }`;
// const MyMutation = gql`mutation { addTodo(text: "Test 123") { id } }`;


// // We then can use `graphql` to pass the query results returned by MyQuery
// // to MyComponent as a prop (and update them as the results change)
// const SubcomponentWithData = graphql(MyQuery)(Subcomponent);


// // Or, we can bind the execution of MyMutation to a prop
// const MyComponentWithMutation = graphql(MyMutation)(MyComponent);


class App extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        currentUser: "Username"
      };
  }

 

  // const AppWithData = graphql(UtteranceQuery)(App);

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Dropdowns />
        <MappingLog // utterance={ this.props.data.Utterance.text } 
        /> 
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Utterance: React.PropTypes.object,
  }).isRequired
}

const UtteranceQuery = gql`
  query UtteranceQuery {
    Utterance(id: 1) {
      domainEntities
      text
      intentID
    }
  }
`;

const AppWithData = graphql(UtteranceQuery)(App);


export default AppWithData;