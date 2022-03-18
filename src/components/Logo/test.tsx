import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal default Logo', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '17rem'
    })
  })

  it('should render a small Logo', () => {
    renderWithTheme(<Logo size="small" />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '13.1rem'
    })
  })

  it('should render a large Logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '37rem'
    })
  })

  it('should render a xlarge Logo', () => {
    renderWithTheme(<Logo size="xlarge" />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '67rem'
    })
  })

  it('should render a xlarge Logo', () => {
    renderWithTheme(<Logo color={true} />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes2/i).parentElement
    ).toHaveStyle({
      width: '17rem'
    })
  })
})
