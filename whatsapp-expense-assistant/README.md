# WhatsApp Expense Assistant

Este projeto é um assistente virtual que ajuda os usuários a calcular e gerenciar seus gastos mensais através do WhatsApp. Ele permite que os usuários adicionem despesas e recuperem um resumo das despesas do mês.

## Estrutura do Projeto

```
whatsapp-expense-assistant
├── src
│   ├── app.js                  # Ponto de entrada da aplicação
│   ├── controllers
│   │   └── expenseController.js # Controlador para gerenciar despesas
│   ├── routes
│   │   └── expenseRoutes.js     # Rotas relacionadas a despesas
│   ├── services
│   │   └── whatsappService.js    # Serviço para comunicação com a API do WhatsApp
│   └── utils
│       └── calculator.js         # Funções utilitárias para cálculos de despesas
├── package.json                 # Configuração do npm
├── .env                         # Variáveis de ambiente
└── README.md                    # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd whatsapp-expense-assistant
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais da API do WhatsApp e configurações do banco de dados.

## Uso

1. Inicie o servidor:
   ```
   npm start
   ```
2. Envie uma mensagem para o número do WhatsApp configurado para interagir com o assistente.
3. Utilize os comandos disponíveis para adicionar despesas e consultar o total de gastos do mês.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.