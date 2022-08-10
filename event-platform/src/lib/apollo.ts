import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.hygraph.com/v2/cl4yy00cj0dyy01t686rf7d2x/master',
    cache:new InMemoryCache()
})