import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/index";
import * as serviceWorker from "./serviceWorker";

//apollo
import { concat } from "apollo-link";
import { RetryLink } from "apollo-link-retry";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { resolvers, typeDefs } from "./resolvers";

//create link from retry object and http endpoint
const retry = new RetryLink({ attempts: { max: Infinity } });
const http = new HttpLink({
  uri: "https://course-credit-api.herokuapp.com/graphql/"
});
const link = concat(retry, http);

//create inmemory cache and save it to local storage
const cache = new InMemoryCache();
const storage = window.localStorage;
const waitOnCache = persistCache({ cache, storage });

// create apollo client
const client = new ApolloClient({
  cache,
  link,
  typeDefs
});

cache.writeData({
  data: {
    selectedStudent: "yo"
  }
});

//nuke store
// client.clearStore();
// client.resetStore();
// cache.writeData({ data });
//Sets cache to defaults on store reset
// client.onResetStore(() => cache.writeData({ data }));

// wait for cache to load before init
// waitOnCache.then(() => {
// render index page wrapped in apollo client
ReactDOM.render(
  <ApolloProvider client={client}>
    <Index />
  </ApolloProvider>,
  document.querySelector("#root")
);
// });

// register service worker
serviceWorker.register();
