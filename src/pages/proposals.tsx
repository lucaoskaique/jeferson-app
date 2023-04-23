/* eslint-disable @typescript-eslint/no-explicit-any */
import { getInfo } from 'graphql/generated/getInfo'
import { QUERY_HOME } from 'graphql/queries/home'
import ProposalsTemplate from 'templates/Proposals'
import { initializeApollo } from 'utils/apollo'

export default function ContactPage(props: any) {
  return <ProposalsTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<getInfo>({
    query: QUERY_HOME,
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60,
    props: {
      proposal: {
        title: data.homePage?.data?.attributes?.proposals?.title,
        content: data.homePage?.data?.attributes?.proposals?.content
      }
    }
  }
}
