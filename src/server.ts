import Express from './configs/Express';

const app = Express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on http://${HOST}:${PORT}`)
);
