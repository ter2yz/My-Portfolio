import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/jszixocm2sp2/",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API}`,
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});

export const GQLProvider = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}