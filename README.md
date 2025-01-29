# Frontend Project

## Configuração e Execução

### Executando Localmente

1. **Clone o repositório:**
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd frontend
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ```

3. **Inicie a aplicação:**
    ```sh
    npm start
    ```

4. **Acesse a aplicação:**
    Abra o navegador e vá para `http://localhost:3000`

### Executando com Docker

1. **Certifique-se de ter o Docker e o Docker Compose instalados.**

2. **Construa a imagem Docker:**
    ```sh
    docker-compose build
    ```

3. **Inicie os serviços:**
    ```sh
    docker-compose up
    ```

4. **Acesse a aplicação:**
    Abra o navegador e vá para `http://localhost:3000`

### Variáveis de Ambiente

Você pode definir variáveis de ambiente no arquivo `docker-compose.yml` ou criar um arquivo `.env` na raiz do projeto para configurar variáveis adicionais.

### Notas Adicionais

- Certifique-se de que a porta `3000` não está sendo usada por outro serviço ao executar a aplicação.
- Para parar os serviços Docker, use `Ctrl+C` no terminal onde o `docker-compose up` está sendo executado ou execute `docker-compose down` em outro terminal.# frontend-teste
