import Button from 'components/Button'
import Heading from 'components/Heading'
import ImageCard from 'components/ImageCard'

import * as S from './styles'

export type AboutProps = {
  title: string
  img: string
}

const About = ({ title, img }: AboutProps) => (
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
