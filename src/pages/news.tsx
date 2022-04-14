import NewsPageTemplate, { NewsPageTemplateProps } from 'templates/NewsPage'

import newsMock from '../templates/NewsPage/mock'

export default function NewsPage(props: NewsPageTemplateProps) {
  return <NewsPageTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      news: newsMock
    }
  }
}
