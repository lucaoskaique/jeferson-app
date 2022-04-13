import { fireEvent, screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Galery from '.'
import mockItems from './mock'

describe('<Galery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Galery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Galery items={mockItems.slice(0, 2)} />)

    //Selecionar nosso modal
    const modal = screen.getByLabelText('modal')

    // verificar se a modal ta escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    //clicar na thumb verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Galery items={mockItems.slice(0, 2)} />)

    //clicar na thumb verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )
    // espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal', () => {
    renderWithTheme(<Galery items={mockItems.slice(0, 2)} />)

    //Selecionar nosso modal
    const modal = screen.getByLabelText('modal')

    //clicar na thumb para abrir
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //clicar na thumb para fechar
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal with ESC key pressed', () => {
    const { container } = renderWithTheme(
      <Galery items={mockItems.slice(0, 2)} />
    )

    //Selecionar nosso modal
    const modal = screen.getByLabelText('modal')

    //clicar na thumb para abrir
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //clicar na thumb para fechar
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
