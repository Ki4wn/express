import express, { Request, Response } from 'express';
import { Sum } from './service';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const sum = Sum(1, 2);
  res.send(`Heeelo Sum is :${sum}`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
