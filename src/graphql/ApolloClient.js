// Package dependencies
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';

import Environment from '../lib/environment'

const httpLink = createHttpLink({
    uri: `${Environment.get('API_GATEWAY')}/graphql`
});

//create a webSocket connection to communicate with the server viceversa.
const wsLink = new WebSocketLink({
    uri: `${Environment.get('DEEPSTREAM')}/graphql`,
    options: {
        reconnect: true
    }
});

const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);

// Pass your GraphQL endpoint to uri
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});
