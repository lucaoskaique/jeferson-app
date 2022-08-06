import { gql } from '@apollo/client'

export const QUERY_NEWS = gql`
  query getNews($page: Int, $pageSize: Int) {
    posts(pagination: { page: $page, pageSize: $pageSize }) {
      data {
        id
        attributes {
          title
          slug
          short_description
          content
          cover {
            data {
              attributes {
                name
                url
              }
            }
          }
          publishedAt
        }
      }
      meta {
        pagination {
          total
          pageSize
          page
        }
      }
    }
  }
`
