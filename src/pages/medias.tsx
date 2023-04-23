// import { getAudios } from 'graphql/generated/getAudios'
import { getGaleries } from 'graphql/generated/getGaleries'
// import { getPublications } from 'graphql/generated/getPublications'
// import { QUERY_AUDIOS } from 'graphql/queries/audio'
import { QUERY_GALERIES } from 'graphql/queries/galery'
// import { QUERY_PUBLICATIONS } from 'graphql/queries/publication'
import MediasTemplate, { MediasTemplateProps } from 'templates/Medias'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'

export default function MediasPage(props: MediasTemplateProps) {
  return <MediasTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data: galeriesProps } = await apolloClient.query<getGaleries>({
    query: QUERY_GALERIES,
    variables: {
      page: 1,
      pageSize: 3
    }
  })

  return {
    props: {
      photos: galeriesProps.galeries?.data.map((galery) => ({
        id: galery?.id,
        title: galery.attributes?.title,
        img: `${getImageUrl(
          galery.attributes?.media?.data[0]?.attributes?.url
        )}`
      }))
    }
  }
}
