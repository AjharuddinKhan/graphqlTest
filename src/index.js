import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient  from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';

// Amplify.configure(config);

const client = new ApolloClient({
  uri: "https://767feyv5bna7vk22bevaalgsqe.appsync-api.ap-south-1.amazonaws.com/graphql", 
  headers: {
    'x-api-key': 'da2-qro5w3rzc5flxhvaj2kz223wcy'
  },
  cache: new InMemoryCache({
    addTypename: false
  })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
