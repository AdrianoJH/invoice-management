# invoice-management

 
# Configuração e Execução da Aplicação
Este guia fornece instruções sobre como configurar e executar a aplicação, composta por um backend e um frontend. Certifique-se de seguir os passos abaixo para garantir uma instalação bem-sucedida.

# Backend
Pré-requisitos
Node.js: Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org.](https://nodejs.org./en)

Banco de dados PostgreSQL.

Prisma.

Configuração

Abra um terminal e navegue até o diretório do backend.

cd caminho/do/seu/backend

Instale as dependências.

npm install

Crie um arquivo .env na raiz do diretório do backend e configure as variáveis de ambiente necessárias, incluindo a conexão com o banco de dados PostgreSQL.

DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome-do-banco

Execute as migrações do Prisma para criar o esquema do banco de dados:

npx prisma migrate dev

Execute o servidor backend.

npm start

O servidor estará rodando em http://localhost:3000 por padrão.

# Frontend

Pré-requisitos

Node.js: Certifique-se de ter o Node.js instalado. Você pode baixá-lo em nodejs.org.

Configuração

Abra um terminal e navegue até o diretório do frontend.

cd caminho/do/seu/frontend

Instale as dependências.

npm install

Inicie o servidor de desenvolvimento para o frontend.

npm run dev

O aplicativo frontend estará disponível em http://localhost:3001 por padrão.

Observações

Certifique-se de que o backend está em execução antes de iniciar o frontend, pois o frontend depende de serviços fornecidos pelo backend.

Certifique-se de que as portas padrão (3000 para o backend e 3001 para o frontend) estejam disponíveis em seu sistema. Se essas portas estiverem em uso, você pode alterá-las nos arquivos de configuração correspondentes.

Se houver problemas durante a instalação ou execução, verifique se todos os pré-requisitos foram atendidos e se as dependências foram instaladas corretamente.
