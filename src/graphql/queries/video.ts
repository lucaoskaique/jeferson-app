// import { gql } from '@apollo/client'

// export const QUERY_VIDEOS = gql`
//   query getVideos($page: Int, $pageSize: Int) {
//     videos(pagination: { page: $page, pageSize: $pageSize }) {
//       data {
//         id
//         attributes {
//           title
//           link
//           image {
//             data {
//               id
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

// export const QUERY_VIDEO_BY_ID = gql`
//   query getVideoById($id: ID) {
//     video(id: $id) {
//       data {
//         id
//         attributes {
//           title
//           image {
//             data {
//               attributes {
//                 name
//                 url
//               }
//             }
//           }
//           link
//           createdAt
//         }
//       }
//     }
//   }
// `
