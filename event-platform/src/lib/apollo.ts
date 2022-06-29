import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-us-east-1.graphcms.com/v2/cl4yy5xi90ew801rqcdj797tk/master',
    cache:new InMemoryCache()
})