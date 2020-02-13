import gql from 'graphql-tag'

export const USER_FACE_IDENTIFIER = gql `
  mutation userFaceIdentifier($data: [ObservationInput]) {
    userFaceIdentifier(data: $data) {
      neutral
      happy
      sad
      angry 
    }
  }`
;

export const UPLOAD_USER = gql `
  mutation uploadUser($data: UserInput!) {
    uploadUser(data: $data) {
      token
    }
  }
`;

export const EMOTIONS = gql `
  query emotions {
    emotions {
      netural
      happy
      angry
      sad
    }
  }
`;

