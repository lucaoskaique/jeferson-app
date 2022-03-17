import { DownloadForOffline } from '@styled-icons/material-rounded/DownloadForOffline'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render hot gradient background Button by default', () => {
    const { container } = renderWithTheme(
      <Button>Deputado Jeferson Fernandes</Button>
    )
    expect(
      screen.getByRole('button', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      background: 'linear-gradient(90deg, #ffbf3a -40%, #d90726 185.31%)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render ice gradient background Button', () => {
    renderWithTheme(
      <Button background="ice">Deputado Jeferson Fernandes</Button>
    )
    expect(
      screen.getByRole('button', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      background: 'linear-gradient(90deg, #72c042 -99.98%, #0092d3 193.73%)'
    })
  })

  it('should render a xlarge default Button', () => {
    renderWithTheme(<Button size="xlarge">Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '6rem',
      padding: '1.6rem 5.6rem',
      'font-size': '2.0rem'
    })
  })

  it('should render a large default Button', () => {
    renderWithTheme(<Button>Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a medium Button', () => {
    renderWithTheme(<Button size="medium">Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render a small Button', () => {
    renderWithTheme(<Button size="small">Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a Button with font-weight bold', () => {
    renderWithTheme(<Button>Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      'font-weight': '600'
    })
  })

  it('should render a Button with icon', () => {
    renderWithTheme(
      <Button icon={<DownloadForOffline data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByText(/Button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Button</Button>)
    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%'
    })
  })
})
