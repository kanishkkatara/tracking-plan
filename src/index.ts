import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/health', (req, res) => {
  console.log(req.body);
  res.status(200).send('I am alive');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
