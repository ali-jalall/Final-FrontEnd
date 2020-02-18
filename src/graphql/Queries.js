import gql from 'graphql-tag'

const GET_EMOTIONS_CSV_REPORT = gql`
  query{
    getEmotionsCsvReport
  }
`;
// this.$apollo.query({
//     query: GET_EMOTIONS_CSV_REPORT
// }).then(data => {
//
// })

const GET_ALL_USERS = gql`
  query{
    getAllUsers{
      firstName
      lastName
      age
      gender
      photoUrl
      createdAt
    }
  }
`;
// this.$apollo.query({
//     query: GET_ALL_USERS
// }).then(data => {
//
// })

const GET_PERIOD_EMOTIONS = gql`
  query getPeriodEmotions ($startDate: String!, $endDate: String!) {
    getPeriodEmotions (startDate: $startDate, endDate: $endDate) {
      averages
      status{
        maxValue
          minValue
          startAtMax
          endAtMax
          startAtMin
          endAtMin
        }
        timeStamps
      }
  }
`;
// this.$apollo.query({
//     query: GET_PERIOD_EMOTIONS,
//     variables:{
//         startDate:"1581612069722", //this is an Example
//         endDate:Date.now().toString()//this as in Example variable
//     }
//
// });

const FACE_LOG_IN = gql`
  query faceLogIn($data: [Float!]!){
    faceLogIn(data: $data){
      token
    }
  }
`;
// this.$apollo.query({
//     query: FACE_LOG_IN,
//     variables:{
//         data: [-0.1253017783164978,0.1293133795261383,0.08123324066400528,-0.10120350122451782,-0.08149968832731247,-0.03011895716190338,-0.07617609202861786,-0.05422292649745941,0.10126001387834549,-0.039863958954811096,0.2637506127357483,-0.07512854784727097,-0.22529397904872894,0.0016915351152420044,-0.10386288911104202,0.1904381960630417,-0.21411532163619995,-0.07947137951850891,-0.013437699526548386,-0.05456734448671341,0.12502723932266235,0.03310050815343857,-0.006969854701310396,0.07760012894868851,-0.08966372907161713,-0.243153378367424,-0.04383590444922447,-0.08267579972743988,0.034122616052627563,-0.060883112251758575,-0.001410222495906055,-0.0036711804568767548,-0.18693947792053223,-0.017215237021446228,0.022731296718120575,-0.0021763406693935394,0.014797776937484741,-0.08594730496406555,0.16360825300216675,-0.039066560566425323,-0.19122745096683502,0.02507898211479187,0.061788029968738556,0.2852310836315155,0.1611226201057434,0.04598564654588699,0.010789971798658371,-0.10559535771608353,0.14004719257354736,-0.21516039967536926,-0.001711646094918251,0.16615019738674164,0.03866863250732422,0.041770197451114655,0.011810638010501862,-0.17425844073295593,0.03204459324479103,0.14681367576122284,-0.1598973572254181,0.03672686964273453,0.05327281355857849,0.006975872442126274,0.02808186784386635,-0.17382104694843292,0.17630130052566528,0.059259671717882156,-0.14904581010341644,-0.1789744794368744,0.10082001239061356,-0.09692904353141785,-0.06637922674417496,0.09018736332654953,-0.17912356555461884,-0.19281333684921265,-0.2952234447002411,-0.0021780170500278473,0.3667309284210205,0.15585535764694214,-0.15178577601909637,0.06847981363534927,-0.034140098839998245,0.021294493228197098,0.08170069009065628,0.09133207052946091,-0.041711680591106415,0.059944357722997665,-0.07900673896074295,0.012355215847492218,0.1869310587644577,-0.05232444033026695,-0.03896084800362587,0.2211402803659439,-0.032176416367292404,0.0031901830807328224,-0.024029139429330826,0.07232583314180374,-0.11248058080673218,0.031358346343040466,-0.13812966644763947,-0.007224027067422867,-0.026093406602740288,-0.038010939955711365,0.017717301845550537,0.132140651345253,-0.19379758834838867,0.12856091558933258,-0.016292821615934372,0.0528741255402565,-0.09235196560621262,0.04829614982008934,-0.06746974587440491,0.018878448754549026,0.12696073949337006,-0.19456684589385986,0.19564981758594513,0.18419435620307922,0.0894942358136177,0.10539743304252625,0.10701487958431244,0.0377429760992527,-0.03257817029953003,-0.011721685528755188,-0.15988664329051971,-0.06643440574407578,0.0661415383219719,-0.04442629963159561,0.11208561062812805,0.017798028886318207]
//     }
// }).then(data => {})

const GET_EMOTION_AVERAGES_FOR_LAST_24_HOURS = gql`
  query {
    getEmotionAveragesForLast24Hours{
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
// this.$apollo.query({
//     query: GET_EMOTION_AVERAGES_FOR_LAST_24_HOURS
// }).then(data => {})

const GET_ANALYTIC_EMOTION = gql`
  query {
    getAnalyticEmotion{
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

const verify = gql`
  query verfiy {
    verfiy
  } 
`;

// this.$apollo.query({
//     query: GET_ANALYTIC_EMOTION
// });

export {
  GET_EMOTIONS_CSV_REPORT,
  GET_ALL_USERS,
  GET_PERIOD_EMOTIONS,
  FACE_LOG_IN,
  GET_EMOTION_AVERAGES_FOR_LAST_24_HOURS,
  GET_ANALYTIC_EMOTION,
  verify
};