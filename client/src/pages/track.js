import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Layout, QueryResult} from '../components';

const Track = ({trackId}) => {
  return <Layout></Layout>;
};

export const GET_TRACK = gql`
    // our query goes here
    query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}
`;
export default Track;
