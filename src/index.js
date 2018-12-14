import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './index.css';
import * as serviceWorker from './serviceWorker';

import Create from './Create';
import Update from './Update'

const client = new ApolloClient({
  uri: "https://8v9r9kpn7q.lp.gql.zone/graphql"
});

const App = () =>
  <ApolloProvider client={client}>
    <div>
      <h2>Contruyendo componentes mutables <span role="img" aria-label="Hola">🚀</span></h2>
      <Create />
      <Update />
    </div>
  </ApolloProvider>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
