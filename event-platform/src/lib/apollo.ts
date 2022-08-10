import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.hygraph.com/v2/cl6icweav4o8o01uq8vwdbbqn/master',
    cache:new InMemoryCache()
})