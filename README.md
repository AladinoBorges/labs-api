# Objectivo

- Construir uma API para manutenção de laboratórios e exames.

## Contexto

Estamos desenvolvendo uma aplicação para as seguintes situações:
- Laboratório:
  - [x]  cadastrar um novo laboratório;
  - [x]  obter uma lista de laboratórios ativos;
  - [x]  atualizar um laboratório existente;
  - [x]  remover logicamente um laboratório ativo.
- Exames:
  - [x]  cadastrar um novo exame;
  - [x]  obter uma lista de exames ativos;
  - [x]  atualizar um exame existente;
  - [x]  remover logicamente um exame ativo.
- Associação:
  - [ ]  associar um exame ativo à um laboratório ativo;
  - [ ]  desassociar um exame ativo de um laboratório ativo;

  **Importante:**
  
  - [ ]  Um exame pode estar associado a mais de um laboratório;
  - [x]  O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.

### Informações

- Laboratório
  - [x]  nome
  - [x]  endereço
  - [x]  status [ativo, inativo]
- Exame
  - [x]  nome
  - [x]  tipo [analise clinica, imagem]
  - [x]  status [ativo, inativo]

## Funcionalidades extras

- [ ]  Possibilidade de executar cadastro, atualização e remoção em lote;
- [ ]  Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.

## Requisitos técnicos

- [x]  Desenvolver usando *Javascript*
- [x]  Serviço deve respeitar os princípios RESTFUL

  ### Criar um `README.md`

    - [ ]  Arquitetura
    - [ ]  instruções de uso
    - [ ]  entre outros

## Diferenciais

- [ ]  Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc)
- [ ]  Configurar a aplicação para rodar em um container
- [x]  Documentação da API


## Ambiente de desenvolvimento

#### Como rodar o projeto:
* fazer um clone do repositorio para a sua máquina;
* instalar as dependências com **`npm install`**;
* mudar para a pasta do projeto **`cd node_api`**;
* dentro da pasta do projeto rodar o comando **`npm start`**;
* a API roda no endpoint **`localhost:5000`**

### Como usar a API
**IDS** (Identificadores únicos para os laboratórios e exames)

Usar um desses ids no endpoint **`/labs/id`** para que a API retorne somente o laboratório com o id correspondente.
Também serve como identificador para atualizar ou deletar da base de dados o laboratório correspondente.

- Laboratórios ativos (**`labs`**):
    1. 22111fef-1574-434c-9131-16138f1bf6b8
    2. 1da4b0e9-46f5-4ed4-b45c-b52885d036ca
    3. f336dee1-693a-43e9-b7b4-4692245480c4
    4. fa17f905-766b-4bf3-9355-3b9b418bfd9b
    5. 0ddca9cd-976b-493a-bb22-af7860d8540c
    6. 305362d8-779e-4afc-a025-a625bd2054c0
    7. db0f3fb7-94f8-4622-b960-b652ff6d341f
    8. 5045d884-6ebd-4d06-a37c-382eadf772bf
    9. 1d2d2f6a-e619-4212-9ecf-fb445e295446
    10. 892bbfcc-b8fb-42c8-897b-39abd61329e1
    11. e134de25-f7ee-4f26-bcdd-c1e9db85c8a7

Usar um desses ids no endpoint **`/exams/id`** para que a API retorne somente o exame com o id correspondente.
Também serve como identificador para atualizar ou deletar da base de dados o exame correspondente.

- Exames ativos (**`exams`**):
    1. 1271412c-ef86-40b4-b348-27001ecfe1e7
    2. adbe201f-681a-4567-a821-1c449b9ee625
    3. 19ed4fcb-db25-468a-b656-e8005e2d22e4
    4. 78c7f47b-089a-451e-8508-08792bfb6046
    5. 3b468c65-6e03-4eea-b35a-0fb67185cc6f
    6. 100159c4-b402-4073-a5e5-ca1e63f86363
    7. 90da44f8-0424-4f73-a82c-fc431a53fd54
    8. a54e9aeb-79b4-46b7-9d39-77eb4c8642e3
    9. e0bed12f-91b3-49b2-a52c-12eeffa26078
    10. 2fa156d0-a974-4ffd-8cba-eaf8a24b5dbf
    11. 4fe72777-f9df-4e48-92b3-fd7f55bfcd75
    12. 85af9088-0100-4ac8-b642-1eda83a50bac
    13. e0f26384-3aff-4318-b54b-b75403b181d7
    14. b360f57a-aac7-42fa-8b61-1a1f42929ad6

Tanto os laboratórios quanto os exames inativos não têm **`ids`**.

### Como atualizar ou deletar um laboratório ou exame da base de dados?

Para as requisições do tipo **`POST`** e **`DELETE`**, foi usada a plataforma de colaboração para desenvolvimento API, [Postman](https://www.postman.com). Informações de como fazer essas dois tipos de requisição podem ser encontradas no site da plataforma.
