import Heading from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  subtitle?: string
  content: string
}

const TextContent = ({ title, subtitle, content }: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && (
      <Heading size="large" color="secondary">
        {title}
      </Heading>
    )}
    <S.Title>{!!subtitle && <h4>{subtitle}</h4>}</S.Title>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
