import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query getInfo {
    homePage {
      data {
        id
        attributes {
          menu {
            socialLinks {
              title
              url
            }
          }
          sectionAbout {
            title
            description
            media {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          proposals {
            title
            content
          }
        }
      }
    }
  }
`
