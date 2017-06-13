import React, {Component} from 'react';
import Dropdowns from './Dropdowns.jsx';
import Header from './Header.jsx';
import MappingLog from './MappingLog.jsx';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
  
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Utterance: React.PropTypes.object,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state =
      {
        currentUser: "Username"
      };
  }


  // const AppWithData = graphql(UtteranceQuery)(App);

  render() {
    console.log("RENDERING");
    console.log(this.props.data);
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    return (
      <div>
        <h2>Hello {this.props.data.utterances[0].text} </h2>
        <Header currentUser={ this.state.currentUser } />
        <Dropdowns />
        <MappingLog // utterance={ this.props.data.Utterance.text } 
        /> 
      </div>
    );
  }
}

// App.propTypes = {
//   data: React.PropTypes.shape({
//     loading: React.PropTypes.bool,
//     error: React.PropTypes.object,
//     Trainer: React.PropTypes.object,
//   }).isRequired,
// }

const UtteranceQuery = gql`
  query UtteranceQuery {
    utterances(id: 1) {
      domainEntities
      text
      intentID
    }
  }
`;

// const TrainerQuery = gql`query TrainerQuery {
//     Trainer(name: "Shawn Yates") {
//       name
//     }
//   }`

const AppWithData = graphql(UtteranceQuery)(App);

// const AppWithData = graphql(TrainerQuery)(App);


export default AppWithData;

// export default App;