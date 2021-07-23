import { v4 as uuidv4 } from 'uuid';
import { exams } from '../mocks/data.js';

export const getExams = (_request, response) => {
  response.send(exams);
};

export const getExam = (request, response) => {
  const { id } = request.params;
  const foundExam = exams.find((exam) => exam.id === id);

  response.send(foundExam);
};

export const createExam = (request, response) => {
  const newExam = request.body;

  exams.push({ ...newExam, id: uuidv4() });

  response.send(`O exame com o nome ${newExam.name} foi adicionado à base de dados.`);
};

export const deleteExam = (request, response) => {
  const { id } = request.params;
  const newExamsList = exams.filter((exam) => exam.id !== id);

  response.send(`O exame com o id ${id} foi removido da base de dados.`);
};

export const updateExam = (request, response) => {
  const { id } = request.params;
  const { name, type, status } = request.params;

  const examToUpdate = exams.find((exam) => exam.id === id)
  
  if (name) examToUpdate.name = name;
  if (type) examToUpdate.type = type;
  if (status) examToUpdate.status = status;

  response.send(`O exame com o id ${id} foi atualizado na base de dados.`);
};
