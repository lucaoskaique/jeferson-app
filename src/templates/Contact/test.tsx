import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Contact />)

    expect(
      screen.getByRole('heading', { name: /Contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Para falar com o Deputado Jeferson Fernandes preencha os campos do formulário abaixo que prontamente reponderemos./i
      })
    ).toBeInTheDocument()
  })
})
