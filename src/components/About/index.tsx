import Button from 'components/Button'
import Heading from 'components/Heading'
import ImageCard from 'components/ImageCard'

import * as S from './styles'

export type AboutProps = {
  title: string
  description: string
  img: string
}

const About = ({ title, description, img }: AboutProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <S.ImageBox>
          <ImageCard title={title} img={img} />
        </S.ImageBox>
      </S.Column>
      <S.Column>
        <S.Info>
          <S.Title>
            <Heading color="secondary">Conheça o Jeferson</Heading>
          </S.Title>
          <S.Description>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </S.Description>
        </S.Info>
      </S.Column>
    </S.Content>
    <S.BoxButton>
      <Button size="large" fullWidth background="hot">
        Transparência
      </Button>
      <Button size="large" fullWidth background="ice">
        Propostas
      </Button>
      <Button size="large" fullWidth>
        Pronunciamentos
      </Button>
    </S.BoxButton>
  </S.Wrapper>
)

export default About
