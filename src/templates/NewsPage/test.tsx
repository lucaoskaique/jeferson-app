import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import apolloCache from 'utils/apolloCache'
import { renderWithTheme } from 'utils/tests/helpers'

import NewsPage from '.'

// const mocks = []

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<NewsPage />', () => {
  it('should render the loading when starting template', async () => {
    renderWithTheme(
      <MockedProvider mocks={[]} cache={apolloCache} addTypename={false}>
        <NewsPage />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  // it('should render the heading', async () => {
  //   renderWithTheme(
  //     <MockedProvider mocks={[postsMock]} cache={apolloCache} >
  //       <NewsPage />
  //     </MockedProvider>
  //   )

  //   expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  //   expect(await screen.findByText(/Sample News/i)).toBeInTheDocument()
  // })
})
