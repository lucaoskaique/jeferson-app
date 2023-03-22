import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Description',
  subtitle: 'Subtitulo',
  content: `<h1>Content</h1>`,
  coverUrl: '/img/red-dead-img.jpg'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitulo/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <TextContent content={props.content} coverUrl={props.coverUrl} />
    )

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render without subtitle', () => {
    renderWithTheme(
      <TextContent
        title={props.title}
        content={props.content}
        coverUrl={props.coverUrl}
      />
    )

    expect(
      screen.queryByRole('heading', { name: /Subtitulo/i })
    ).not.toBeInTheDocument()
  })

  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement
    expect(wrapper).toHaveStyle({
      color: '#030517' // theme.colors.black
    })
  })
})
