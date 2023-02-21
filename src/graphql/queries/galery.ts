import { gql } from '@apollo/client'

export const QUERY_GALERIES = gql`
  query getGaleries($page: Int, $pageSize: Int) {
    galeries(pagination: { page: $page, pageSize: $pageSize }) {
      data {
        id
        attributes {
          title
          media {
            data {
              id
              attributes {
                name
                url
                createdAt
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_GALERY_BY_ID = gql`
  query getGaleryById($id: ID) {
    galery(id: $id) {
      data {
        id
        attributes {
          title
          media {
            data {
              id
              attributes {
                name
                url
                createdAt
              }
            }
          }
        }
      }
    }
  }
`
