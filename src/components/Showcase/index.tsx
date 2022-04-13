import Heading from 'components/Heading'
import MediaCard, { MediaCardProps } from 'components/MediaCard'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  photos: MediaCardProps[]
}

const Showcase = ({ title, photos }: ShowcaseProps) => (
  <S.Wrapper>
    <S.Text>
      <Heading size="medium" color="primary">
        {title}
      </Heading>
    </S.Text>
    <MediaMatch greaterThan="medium">
      <S.Content>
        {!!photos &&
          photos
            .slice(0, 3)
            .map((photo, index) => <MediaCard key={index} {...photo} />)}
      </S.Content>
    </MediaMatch>
    <S.Subtext>
      <Link href="/" passHref>
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
