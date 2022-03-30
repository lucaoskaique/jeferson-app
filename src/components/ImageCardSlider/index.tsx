import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import ImageCard, { ImageCardProps } from 'components/ImageCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type ImageCardSliderProps = {
  items: ImageCardProps[]
}

const settings: SliderSettings = {
  dots: true,
  slidesToShow: 3,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next news" />,
  prevArrow: <ArrowLeft aria-label="previous news" />
}

const ImageCardSlider = ({ items }: ImageCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ImageCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ImageCardSlider
