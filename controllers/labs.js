import { v4 as uuidv4 } from 'uuid';
import { labs } from '../mocks/data.js';

export const getLabs = (_request, response) => {
  response.send(labs);
};

export const getLab = (request, response) => {
  const { id } = request.params;
  const foundLab = labs.find((lab) => lab.id === id);

  response.send(foundLab);
};

export const createLab = (request, response) => {
  const newLab = request.body;

  labs.push({ ...newLab, id: uuidv4() });

  response.send(`O laboratório com o nome ${newLab.name} foi adicionado à base de dados.`);
};

export const deleteLab = (request, response) => {
  const { id } = request.params;
  const newLabsList = labs.filter((lab) => lab.id !== id);

  response.send(`O laboratório com o id ${id} foi removido da base de dados.`);
};

export const updateLab = (request, response) => {
  const { id } = request.params;
  const { name, address, status } = request.params;

  const labToUpdate = labs.find((lab) => lab.id === id)
  
  if (name) labToUpdate.name = name;
  if (address) labToUpdate.address = address;
  if (status) labToUpdate.status = status;

  response.send(`O laboratório com o id ${id} foi atualizado na base de dados.`);
};

// console.log(uuidv4());
