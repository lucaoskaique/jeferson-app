import { parseQueryStringToFilter, parseQueryStringToGql } from '.'

const filterItems = [
  {
    name: 'categories',
    type: 'radio'
  }
]

const queryString = {
  categories: 'educacao',
  sort: 'publishedAt:asc'
}

describe('parseQueryStringToGql', () => {
  it('should parse query string to filter format', () => {
    const parsedQuery = parseQueryStringToGql({
      queryString: queryString,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      categories: { slug: { eq: 'educacao' } }
    })
  })
})

describe('parseQueryStringToUrl', () => {
  it('should parse query string to url format', () => {
    const parsedQuery = parseQueryStringToFilter({
      queryString: queryString,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      categories: 'educacao'
    })
  })
})
