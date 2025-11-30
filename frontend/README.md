# Frontend - Rota Certa

Este é o frontend da aplicação. Ele agora faz integração com o backend via HTTP (fetch).

## Configuração/Execução

1. Inicie o backend (na pasta `backend`):

```powershell
npm install
npm start
```

Por padrão o backend usa a porta `3000` (definida por `API_PORTA` no `.env`).

2. Abra o arquivo `frontend/index.html` no navegador (ex.: clicar duas vezes) ou sirva com um servidor HTTP estático.

3. No login, informe `email` e `senha` que existem no banco de dados (cadastre um se necessário via backend).

## Funcionalidades integradas

- Lista de serviços via GET `/servicos`
- Listagem de vendas via GET `/vendas`
- Gravação de vendas via POST `/vendas` (envia `id_servico`, `cep`, `bairro`, `logradouro`, `numero`, `quantidade`, `valor_total`)
- Autenticação via POST `/entrar`, token armazenado em `localStorage` e usado nos cabeçalhos das requisições (se disponível)

## Observações

- O campo "Gasto com Combustível" (`combustivel`) não existe no banco de dados e é armazenado localmente em `localStorage` (na chave `registros_extras`). Ele é usado para cálculos de gasto no frontend.
- Se o backend estiver indisponível, o frontend mostrará registros locais (se existirem) salvos anteriormente em `localStorage`.
- Ajuste `API_URL` em `index.html` se o backend estiver em outra porta/host.
- O frontend agora consulta o endpoint `/config` do backend para obter automaticamente o `API_URL` configurado no `.env` do backend; se não conseguir, ele utiliza `http://localhost:3000` como fallback.
- Foi adicionada uma tela de cadastro sem o campo `funcao` (campo padrão MOTORISTA é aplicado no backend) acessível em "Não possui conta? Crie uma".
- O cadastro possui máscara no campo `Telefone` (formato padrão brasileiro, ex.: (11) 98765-4321). O telefone é enviado ao backend como string.
- Na tela de histórico de registros, agora existem botões para Editar/Excluir cada registro (venda) e, se a venda estiver associada a um serviço, opções para Editar/Excluir o serviço diretamente pelo histórico.


