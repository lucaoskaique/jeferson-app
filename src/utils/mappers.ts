/* eslint-disable @typescript-eslint/no-explicit-any */
export const aboutSectionMapper = (data: any) => ({
  title: data.title,
  description: data.description,
  image: {
    url: data.image.url,
    alternativeText: data.image.alternativeText,
    width: data.image.width,
    height: data.image.height
  }
})
