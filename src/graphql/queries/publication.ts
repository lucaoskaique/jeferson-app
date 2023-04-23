// import { gql } from '@apollo/client'

// export const QUERY_PUBLICATIONS = gql`
//   query getPublications($page: Int, $pageSize: Int) {
//     publications(pagination: { page: $page, pageSize: $pageSize }) {
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

// export const QUERY_PUBLICATIONS_BY_ID = gql`
//   query getPublicationById($id: ID) {
//     publication(id: $id) {
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
