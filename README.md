Projeto para palestra sobre TDD - Rocket Seat

Autor: Amós Batista - Zup

A branch master é o projeto **original**, e a branch **unit-test-refactor** é o projeto refatorado.

```sh
# Instalação dependencias
npm install

# Rodando testes
## Simples
npm run start

## Watch (testes executados toda vez que salvar arquivo)
npm run test-watch

## Ver cobertura do código
npm run test-coverage

# Rodar em desenvolvimento
PORT=8080 npm run dev

# Rodar em produção:
PORT=8080 npm start
```
Suporte Docker
------
```sh
cd express-es6-rest-api

docker build -t es6/api-service .
docker run -p 8080:8080 es6/api-service
```

Licença
-------

MIT
