/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQueryInput } from 'querystring'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToGql = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems.find((item) => item.name === key)

      if (item) {
        obj[key] = { slug: { eq: queryString[key] } }
      }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems.find((item) => item.name === key)

    if (item) {
      obj[key] = queryString[key]
    }
  })

  return obj
}
