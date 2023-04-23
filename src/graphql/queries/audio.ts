// import { gql } from '@apollo/client'

// export const QUERY_AUDIOS = gql`
//   query getAudios($page: Int, $pageSize: Int) {
//     audios(pagination: { page: $page, pageSize: $pageSize }) {
//       data {
//         id
//         attributes {
//           title
//           file {
//             data {
//               attributes {
//                 name
//                 url
//               }
//             }
//           }
//           createdAt
//         }
//       }
//     }
//   }
// `

// export const QUERY_AUDIO_BY_ID = gql`
//   query getAudioById($id: ID) {
//     audio(id: $id) {
//       data {
//         id
//         attributes {
//           title
//           file {
//             data {
//               attributes {
//                 url
//                 name
//               }
//             }
//           }
//           createdAt
//         }
//       }
//     }
//   }
// `
