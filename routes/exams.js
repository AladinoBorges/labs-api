import express from 'express';
import { createExam, getExams, getExam, deleteExam, updateExam } from '../controllers/exams.js';

const examsRouter = express.Router();

examsRouter.get('/', getExams);
examsRouter.get('/:id', getExam);
examsRouter.post('/', createExam);
examsRouter.delete('/:id', deleteExam);
examsRouter.patch('/:id', updateExam);

export default examsRouter;
