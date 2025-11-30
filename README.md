# Rota Certa — Projeto Integrador (ADS)

Rota Certa é uma aplicação desenvolvida como Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas (ADS). O objetivo é oferecer uma solução prática para motoristas e vendedores ambulantes gerenciarem serviços, vendas e gastos; além de identificar horários com maior fluxo de vendas.

Este repositório contém tanto a API (backend) quanto a interface web simples (frontend) para demonstração e testes.

## Estrutura do repositório
- `backend/` — servidor Node.js (Express), conexão MySQL, rotas, controllers, services e repository.
- `frontend/` — arquivo `index.html` com layout responsivo e integração via `fetch` com a API.
- `sql/` — script `database.sql` com o esquema de banco de dados (MySQL).

## Recursos principais
- Cadastro e login com JWT (autenticação básica)
- CRUD de serviços (`/servicos`) e vendas (`/vendas`)
- Dashboard com resumo financeiro (total ganhos, gastos e lucro)
- Formulários com máscara para CEP, telefone e campos monetários
- Histórico de vendas com edição e exclusão (suporta fallback offline via localStorage)
- Endpoint `/config` para leitura de configurações do backend (API_URL) a partir do `.env`

## Tecnologias
- Node.js + Express.js
- MySQL (mysql2)
- JWT para autenticação
- Vanilla HTML/CSS/JS no frontend (fetch API)

## Pré-requisitos
- Node.js 16+ (recomendado)
- MySQL 8+ ou MariaDB

## Quick Start (development)
1. Clone o repositório
```powershell
git clone https://github.com/Dani-Moura081/IP-facul
cd IP-facul-main
```

2. Configure o banco de dados (MySQL) e crie as tabelas executando `sql/database.sql`. Algo como:
```powershell
mysql -u seu_usuario -p < sql/database.sql
```

3. Configure as variáveis de ambiente no backend (`backend/.env`) com os dados do seu MySQL (use `backend/.env.example` como referência).

4. Instale e inicie o backend:
```powershell
cd backend
npm install
npm start
```
Por padrão o servidor vai rodar na porta definida em `.env` (variáveis suportadas: `api_porta`, `API_PORTA` ou `PORT`). O backend também serve o frontend por padrão em `http://localhost:<porta>`.

5. Acesse o frontend em `http://localhost:<porta>` (recomendado) ou abra `frontend/index.html` localmente.

## Endpoints (resumo)
Consulte `backend/README.md` para a lista completa, exemplos e instruções adicionais.

### Testes rápidos (exemplos com cURL)
- Crie um usuário:
```bash
curl -X POST http://localhost:3000/criar -H "Content-Type: application/json" -d '{"usuario":"Teste","email":"teste@ex.com","senha":"senha123","telefone":"11988885555","cidade":"São Paulo"}'
```
- Login:
```bash
curl -X POST http://localhost:3000/entrar -H "Content-Type: application/json" -d '{"email":"teste@ex.com","senha":"senha123"}'
```

## Uso recomendados / notas

## Contribuições

## Licença
Projeto acadêmico — ajuste de acordo com sua política de licenciamento.
# IP facul
 app do projeto integrador do curso tecnologo de ads
 
para acessar a parte de backend dê um ``cd backend`` no terminal e depois um ``npm i``