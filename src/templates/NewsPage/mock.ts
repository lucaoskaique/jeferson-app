import { QUERY_NEWS } from 'graphql/queries/news'

export const nopostsMock = {
  request: {
    query: QUERY_NEWS,
    variables: { limit: 10 }
  },
  result: {
    data: {
      posts: [],
      postsConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const postsMock = {
  request: {
    query: QUERY_NEWS,
    variables: { limit: 10 }
  },
  result: {
    data: {
      posts: [
        {
          id: '1',
          name: 'Sample News',
          slug: 'sample-News',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-News.jpg'
          },
          __typename: 'News'
        }
      ],
      postsConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_NEWS,
    variables: { limit: 10, where: {}, start: 1 }
  },
  result: {
    data: {
      posts: [
        {
          id: '2',
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      postsConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
