# Backend - Projeto Integrador ADS

Este é o backend da aplicação do Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas (ADS). A aplicação gerencia motoristas e vendedores ambulantes, permitindo cadastro, login, gerenciamento de serviços, vendas e horários recomendados.

## Tecnologias Utilizadas

- Node.js com Express.js para servidor web
- MySQL2 para conexão com banco MySQL
- JWT para autenticação
- CORS para permitir requisições cross-origin
- Dotenv para variáveis de ambiente
- Nodemon para desenvolvimento com reinício automático
- Crypto para criptografia MD5 de senhas

## Estrutura do Projeto

```
backend/
├── app.js                 # Arquivo principal do servidor
├── routes.js              # Configuração das rotas
├── controller/            # Definição dos endpoints
├── service/               # Lógica de negócio
├── repository/            # Queries SQL e conexão com DB
├── validation/            # Validações dos dados recebidos
├── auth/                  # Autenticação JWT
├── database.sql           # Script de criação do banco de dados
├── package.json           # Dependências e scripts
└── .env                   # Variáveis de ambiente (não versionado)
```

## Configuração e Execução (Rápido)

1. Instale as dependências do backend:
```powershell
cd backend
npm install
```

2. Configure o banco de dados MySQL:
- Crie o banco de dados e as tabelas executando `backend/database.sql` (por exemplo via MySQL Workbench ou `mysql -u user -p < database.sql`).
  - Caso prefira, abra `backend/database.sql` para revisar a estrutura (tabelas `Usuarios`, `Servico`, `Venda`, `HorariosBons`).

3. Crie o arquivo `.env` na pasta `backend` com as variáveis (caso não exista, copie `.env.example`):

```
API_PORTA=3000
MYSQL_HOST=localhost
MYSQL_USER=seu_usuario_mysql
MYSQL_PASS=sua_senha_mysql
MYSQL_DB=motoristas_vendedores
KEY=sua_chave_secreta_jwt
```

4. Inicie o servidor:
```powershell
npm start  # rodando com nodemon (desenvolvimento)
```

5. Abra o frontend pela URL servida pelo backend (recomendado) em `http://localhost:3000` — o app já serve os arquivos estáticos da pasta `frontend`.

OBS: O backend tenta usar `api_porta`, `API_PORTA` ou `PORT` (em maiúsculas/minúsculas) para definir a porta. Se você tiver dúvidas, confira a saída do servidor no terminal (ex.: `Servidor iniciado em: http://localhost:3000`).

## Endpoints da API

### Usuários

- POST `/entrar` — Login
  - Body JSON: `{ "nome": "...", "email": "...", "senha": "..." }`
  - Retorna: Token JWT

- POST `/criar` — Cadastro de usuário
  - Body JSON: `{ "usuario": "...", "email": "...", "senha": "...", "telefone": "...", "cidade": "...", "funcao": "MOTORISTA" }`
  - Retorna: ID e token JWT

- GET `/consultar/usuario/:id` — Consulta por ID
  - Retorna dados do usuário

- DELETE `/deletar/usuario/:id` — Deletar usuário

- PUT `/atualizar/usuario/:id` — Atualizar usuário

- GET `/listar/usuarios` — Listar todos os usuários

### Serviços

- GET `/servicos` — Listar serviços
- GET `/servicos/:id` — Consultar serviço por ID
- POST `/servicos` — Criar novo serviço
- PUT `/servicos/:id` — Atualizar serviço
- DELETE `/servicos/:id` — Deletar serviço

### Vendas

- GET `/vendas` — Listar vendas
- GET `/vendas/:id` — Consultar venda por ID
- POST `/vendas` — Criar nova venda
  - Body JSON exemplo:
  ```json
  {
    "id_servico": 1,
    "cep": "12345-678",
    "bairro": "Centro",
    "logradouro": "Rua A",
    "numero": "100",
    "quantidade": 2,
    "valor_total": 150.00
  }
  ```
- PUT `/vendas/:id` — Atualizar venda
  - Body JSON igual ao POST
- DELETE `/vendas/:id` — Deletar venda

### Horários Bons

- GET `/horarios-bons` — Listar horários bons
- GET `/horarios-bons/:id` — Consultar horário bom por ID
- POST `/horarios-bons` — Criar horário bom
- PUT `/horarios-bons/:id` — Atualizar horário bom
- DELETE `/horarios-bons/:id` — Deletar horário bom

### Config

- GET `/config` — Retorna informações de configuração do backend (ex.: `apiUrl`) geradas a partir do `.env` (útil para frontends estáticos lerem a porta base).

### Observações de uso
- O backend também serve a pasta `frontend` automaticamente (`express.static('frontend')`) — assim ao abrir `http://localhost:<porta>` você carrega o frontend integrado à API.
- O JWT é gerado a partir da chave `KEY` em `.env`. Mantenha essa chave secreta em produção.

### cURL / testes rápidos
- Ler o `apiUrl` configurado pelo `.env`:
```bash
curl http://localhost:3000/config
```
- Criar usuário (exemplo):
```bash
curl -X POST http://localhost:3000/criar -H "Content-Type: application/json" -d '{"usuario":"Teste","email":"teste@ex.com","senha":"senha123","telefone":"11988885555","cidade":"São Paulo"}'
```
 - Login:
```bash
curl -X POST http://localhost:3000/entrar -H "Content-Type: application/json" -d '{"email":"teste@ex.com","senha":"senha123"}'
```

### Exemplos rápidos (cURL)

- Fazer login:
```bash
curl -X POST http://localhost:3000/entrar -H "Content-Type: application/json" -d '{"email":"seu@email","senha":"sua_senha"}'
```

- Criar venda:
```bash
curl -X POST http://localhost:3000/vendas -H "Content-Type: application/json" -d '{"id_servico":1,"cep":"12345-678","bairro":"Centro","logradouro":"Rua A","numero":"10","quantidade":1,"valor_total":50.00}'
```

### Observações de segurança e desenvolvimento
- Atualmente as senhas são encriptadas com MD5 (presente no serviço de cadastro). Isso não é recomendado para produção; prefira algoritmos modernos como `bcrypt`.
- Se for usar em produção, considere HTTPS, variáveis de ambiente seguras e rotinas de rotação de chaves.
- Se a infraestrutura crescer, adicione validações mais robustas, testes automatizados e CI/CD.

## Autenticação

- A API utiliza JWT para autenticação.
- Inclua o token no header `Authorization` como `Bearer <token>` para endpoints protegidos.

### Testes e Postman
- Não há testes automatizados incluídos; recomendamos usar Postman, Insomnia ou `curl` durante o desenvolvimento. Exemplos de requisições foram colocadas acima.

### Contribuição
- Preferência por PRs pequenos e claros, com descrição do que foi alterado.
- Se estiver fazendo mudanças no banco de dados, inclua um script SQL de migração ou atualize o `database.sql`.

## Considerações

- Senhas são criptografadas com MD5 (não recomendado para produção).
- Certifique-se que os IDs referenciados (como `id_servico` em vendas) existam para evitar erros de chave estrangeira.

## Desenvolvimento

Sinta-se à vontade para contribuir criando forks e pull requests.

---

