import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormContact from '.'

describe('<FormContact />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormContact />)

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Nome e sobrenome/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Cidade/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText('(99)99999-9999')).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/Sua mensagem aqui/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
    expect(container.parentElement).toMatchSnapshot()
  })
})
