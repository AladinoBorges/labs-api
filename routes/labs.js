import express from 'express';
import { createLab, getLabs, getLab, deleteLab, updateLab } from '../controllers/labs.js';

const labsRouter = express.Router();

labsRouter.get('/', getLabs);
labsRouter.get('/:id', getLab);
labsRouter.post('/', createLab);
labsRouter.delete('/:id', deleteLab);
labsRouter.patch('/:id', updateLab);

export default labsRouter;
