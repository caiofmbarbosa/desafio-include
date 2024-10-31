# Halloween Landing Page 🎃

Este projeto é uma landing page temática de Halloween, desenvolvida como parte do desafio de programação para o processo seletivo 2024.2 da **Include Engenharia**. A página foi construída utilizando React, Styled Components, TypeScript e um servidor JSON local para simular uma API.

## 📜 Descrição do Projeto

A landing page contém as seguintes seções:

- **Página de Perfil**: Apresenta informações básicas sobre quem eu sou, incluindo nome, foto, curso, e-mail, lista de hobbies, lista de habilidades e uma resposta para a pergunta: *"Por que devo entrar na Include?"*
- **Menu de Navegação**: Permite a navegação fácil entre as diferentes seções do site.
- **Estilização Temática**: Design baseado no Halloween.
- **Rodapé**: Contém informações de contato, incluindo links para redes sociais.

## 🎨 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Para aplicar estilos com o uso de componentes em CSS-in-JS.
- **TypeScript**: Para garantir tipagem estática e maior segurança no código.
- **json-server**: Para criar uma API simulada e armazenar posts dinamicamente em um arquivo JSON.

## 🚀 Funcionalidades

- **Perfil do Candidato**: Exibe uma breve descrição e habilidades.
- **Postagens Dinâmicas**: Permite que o usuário adicione ou remova postagens na seção de realizações.
- **Design Responsivo**: Layout ajustável para diferentes tamanhos de tela.

## 🧙‍♂️ Como Executar o Projeto

1. Clone o repositório:

    ```
    git clone https://github.com/caiofmbarbosa/desafio-include
    ```
  
2. Instale as dependências:
    ```
    npm install
    ```

3. Inicie o `json-server` para simular uma API com o arquivo `db.json`:

    ```
    npx json-server --watch db.json --port 3001
    ```

   Isso criará uma API local que responderá em `http://localhost:3001/posts`, permitindo que o projeto faça requisições de CRUD (criação, leitura, atualização e exclusão) para as postagens dinâmicas.

4. Inicie o projeto:

    ```
    npm run dev
    ```

5. Acesse http://localhost:5173 em seu navegador para visualizar a landing page.
