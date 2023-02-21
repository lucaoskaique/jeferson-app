import { getGaleryById } from 'graphql/generated/getGaleryById'
import { QUERY_GALERY_BY_ID } from 'graphql/queries/galery'
import PhotosTemplate, { PhotosTemplateProps } from 'templates/Photos'
import { initializeApollo } from 'utils/apollo'

export default function NewsPage(props: PhotosTemplateProps) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <PhotosTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<getGaleryById>({
    query: QUERY_GALERY_BY_ID,
    variables: {
      id: 2
    }
  })

  if (data === null) {
    return {
      props: {}
    }
  }

  return {
    props: {
      data: data.galery?.data,
      photos: data.galery?.data?.attributes?.media?.data.map((photo) => ({
        title: photo.attributes?.name,
        img: `http://localhost:1337${photo.attributes?.url}`
      }))
    }
  }
}
