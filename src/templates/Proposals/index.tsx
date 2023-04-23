import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

import * as S from './styles'

export type ProposalsTemplateProps = {
  proposal: {
    title: string
    content: string
  }
}

const ProposalsTemplate = ({ proposal }: ProposalsTemplateProps) => (
  <Base>
    <NextSeo
      title={`${proposal.title} - Deputado Jeferson Fernandes`}
      description={proposal.title}
      canonical={`https://jefersonfernandes.com.br/post/proposals`}
      openGraph={{
        url: `https://jefersonfernandes.com.br/post/proposals`,
        title: `${proposal.title} - Deputado Jeferson Fernandes`,
        description: proposal.title,
        images: [
          {
            url: '/img/icon-512.png',
            alt: `${proposal.title}`
          }
        ]
      }}
    />
    <S.Main>
      <S.SectionText>
        <Container>
          <Heading color="primary">{proposal.title}</Heading>
          <div dangerouslySetInnerHTML={{ __html: proposal.content }} />
        </Container>
      </S.SectionText>
    </S.Main>
  </Base>
)

export default ProposalsTemplate
