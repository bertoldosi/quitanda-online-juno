import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rpfsq71fpf01yw5p6vdlzi/master",
  cache: new InMemoryCache(),
});
