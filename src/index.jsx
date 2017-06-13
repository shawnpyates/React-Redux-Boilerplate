require('./styles/app.scss')

import React from 'react';
import ReactDOM from "react-dom";
import App from './App.jsx';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3030/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

// const client = new ApolloClient();



ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    document.getElementById('root')
    );

    
