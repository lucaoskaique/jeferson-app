// import { getAudios } from 'graphql/generated/getAudios'
import { getGaleries } from 'graphql/generated/getGaleries'
// import { getPublications } from 'graphql/generated/getPublications'
import { getVideos } from 'graphql/generated/getVideos'
// import { QUERY_AUDIOS } from 'graphql/queries/audio'
import { QUERY_GALERIES } from 'graphql/queries/galery'
// import { QUERY_PUBLICATIONS } from 'graphql/queries/publication'
import { QUERY_VIDEOS } from 'graphql/queries/video'
import MediasTemplate, { MediasTemplateProps } from 'templates/Medias'
import { initializeApollo } from 'utils/apollo'

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

  const { data: videosProps } = await apolloClient.query<getVideos>({
    query: QUERY_VIDEOS,
    variables: {
      page: 1,
      pageSize: 3
    }
  })

  // const { data: audiosProps } = await apolloClient.query<getAudios>({
  //   query: QUERY_AUDIOS,
  //   variables: {
  //     page: 1,
  //     pageSize: 3
  //   }
  // })

  // const { data: publicationsProps } = await apolloClient.query<getPublications>(
  //   {
  //     query: QUERY_PUBLICATIONS,
  //     variables: {
  //       page: 1,
  //       pageSize: 3
  //     }
  //   }
  // )

  return {
    props: {
      photos: galeriesProps.galeries?.data.map((galery) => ({
        title: galery.attributes?.title,
        img: `${galery.attributes?.media?.data[0]?.attributes?.url}`
      })),
      videos: videosProps.videos?.data.map((video) => ({
        title: video.attributes?.title,
        img: `${video.attributes?.image.data?.attributes?.url}`
      })),
      audios: [
        {
          title: 'Foto 1',
          img: '/img/audio-vector.jpg'
        },
        {
          title: 'Foto 2',
          img: '/img/audio-vector.jpg'
        },
        {
          title: 'Foto 3',
          img: '/img/audio-vector.jpg'
        },
        {
          title: 'Foto 4',
          img: '/img/audio-vector.jpg'
        }
      ],
      // audios: audiosProps.audios?.data.map((audio) => ({
      //   title: audio.attributes?.title,
      //   img: `http://localhost:1337${audio.attributes?.file.data?.attributes?.url}`
      // })),
      publications: [
        {
          title: 'Foto 1',
          img: 'https://picsum.photos/id/10/400/300'
        },
        {
          title: 'Foto 2',
          img: 'https://picsum.photos/id/11/400/600'
        },
        {
          title: 'Foto 3',
          img: 'https://picsum.photos/id/12/400/500'
        },
        {
          title: 'Foto 4',
          img: 'https://picsum.photos/id/13/400/400'
        }
      ]
      // publications: publicationsProps.publications?.data.map((publication) => ({
      //   title: publication.attributes?.title,
      //   img: `http://localhost:1337${publication.attributes?.file.data?.attributes?.url}`
      // }))
    }
  }
}
