import Heading from 'components/Heading'
import Image from 'next/image'

import * as S from './styles'
export type TextContentProps = {
  title?: string
  subtitle?: string
  content: string
  coverUrl: string
  slug?: string
}

const TextContent = ({
  title,
  subtitle,
  content,
  coverUrl
}: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && (
      <Heading size="large" color="secondary">
        {title}
      </Heading>
    )}
    <S.ImageBox>
      <Image src={coverUrl} alt={title} layout="fill" objectFit="cover" />
    </S.ImageBox>
    <S.Title>{!!subtitle && <h4>{subtitle}</h4>}</S.Title>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
