import gql from 'graphql-tag'

export const USER_FACE_IDENTIFIER = gql `
  mutation userFaceIdentifier($data: [ObservationInput!]!) {
    userFaceIdentifier(data: $data) {
      _id
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
      userId
      createdAt
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

export const EMOTIONS_QUERY = gql `
  query EmotionQuery {
    emotions {
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
    }
  }
`;

export const FACE_LOGIN = gql `
  query faceLogIn ($data: [Float]) {
    faceLogIn(data: $data) {
      token
    }
  }
`;

export const FACE_DETECTING_SUBSCRIPTIOM = gql `
  subscription FaceDetecting {
    faceDetected {
      _id
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
      userId
      createdAt
    }
  }
`;

