import 'whatwg-fetch'
import React from 'react'
import { setupServer } from 'msw/node'
import { fireEvent, screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../../utils/test-utils'
import Home from '@/pages'

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
import { handlers } from '../../mock/handlers'
import { rest } from 'msw'

describe('homepage', () => {


  const server = setupServer(rest.get(`https://api.openweathermap.org/data/2.5/weather`, (req, res, ctx) => {
    const { lat }: any = req.url.searchParams.get('lat');
    const { lon }: any = req.url.searchParams.get('lon');
    console.log('hola, esto es test: ', lat, lon);
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Melbourne',
      })
    );
  }))

  // Enable API mocking before tests.
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('fetches & receives a user after clicking the fetch user button', async () => {
    renderWithProviders(<Home />)
    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
    // should show no user initially, and not be fetching a user
    // expect(screen.getByText(/no user/i)).toBeInTheDocument()
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

    // // after clicking the 'Fetch user' button, it should now show that it is fetching the user
    // fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
    // expect(screen.getByText(/no user/i)).toBeInTheDocument()

    // // after some time, the user should be received
    // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
    // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
  })

  test('Uses preloaded state to render', () => {
    const initialCity = [{ mainCityName: 'Melbourne' }]

    const { getByText } = renderWithProviders(<Home />, {
      preloadedState: {
        cityDetail: initialCity
      }
    })
  })





})
