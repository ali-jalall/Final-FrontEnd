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
  }
`;

export const UPLOAD_USER = gql`
  mutation uploadUser($data: UserInput!){
    uploadUser(data: $data){
        firstName
        lastName
        age
        gender
        photoUrl
        createdAt
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

export const SIGN_IN_ADMIN = gql`
  mutation signInAdmin($email: String!, $password: String!){
    signInAdmin(email: $email, password: $password){
        token
    }
  }
`;

export const FORGET_PASSWORD = gql`
  mutation forgetPassword($email: String!){
    forgetPassword(email: $email)
  }
`;

export const CHECK_TOKEN = gql`
  mutation checkToken($token: String!){
    checkToken(token: $token){
        token
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $password: String!){
    resetPassword(token: $token, password: $password){
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

