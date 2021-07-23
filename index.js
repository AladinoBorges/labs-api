import express from 'express';
import bodyParser from 'body-parser';
import { exams, labs } from './mocks/data.js';
import labsRoutes from './routes/labs.js';
import examsRoutes from './routes/exams.js';

const app = express();
const PORT = 5000;
const getIds = ((bulkData) => bulkData.map(({ id }) => id));

app.use(bodyParser.json());

app.use('/labs', labsRoutes);
app.use('/exams', examsRoutes);

app.get('/', (_request, response) => {

  response.send('endpoints: [/labs] [/labs/id] [/exams] [/exams/id]');
});

app.listen(PORT, () => console.log(`Servidor a funcionar na porta: http://localhost:${PORT}`));
