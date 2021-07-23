import { v4 as uuidv4 } from 'uuid';
import { labsIds, examsIds } from './ids.js'

const activeLabs = [
  {
    "name": "Jacaré",
    "address": "Rua da Liberdade, 3000",
    "status": ["ativo"],
  },
  {
    "name": "Outra Moderna, Diferente",
    "address": "Rua do Raio, 164",
    "status": ["ativo"],
  },
  {
    "name": "Outra Moderna, Diferente",
    "address": "Rua do Raio, 164",
    "status": ["ativo"],
  },
  {
    "name": "Hertrudes",
    "address": "Rua da Avenida, 13",
    "status": ["ativo"],
  },
  {
    "name": "A Lice",
    "address": "Rua da Toca do Coelho, 7",
    "status": ["ativo"],
  },
  {
    "name": "Sapateiro",
    "address": "Rua dos Relógios e Chapeus, 6915",
    "status": ["ativo"],
  },
  {
    "name": "Pfizer",
    "address": "Rua da Liberdade, 10",
    "status": ["ativo"],
  },
  {
    "name": "Outra Moderna",
    "address": "Rua do Raio, 162",
    "status": ["ativo"],
  },
  {
    "name": "Gertrudes",
    "address": "Rua da Avenida, 12",
    "status": ["ativo"],
  },
  {
    "name": "Alice",
    "address": "Rua da Toca do Coelho, 2",
    "status": ["ativo"],
  },
  {
    "name": "Chapeleiro",
    "address": "Rua dos Relógios e Chapeus, 6922",
    "status": ["ativo"],
  }
].map((lab, index) => ({
  ...lab,
  id: labsIds[index]
}));

export const labs = [
  ...activeLabs,
  {
    "name": "Nada Moderna",
    "address": "Rua do Raio, 1693",
    "status": ["inativo"],
  },
  {
    "name": "Terminal 2",
    "address": "Rua do Terminal, 191",
    "status": ["inativo"],
  },
  {
    "name": "Moderna",
    "address": "Rua do Raio, 1692",
    "status": ["inativo"],
  },
  {
    "name": "Terminal",
    "address": "Rua do Terminal, 192",
    "status": ["inativo"],
  }
].sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return (-1)
  return 0;
});

const inactiveImageExams = [
  'Ultrassom',
  'Mamografia',
  'Ressonância nuclear magnética',
  'Tomografia computadorizada',
].map((inativo) => ({
  name: inativo,
  type: ['imagem'],
  status: ['inativo']
}));

const activeImageExams = [
  'Ultrassonografia',
  'Raio X',
  'Tomografia computadorizada',
].map((ativo, index) => ({
  name: ativo,
  type: ['imagem'],
  status: ['ativo'],
  id: examsIds[index]
}));

const activeBloodExams = [
  'Creatinina',
  'Colesterol Total',
  'Triglicérides',
  'Gama GT',
  'TGO',
  'TGP',
  'Fosfatase alcalina',
  'Gama GT',
  'Potássio',
  'Sódio',
  'Urina tipo 1'
].map((ativo) => ({
  name: ativo,
  type: ['análise clínica'],
  status: ['ativo'],
  id: uuidv4(),
}));

const inactiveBloodExams = [
  'HDL',
  'LDL',
  'VLDL',
  'Hemoglobina Glicada',
  'Hemograma completo',
  'TSH',
  'PCR',
  'Proteínas totais'
].map((inativo) => ({
  name: inativo,
  type: ['análise clínica'],
  status: ['inativo'],
  id: uuidv4(),
}));

export let exams = [
  ...inactiveBloodExams,
  ...activeBloodExams,
  ...inactiveImageExams,
  ...activeImageExams
].sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return (-1)
  return 0;
});
