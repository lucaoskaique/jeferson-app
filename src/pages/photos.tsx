import PhotosTemplate, { PhotosTemplateProps } from 'templates/Photos'

export default function NewsPage(props: PhotosTemplateProps) {
  return <PhotosTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      photos: [
        {
          title: 'Foto 1',
          img: 'https://picsum.photos/id/1/400/300'
        },
        {
          title: 'Foto 2',
          img: 'https://picsum.photos/id/1/400/600'
        },
        {
          title: 'Foto 3',
          img: 'https://picsum.photos/id/1/400/500'
        },
        {
          title: 'Foto 4',
          img: 'https://picsum.photos/id/1/400/400'
        }
      ]
    }
  }
}
