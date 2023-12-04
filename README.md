# Consulta de Clima e Imagem da Cidade

Este projeto utiliza React para mostrar a temperatura atual de uma cidade e exibir uma imagem relacionada a ela. Ele faz chamadas para as APIs do OpenWeatherMap e do Pexels.

## Tecnologias Utilizadas

- React
- Axios
- API do OpenWeatherMap
- API do Pexels

## Como Funciona

O usuário insere o nome de uma cidade e clica no botão "PESQUISAR". O aplicativo faz duas chamadas de API:

1. **OpenWeatherMap API**: Obtém a temperatura atual da cidade.
2. **Pexels API**: Busca uma imagem relacionada à cidade.

Se a cidade for encontrada, a temperatura em Celsius e Fahrenheit é exibida, juntamente com a imagem da cidade. Se a cidade não for encontrada ou se não houver imagem relacionada, a área da imagem será deixada em branco.

## Instruções de Uso

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o aplicativo com `npm start`.
4. Insira o nome da cidade no campo de pesquisa e clique em "PESQUISAR".

## Como Rodar o Projeto

Certifique-se de substituir `'SUA_CHAVE_DA_API_DO_PEXELS'` e `'SUA_CHAVE_DA_API_DO_OPENWEATHERMAP'` pelo seu token da API correspondente.

### Exemplo de Uso

```javascript
// Inserindo suas chaves da API
const apiKey = 'SUA_CHAVE_DA_API_DO_OPENWEATHERMAP';
const pexelsApiKey = 'SUA_CHAVE_DA_API_DO_PEXELS';
