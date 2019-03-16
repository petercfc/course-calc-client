import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    selectedStudent: String!
  }
`;

export const resolvers = {};
