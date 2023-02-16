import { rest } from 'msw';

export const handlers = [
  rest.get(`https://api.openweathermap.org/data/2.5/weather`, (req, res, ctx) => {
    const { lat } = req.url.searchParams.get('lat');
    const { lon } = req.url.searchParams.get('lon');
    console.log('hola, esto es test: ', lat, lon);
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Melbourne',
      })
    );
  }),
];
