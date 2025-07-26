<h1>💸 DT Money</h1>

<p>Fala, galera! Tudo certo com vocês? 👋<br>
Espero que sim!</p>

<p>
Hoje venho compartilhar com vocês um projeto muito especial: <strong>DT Money</strong>!<br>
Esse projeto foi desenvolvido com o objetivo de ajudar o usuário a ter um <strong>controle eficiente de suas finanças</strong>, permitindo acompanhar entradas, saídas e o saldo total, que pode ser <strong>positivo ou negativo</strong>, dependendo dos tipos de transações registradas.
</p>

<p>
Além disso, o projeto é <strong>totalmente acessível</strong>, graças ao uso da biblioteca <strong>Radix UI</strong>, que garante que os modais (Dialogs) sejam interativos e utilizáveis por pessoas com deficiência. ♿
</p>

<h2>🛠️ Tecnologias e Ferramentas Utilizadas</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript + TypeScript</li>
  <li>ReactJS + Vite</li>
  <li>React Hook Form (controle de formulários)</li>
  <li>Styled-Components</li>
  <li>Axios (comunicação com a API)</li>
  <li>Zod (validação dos dados dos formulários)</li>
  <li>Radix UI (componentes acessíveis e reutilizáveis)</li>
  <li>Use-Context-Selector (para otimização de performance com Context API)</li>
  <li>JSON Server (API local para simulação de dados)</li>
</ul>

<h2>🏗️ Como Rodar o Projeto Localmente</h2>
<ol>
  <li>Clone o repositório</li>
  <li>No terminal, execute:
    <pre><code>npm install<br>npm run dev</code></pre>
  </li>
  <li>Para iniciar a API local com o JSON Server, rode:
    <pre><code>npm run dev-server</code></pre>
  </li>
</ol>

<h2>📁 Estrutura do Arquivo <code>server.json</code></h2>
<p>
Na raiz do projeto, você encontrará um arquivo chamado <code>server.json</code> já preenchido com um exemplo:
</p>

<pre><code>{
  "transactions": [
    {
      "id": "1",
      "description": "Sorvete",
      "type": "income",
      "category": "Alimentação",
      "price": 14,
      "createdAt": "Tue Jul 01 2025 09:59:44 GMT-0300"
    }
  ]
}
</code></pre>

<ul>
  <li>A chave <code>"transactions"</code> representa o nome da sua rota (endpoint), mas você pode alterá-la, se desejar.</li>
  <li>O exemplo acima foi deixado no arquivo para facilitar o uso inicial, mas sinta-se à vontade para modificar conforme sua necessidade.</li>
</ul>

<p><strong>⚠️ Importante:</strong> mantenha <strong>pelo menos um objeto de exemplo</strong> no <code>server.json</code>, para que o <code>json-server</code> consiga gerar automaticamente os próximos <code>id</code> com base nesse dado inicial.</p>

<hr>

<p>🚀 Projeto desenvolvido com carinho durante meus estudos!<br>
Fique à vontade para clonar, testar e contribuir. 😊</p>

<img src="https://i.imgur.com/AKGG7Ug.png"/>
