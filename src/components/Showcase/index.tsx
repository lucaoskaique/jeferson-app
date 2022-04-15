import Heading from 'components/Heading'
import Link from 'next/link'

import * as S from './styles'

export type ShowcaseProps = {
  children: React.ReactNode
  title?: string
  page?: string
}

const Showcase = ({ title, children, page }: ShowcaseProps) => (
  <S.Wrapper>
    <S.Text>
      <Heading size="medium" color="primary">
        {title}
      </Heading>
    </S.Text>
    <S.Content>{children}</S.Content>
    <S.Subtext>
      <Link href={`/${page}`} passHref>
        <a>
          <Heading size="small" color="primary">
            {`Veja todos os ${title}`}
          </Heading>
        </a>
      </Link>
    </S.Subtext>
  </S.Wrapper>
)

export default Showcase
