import React, { Component } from "react";
import Main from "./views/main";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
});
class App extends Component {
  state = {};
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}
export default App;
