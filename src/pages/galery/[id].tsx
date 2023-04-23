import {
  getGaleries,
  getGaleriesVariables
} from 'graphql/generated/getGaleries'
import {
  getGaleryById,
  getGaleryByIdVariables
} from 'graphql/generated/getGaleryById'
import { QUERY_GALERIES, QUERY_GALERY_BY_ID } from 'graphql/queries/galery'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Galery, { GaleryTemplateProps } from 'templates/Galery'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
const apolloClient = initializeApollo()

export default function Index(props: GaleryTemplateProps) {
  const router = useRouter()
  // se rota não tiver sido gerada ainda pode mostrar o que quisermos
  if (router.isFallback) return null
  return <Galery {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<getGaleries, getGaleriesVariables>({
    query: QUERY_GALERIES,
    variables: {
      page: 1,
      pageSize: 5
    }
  })

  const paths = data?.galeries?.data.map((galery) => ({
    params: { id: galery?.id }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    getGaleryById,
    getGaleryByIdVariables
  >({
    query: QUERY_GALERY_BY_ID,
    variables: {
      id: `${params?.id}`
    },
    fetchPolicy: 'no-cache'
  })

  if (!data.galery?.data) {
    return {
      notFound: true
    }
  }

  const photos = data.galery?.data?.attributes?.media?.data.map((photo) => ({
    id: photo?.id,
    title: photo?.attributes?.name,
    img: `${getImageUrl(photo?.attributes?.url)}`
  }))

  return {
    revalidate: 60 * 60,
    props: {
      title: data.galery?.data?.attributes?.title,
      photos: photos
    }
  }
}
