import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { getNews, getNewsVariables } from 'graphql/generated/getNews'

export const QUERY_NEWS = gql`
  query getNews(
    $page: Int
    $pageSize: Int
    $start: Int
    $limit: Int
    $category: PostFiltersInput
  ) {
    posts(
      pagination: {
        page: $page
        pageSize: $pageSize
        start: $start
        limit: $limit
      }
      filters: $category
    ) {
      data {
        id
        attributes {
          title
          slug
          short_description
          content
          categories {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
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
export const QUERY_NEWS_BY_ID = gql`
  query getNewsById($id: ID) {
    post(id: $id) {
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
    }
  }
`
export const QUERY_NEWS_BY_SLUG = gql`
  query getNewsBySlug($slug: String) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          short_description
          content
          categories {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
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
    }
  }
`
export function useQueryNews(
  options?: QueryHookOptions<getNews, getNewsVariables>
) {
  return useQuery<getNews, getNewsVariables>(QUERY_NEWS, options)
}
