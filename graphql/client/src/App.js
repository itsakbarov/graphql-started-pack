import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Author from "./components/Author";
import Books from "./components/Books";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Single from "./components/Single";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route element={<Author />} path="/" />
        <Route element={<Books />} path="/user/:id" />
        <Route element={<Single />} path="/book/:id" />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
