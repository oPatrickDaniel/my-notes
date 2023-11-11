import SectionCmp from './../components/section'
import CodeCmp from './../components/code'
import Image from 'next/image'
import mvcImg from '@/app/assets/mvc.png'

export default function JavascriptPage() {
  return (
    <>
      <h1>Javascript</h1>

      <SectionCmp title="Primeiro contato + hello world">
        <p>
          O javaScript permite que interações possam ser feitas na página sem
          que ela seja recarregada.
        </p>
        <p>
          O &quot;alert&quot; e uma tag que abre uma janela com uma mensagem no
          carregamento da tela.
        </p>
        <CodeCmp language="javascript">{`alert(hello world)`}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Console">
        <p>
          Para imprimir algo no console do html se utiliza a atributo
          &quot;console.log&quot;.Para criar uma quebra de linha no console se
          usa &quot;\n&quot;.
        </p>
        <CodeCmp language="javascript">{`console.log("hello world")`}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Variáveis">
        <p>
          Variáveis armazenam dados para serem usados nas construção de códigos
          js.
        </p>
        <CodeCmp language="javascript">{`var numero1 = 1`}</CodeCmp>

        <h3>Tipos de dados</h3>
        <p>
          Há vários tipos de dados que podem ser atribuídos em var&apos;s e
          const&apos;s:
        </p>
        <table>
          <thead>
            <tr>
              <th>Tipo de Dado</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boolean</td>
              <td>
                Representa um valor verdadeiro ou falso.(é declarado em inglês:
                true, false)
              </td>
            </tr>
            <tr>
              <td>Number</td>
              <td>Representa um valor numérico</td>
            </tr>
            <tr>
              <td>String</td>
              <td>Representa um valor de texto</td>
            </tr>
            <tr>
              <td>Null</td>
              <td>Retorna um valor nulo</td>
            </tr>
            <tr>
              <td>Undefined</td>
              <td>O valor de uma var vazia </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Operações aritméticas">
        <p>
          No Js e possível fazer contas usando operadores aritméticos.
          operadores abaixo:
        </p>

        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+</td>
              <td>Adição</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Subtração</td>
            </tr>
            <tr>
              <td>*</td>
              <td>Multiplicação</td>
            </tr>
            <tr>
              <td>/</td>
              <td>Divisão</td>
            </tr>
            <tr>
              <td>%</td>
              <td>Módulo (resto da divisão)</td>
            </tr>
            <tr>
              <td>++</td>
              <td>Incremento</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Decremento</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Atribuições">
        <p>
          podemos usar atribuições para modificar valores já existentes. abaixo
          os principais:
        </p>
        <table>
          <thead>
            <tr>
              <th>Valor de Atribuição</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>=</td>
              <td>Atribui um novo valor</td>
            </tr>
            <tr>
              <td>+=</td>
              <td>Atribui o valor antigo somado ao novo</td>
            </tr>
            <tr>
              <td>-=</td>
              <td>Atribui o valor antigo subtraído do novo</td>
            </tr>
            <tr>
              <td>*=</td>
              <td>Atribui o valor antigo vezes o novo valor</td>
            </tr>
            <tr>
              <td>/=</td>
              <td>Atribui o valor antigo dividido pelo o novo valor</td>
            </tr>
            <tr>
              <td>%=</td>
              <td>Atribui o resto do valor antigo pelo o novo valor</td>
            </tr>
            <tr>
              <td>**=</td>
              <td>Atribui a potencia do valor antigo pelo o novo valor</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Operadores comparativos">
        <p>
          Assim como na matemática o js possui operadores comparativos. abaixo
          os principais:
        </p>

        <table>
          <tr>
            <th>Operador</th>
            <th>Significado</th>
          </tr>
          <tr>
            <td>==</td>
            <td>Igual </td>
          </tr>
          <tr>
            <td>!=</td>
            <td>Diferente</td>
          </tr>
          <tr>
            <td>===</td>
            <td>Igualdade estrita (valor e tipo de operador)</td>
          </tr>
          <tr>
            <td>!==</td>
            <td>Diferença estrita (valor e tipo de operador)</td>
          </tr>
          <tr>
            <td>&lt;</td>
            <td>Menor que</td>
          </tr>
          <tr>
            <td>&gt;</td>
            <td>Maior que</td>
          </tr>
          <tr>
            <td>&lt;=</td>
            <td>Menor ou igual a</td>
          </tr>
          <tr>
            <td>&gt;=</td>
            <td>Maior ou igual a</td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Operadores lógicos">
        <p>
          Operadores lógicos servem para fazer comparação entre elementos.
          existem dois operadores lógicos: o && caso 2 expressões sejam
          verdadeira, ou || caso umas das expressões seja verdadeira.
        </p>
        <CodeCmp language="javascript">
          {`if (a == 1 && 2 == b) { }
else if (c == 3 || d) { }`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Strings">
        <p>
          As strings são usadas para armazenar textos. Para criar uma string
          devemos declarar o texto entre aspas duplas ou simples
        </p>
        <CodeCmp language="javascript">{`var fruta = "manga"`}</CodeCmp>
        <p>
          Quando strings de números são somadas o resultado sera a concatenação
          dos valores.
        </p>
        <CodeCmp language="javascript">
          {`var soma "2" + "2" // soma = 22`}
        </CodeCmp>
        <p>
          Também podemos concatenar strings usando o operador $&#123; &#125;.
          Ele ira concatenar os valores de uma forma mais concisa e legível do
          que concatenar várias strings e variáveis usando o operador +.
        </p>
        <CodeCmp language="javascript">
          {`const nome = 'João'; 
const idade = 25;
console.log("Olá, meu nome é $ {nome}; e eu tenho $ {idade} anos.");
// Saída: "Olá, meu nome é João e eu tenho 25 anos."`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Transformando Strings em Números">
        <p>
          Para fazer contas usando strings de números e necessário
          transforma-los em numbers antes. Para isso usamos
          &quot;parseInt(number)&quot; em números inteiros e
          &quot;parseFloat(number)&quot;para números racionais
        </p>
        <CodeCmp language="javascript">
          {`var a = "1" 
parseInt(a) = 1`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Alert e Prompt">
        <p>
          O &quot;alert()&quot; e o &quot;prompt()&quot; criam caixas de texto
          na página. O alert mostra uma mensagem na tela, já o prompt permite a
          interação com o usuário da página com um formulário.
        </p>
        <CodeCmp language="javascript">
          {`alert("Olá, tudo bem?") 
prompt("Qual o seu nome?")`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Condicionais">
        <p>
          As condicionais permitem que logicas de programação sejam criadas.
          Usando essa logica e possível programar uma ação se um comportamento
          acontecer e outra se não acontecer
        </p>

        <h3>IF ELSE</h3>
        <p>
          Para criar uma condicional if else, devemos declarar entres parenteses
          os requisitos de comparação.
        </p>
        <CodeCmp language="javascript">
          {`var idade = 18

if (idade >= 18) {
  console.log("pode beber álcool no Brasil, mas não nos usa")
} else if (idade >= 21) {
  console.log("pode beber no álcool Brasil e nos usa")
} else {
  console.log("não pode beber álcool")
}`}
        </CodeCmp>

        <h3>Operador Ternário</h3>

        <p>
          O operador ternário e semelhante ao if, porem de uma forma mais
          simplificada. Com ele podemos fazer verificações simples de sim ou não
        </p>

        <CodeCmp language="javascript">
          {`let idade = 18

idade >= 18 ? console.log("pode beber álcool no Brasil") :
  console.log("pode beber álcool")`}
        </CodeCmp>

        <h3>Switch</h3>
        <p>
          O switch funciona de forma semelhante o if, com a diferença que ele
          consegue analisar retorno de um elemento mesmo que não seja um
          boolean. com ele podemos, por exemplo, criar condicionais para strings
        </p>
        <CodeCmp language="javascript">
          {`switch (idade) {
  case "tenho menos de 18":
    console.log("não pode beber álcool")
    break
  case "tenho mais de 18":
    console.log("pode beber álcool no Brasil")
    break
  case "tenho mais de 21":
    console.log("pode beber álcool no Brasil e nos usa")
    break
  default:
    console.log("ouve algum erro")
  default
}`}
        </CodeCmp>
        <p>
          Ps: diferente dos outros condicionais o switch ira executar todas as
          vezes que uma condição for verdade. Para que isso não aconteça devemos
          declarar um &quot;break&quot; no fim de cada condição
        </p>
      </SectionCmp>

      <SectionCmp title="Repetição">
        <p>
          As estruturas de Repetição servem para criar Repetições de código.
        </p>
        <h3>FOR</h3>
        <p>
          O for pode ser usado quando sabemos quantas vezes o código ira
          repetir. para o usar devemos declarar: o valor inicial do index, a
          condição da repetição e um valor de atribuição a cada repetição.
        </p>
        <CodeCmp language="javascript">
          {`for (let index = 0; index & gt; array.length; index++) {
  const element = array[index]
}`}
        </CodeCmp>
        <p>
          ps: o objeto &quot;.length&quot; retorna a quantidade de elementos
          presentes em um array.
        </p>
        <h3>for…of e for…in</h3>
        <p>
          Em 2015 foi introduzido no js o for of e o for in. Com eles é possível
          criar de forma abreviada uma estrutura de repetição que percorre um
          array e retora sua quantidade de elementos(for in) ou seus
          elementos(for of)
        </p>

        <CodeCmp language="javascript">
          {`const letras = ['a', 'b', 'c', 'd', 'e']; 

for (let letra of letras) {
  console.log(letra); 
} // resultado: 1, 2, 3, 4, 5 

for (let letra in letras) {
  console.log(letra); 
} // resultado: 0, 1, 2, 3, 4`}
        </CodeCmp>
        <h3>while</h3>
        <p>
          O while e semelhante ao for, com a diferença que ele pode repetir
          infinitamente, já que não é obrigatório declarar um valor de
          Incremento.
        </p>
        <CodeCmp language="javascript">
          {`while (numero > 5) { console.log("impressão2"); numero++; }`}
        </CodeCmp>

        <h3>forEach</h3>
        <p>
          O método forEach é uma função de ordem superior(callback), que
          percorre um array e é executa uma função de retorno para cada elemento
          index. O forEach pode ser usado para atribuir o valor do array e um
          variável, ou mesmo a modificar
        </p>
        <CodeCmp language="javascript">
          {`const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (numero) {
  console.log(numero);
});numbers`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Arrays">
        <p>
          Arrays são conjuntos de strings, ou outros, que são usados para
          armazenar dados. Para cria um array devemos declarar seu elementos
          entre couchettes.
        </p>
        <p>
          A numeração das strings começa no 0 e normalmente elas são usadas
          juntas ao for/while.
        </p>

        <CodeCmp language="javascript">
          {`let string = ["batata", 2, true]
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Funções">
        <p>
          As functions servem para armazenar um funções a serem executadas
          futuramente. Para criar uma função se usa a seguinte estrutura:
        </p>
        <CodeCmp language="javascript">{`function name(params) {}`}</CodeCmp>

        <p>
          Funções também pode ser atribuídas a variáveis, sendo assim as
          variáveis pode ser utilizada para chamar as funções
        </p>

        <CodeCmp language="javascript">
          {`let func = function (params) {}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Objetos">
        <p>
          Objetos(object) são semelhante a strings, com a diferença que cada
          elemento do objeto tem uma &quot;chave&quot; de acesso Para criar um
          objeto primeiro declaramos a chave e, separado por dois pontos, o seu
          valor.
        </p>
        <CodeCmp language="javascript">
          {`var alunos = var alunos = {
  nome: "João",
  idade: 32
}`}
        </CodeCmp>
        <h3>Propriedades</h3>
        <p>
          Existem varias formas de se adicionar uma nova chave a um objeto. Uma
          maneira seria declarar o objeto, sua chave e atribuir o novo valor
        </p>
        <CodeCmp language="javascript">
          {`alunos.sobrenome = "oliveira";`}
        </CodeCmp>
        <p>
          Outra maneira seria declarando a chave entre couchettes. Dessa maneira
          também é possível atribuir variáveis ao objeto.
        </p>
        <CodeCmp language="javascript">
          {`var alunos = { } 
alunos[novaPropriedade] = Daniel`}
        </CodeCmp>

        <h3>Métodos</h3>

        <p>
          Quando falamos em objetos, métodos(methods) são funções atribuídas a
          propriedades dos objetos. para utilizar essa funções de forma mais
          simplificada podemos usar o &quot;this&quot;. o this e uma propriedade
          que assume posição do elemento onde esta sendo executado.
        </p>
        <CodeCmp language="javascript">
          {`var aluno1 = {
  nome: "Patrick",
  notas: [1, 2],
  media: function () {
    (this.notas[0] + this.notas[1]) / 2
  }
}`}
        </CodeCmp>

        <p>
          O uso do this se torna mais util ainda quando usamos ele para declara
          vários valores iguais. Nessas situações podemos declarar a função de
          forma externa e a executar em cara repetição
        </p>
        <CodeCmp language="javascript">
          {`function calc_media() {
  return (this.notas[0] + this.notas[1]) / 2
}
var aluno1 = {
  nome: "Patrick",
  notas: [8, 9],
  media: calc_media
}
var aluno2 = {
  nome: "Marly",
  notas: [7, 7],
  media: calc_media
} `}
        </CodeCmp>
        <h3>Construtores</h3>
        <p>
          Existe uma outra maneira de construir um objeto. Desta outra maneira
          os argumentos do objeto serão criados primeiro e o objeto logo em
          seguida.
        </p>
        <CodeCmp language="javascript">
          {`function aluno(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

var a = new aluno("Patrick", "Daniel")`}
        </CodeCmp>

        <p>
          Ps: de forma grosseira podemos dizer que métodos são como funções e
          propriedades como variáveis
        </p>
      </SectionCmp>

      <SectionCmp title="Const, Let e Var">
        <p>
          As três maneiras de se declarar uma variável com js são: const, var e
          let.
        </p>
        <p>
          A Const, Let e Var são semelhantes, mais possuem diferenças
          significativas
        </p>

        <h3>Const</h3>
        <p>
          As constantes recebem valores que não podem ser alterados futuramente
          no código,como nomes. As contantes também são variáveis globais, sendo
          assim elas estarão ativas em todo o código.
        </p>
        <CodeCmp language="javascript">{`var nome = Patrick;`}</CodeCmp>
        <h3>Var</h3>
        <p>
          As variáveis tem funções semelhantes as constantes, porem elas podem
          ser modificadas apos serem declaras(idades por exemplo). var&apos;s
          também são variáveis globais.
        </p>
        <CodeCmp language="javascript">{`var idade = 19;`}</CodeCmp>
        <p>Ps: var&apos;s caíram em desuso após a criação das let&apos;</p>
        <h3>Let</h3>
        <p>
          As let&apos;s surgiram para consertar um &quot;erro&quot; das
          var&apos;s que é serem variáveis globais. Usando as let&apos;s ao
          declarar variáveis dentro de função,por exemplo, essa variável só ira
          existir dentro daquela função
        </p>
        <CodeCmp language="javascript">
          {`function => {let idade = 19}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Window">
        <p>
          O window e a função padrão do JS. O console, alert, document, etc. são
          alguns dos objetos do window.
        </p>
        <CodeCmp language="javascript">
          {`console.log === window.console.log(); 
alert() === window.alert()`}
        </CodeCmp>
      </SectionCmp>
      <SectionCmp title="DOM">
        <p>
          DOM (Document Object Model) em JavaScript é uma representação
          estruturada em objetos do HTML e XML, permitindo a manipulação
          dinâmica e interativa dos elementos e conteúdos desses documentos.
        </p>
        <p>
          para que o javaScript de uma pagina funcione perfeitamente ele deve
          ser executado após o carregamento do DOM. para isso podemos declara-lo
          no fim de uma pagina html ou adicionar um atributo &quot;defer&quot;
          ao declara-lo
        </p>
        <CodeCmp language="html">
          {`<script src="script.js" defer></script>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Document">
        <p>
          O &quot;document&quot; é um objeto que representa a página web
          carregada no navegador. Ele fornece métodos para manipular os
          elementos HTML e CSS, bem como para interagir com o usuário. Com o
          objeto &quot;document&quot;, é possível acessar e modificar elementos
          da página, criar novos elementos, alterar o estilo dos elementos, ect.
        </p>
        <CodeCmp language="javascript">
          {`const element = document.getElementById("id")`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Acessando elementos HTML com JS">
        <p>
          Existem algumas maneiras de modificar o html pelo Js. Em elementos
          nativos do html podemos declara-los em uma variável em formato de
          cascata começando pelo document:
        </p>
        <CodeCmp language="javascript">
          {`const title = document.head.title`}
        </CodeCmp>
        <p>
          No caso de outros elementos precisamos declarar o DOM em uma variável
          usando seu id, class ou name pelos métodos abaixo
        </p>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>getElementById()</td>
              <td>Retorna o elemento com o ID especificado.</td>
            </tr>
            <tr>
              <td>getElementsByClassName()</td>
              <td>
                Retorna uma lista de elementos que possuem a classe
                especificada.
              </td>
            </tr>
            <tr>
              <td>getElementsByTagName()</td>
              <td>Retorna uma lista de elementos com a tag especificada.</td>
            </tr>
            <tr>
              <td>querySelector()</td>
              <td>
                Retorna o primeiro elemento que corresponde ao seletor
                especificado.
              </td>
            </tr>
            <tr>
              <td>querySelectorAll()</td>
              <td>
                Retorna uma lista de todos os elementos que correspondem ao
                seletor especificado.
              </td>
            </tr>
            <tr>
              <td>parentNode</td>
              <td>Retorna o elemento pai do elemento atual.</td>
            </tr>
            <tr>
              <td>childNodes</td>
              <td>Retorna uma lista de todos os filhos do elemento atual.</td>
            </tr>
            <tr>
              <td>nextSibling</td>
              <td>Retorna o próximo irmão do elemento atual.</td>
            </tr>
            <tr>
              <td>previousSibling</td>
              <td>Retorna o irmão anterior do elemento atual.</td>
            </tr>
            <tr>
              <td>firstChild</td>
              <td>Retorna o primeiro filho do elemento atual.</td>
            </tr>
            <tr>
              <td>lastChild</td>
              <td>Retorna o último filho do elemento atual.</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Modificando elementos">
        <p>
          Usando a propriedade &quot;inner&quot;, juntamente a um
          &quot;get.element&quot; podemos adicionar ou modificar elementos no
          dom pelo Js.
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>innerHTML</td>
            <td>Define ou retorna o conteúdo HTML de um elemento.</td>
          </tr>
          <tr>
            <td>innerText</td>
            <td>
              Define ou retorna o conteúdo de texto de um elemento, sem incluir
              as tags HTML.
            </td>
          </tr>
          <tr>
            <td>textContent</td>
            <td>
              Define ou retorna o conteúdo de texto de um elemento, incluindo as
              quebras de linha.
            </td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="class List">
        <p>
          O class list é um objeto do java script que nos permite acessar e
          modificar classes de um elemento do DOM
        </p>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>add</td>
              <td>Adiciona uma ou mais classes ao elemento.</td>
            </tr>
            <tr>
              <td>remove</td>
              <td>Remove uma ou mais classes do elemento.</td>
            </tr>
            <tr>
              <td>toggle</td>
              <td>
                Adiciona a classe se ela não estiver presente, remove-a se já
                estiver.
              </td>
            </tr>
            <tr>
              <td>contains</td>
              <td>
                Retorna um valor booleano indicando se o elemento possui ou não
                a classe especificada.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="substring">
        <p>
          O objeto substring é usado para retornar um subconjunto de uma string
          a partir de um índice inicial até um índice final. O primeiro valor
          indica onde valor do índice a nova string começa e o segundo onde
          termina. se o segundo valor não for declarado a string ira partir do
          novo valor inicial até o fim
        </p>
        <CodeCmp language="javascript">
          {`let str = "Hello World";

let subStr = str.substring(1, 5);
console.log(subStr); // retora "ello"
subStr = str.substring(7);
console.log(subStr); // retorna "orld"`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Eventos">
        <p>
          Os eventos servem para disparar uma função quando ocorrer alguma
          variação no html. Com ele podemos iniciar uma função com um click, uma
          arrastada de mouse, o preenchimento de um input, etc.
        </p>
        <CodeCmp language="javascript">
          {`<p onclick = "this.style.color = 'red'"> Paragrafo vermelho </p>`}
        </CodeCmp>
        <p>
          Também e possível utilizar um evento diretamente no script da pagina.
          Abaixo duas maneiras.
        </p>
        <CodeCmp language="javascript">
          {`let t1 = document.getElementById("t1");
t1.addEventListener("click", function);
t1.onclick = function;`}
        </CodeCmp>

        <p>Abaixo uma lista com todos os eventos do js.</p>
        <table>
          <tr>
            <th>Evento</th>
            <th>Origem</th>
            <th>Descrição</th>
            <th>Elementos onde se aplica</th>
          </tr>
          <tr>
            <th>onload</th>
            <td>documento</td>
            <td>Disparado quando documento é carregado</td>
            <td>body,frameset</td>
          </tr>
          <tr>
            <th>onunload</th>
            <td>documento</td>
            <td>
              Disparado quando documento é descarregado de janela ou de frame
            </td>
            <td>body,frameset</td>
          </tr>
          <tr>
            <th>onsubmit</th>
            <td>documento</td>
            <td>Disparado quando formulário é submetido</td>
            <td>form</td>
          </tr>
          <tr>
            <th>onreset</th>
            <td>mouse</td>
            <td>
              Disparado quando formulário é &quot;limpado&quot; via botão de
              reset
            </td>
            <td>form</td>
          </tr>
          <tr>
            <th>onselect</th>
            <td>mouse</td>
            <td>
              Disparado quando texto é selecionado numa area de entrada de texto
            </td>
            <td>
              input type=&quot;text&quot;, ou type=&quot;password&quot; ou
              textarea
            </td>
          </tr>
          <tr>
            <th>onblur</th>
            <td>mouse/teclado</td>
            <td>
              Disparado quando elemento de entrada do formulário perde o foco,
              i.é, qdo texto fora do elemento é selecionado
            </td>
            <td>a, area, button, input, select, textarea</td>
          </tr>
          <tr>
            <th>onchange</th>
            <td>mouse/teclado</td>
            <td>Disparado quando elemento perde o foco e foi modificado</td>
            <td>input, select,textarea</td>
          </tr>
          <tr>
            <th>onclick</th>
            <td>mouse</td>
            <td>
              Disparado quando botão de formulário é pressionado ou link é
              selecionado via click do mouse
            </td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>ondblclick</th>
            <td>mouse</td>
            <td>Idem, mas click duplo do mouse</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onfocus</th>
            <td>mouse/teclado</td>
            <td>
              Disparado quando o elemento recebe foco: clicando o mouse dentro
              do elemento ou entrando no mesmo via Tab
            </td>
            <td>a, area, button, input, select, textarea</td>
          </tr>
          <tr>
            <th>onmousedown</th>
            <td>mouse</td>
            <td>
              Disparado quando mouse é pressionado enquanto está sobre um
              elemento
            </td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onmouseup</th>
            <td>mouse</td>
            <td>Idem, mas quando mouse é despressionado</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onmousemove</th>
            <td>mouse</td>
            <td>Disparado quando mouse é movido enquanto sobre elemento</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onmouseout</th>
            <td>mouse</td>
            <td>
              Disparado quando mouse é movido fora do elemento onde estava
            </td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onmouseover</th>
            <td>mouse</td>
            <td>Disparado quando cursor do mouse é movido sobre elemento</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onkeydown</th>
            <td>teclado</td>
            <td>Disparado quando tecla é pressionada.</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onkeypress</th>
            <td>teclado</td>
            <td>Disparado quando tecla é pressionada e liberada.</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>onkeyup</th>
            <td>teclado</td>
            <td>Disparado quando tecla pressionada é liberada.</td>
            <td>maioria</td>
          </tr>
          <tr>
            <th>DOMContentLoaded</th>
            <td>dom</td>
            <td>Disparado quando o elemento dom é carregado</td>
            <td>dom</td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Atributos de eventos">
        <p>
          O atributos de eventos podem ser usados junto a eventos para obter
          informações deles. A baixo os principais
        </p>
        <table>
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>event.target</td>
              <td>
                Retorna o elemento DOM em que o evento foi originalmente
                acionado.
              </td>
            </tr>
            <tr>
              <td>event.currentTarget</td>
              <td>
                Retorna o elemento DOM ao qual o manipulador de evento está
                anexado.
              </td>
            </tr>
            <tr>
              <td>event.type</td>
              <td>
                Retorna o tipo de evento acionado (por exemplo,
                &quot;click&quot;, &quot;keydown&quot;, etc.).
              </td>
            </tr>
            <tr>
              <td>event.keyCode</td>
              <td>
                Retorna o código da tecla pressionada em eventos de teclado.
              </td>
            </tr>
            <tr>
              <td>event.key</td>
              <td>
                Retorna o valor da tecla pressionada em eventos de teclado.
              </td>
            </tr>
            <tr>
              <td>event.clientX</td>
              <td>
                Retorna a coordenada X do ponteiro do mouse em relação à janela
                do navegador.
              </td>
            </tr>
            <tr>
              <td>event.clientY</td>
              <td>
                Retorna a coordenada Y do ponteiro do mouse em relação à janela
                do navegador.
              </td>
            </tr>
            <tr>
              <td>event.pageX</td>
              <td>
                Retorna a coordenada X do ponteiro do mouse em relação ao
                documento inteiro.
              </td>
            </tr>
            <tr>
              <td>event.pageY</td>
              <td>
                Retorna a coordenada Y do ponteiro do mouse em relação ao
                documento inteiro.
              </td>
            </tr>
            <tr>
              <td>event.preventDefault()</td>
              <td>Cancela o comportamento padrão associado ao evento.</td>
            </tr>
            <tr>
              <td>event.stopPropagation()</td>
              <td>Impede que o evento se propague além do elemento atual.</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Elementos pai e filhos">
        <p>
          E possível acessar os pais e filhos de elemento usando os atributos
          children(filho) e parent(pai).
        </p>
        <CodeCmp language="javascript">
          {`const SectionCmp = document.getElementById("SectionCmp")
console.log(SectionCmp.parentElement); 
// retorna um array com os filhos 
console.log(SectionCmp.children) 
// retorna o elemento pai`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Biblioteca Math">
        <p>
          A Biblioteca math funciona como um auxilio para criar contas. abaixo
          alguns exemplos
        </p>
        <table>
          <thead>
            <tr>
              <th>Objeto</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Math.PI</td>
              <td>O valor de π (pi)</td>
            </tr>
            <tr>
              <td>Math.E</td>
              <td>O valor de e, a base do logaritmo natural</td>
            </tr>
            <tr>
              <td>Math.abs()</td>
              <td>Retorna o valor absoluto de um número (ou módulo)</td>
            </tr>
            <tr>
              <td>Math.round()</td>
              <td>Arredonda um número para o inteiro mais próximo</td>
            </tr>
            <tr>
              <td>Math.ceil()</td>
              <td>Arredonda um número para cima, para o próximo inteiro</td>
            </tr>
            <tr>
              <td>Math.floor()</td>
              <td>Arredonda um número para baixo, para o inteiro anterior</td>
            </tr>
            <tr>
              <td>Math.min()</td>
              <td>
                Retorna o menor valor entre dois ou mais números ou elementos de
                uma matriz/array
              </td>
            </tr>
            <tr>
              <td>Math.max()</td>
              <td>
                Retorna o maior valor entre dois ou mais números ou elementos de
                uma matriz/array
              </td>
            </tr>
            <tr>
              <td>Math.pow()</td>
              <td>Retorna a base elevada ao expoente</td>
            </tr>
            <tr>
              <td>Math.sqrt()</td>
              <td>Retorna a raiz quadrada de um número</td>
            </tr>
            <tr>
              <td>Math.random()</td>
              <td>Retorna um número aleatório entre 0 e 1</td>
            </tr>
            <tr>
              <td>Math.sin()</td>
              <td>Retorna o seno de um ângulo em radianos</td>
            </tr>
            <tr>
              <td>Math.cos()</td>
              <td>Retorna o cosseno de um ângulo em radianos</td>
            </tr>
            <tr>
              <td>Math.tan()</td>
              <td>Retorna a tangente de um ângulo em radianos</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="JSON">
        <p>
          O JSON serve para transformar objetos e strings, ou vice versa.
          Normalmente ele é usado junto a um servidor para transformar dados
        </p>
        <p>
          O JSON possui dois objetos: o stringify e o parse. o stringify
          transforma um objeto em um string, ja o parse transforma uma string em
          um objeto
        </p>
        <p>
          JSON.stringify(): transforma um objeto em string; let d =
          JSON.parse(): transforma uma string em objeto
        </p>
        <CodeCmp language="javascript">
          {`let objeto = {
  nome: "Patrick",
  idade: 19
}
objeto = JSON.stringify(objeto)
// returna a string {"nome":"Patrick","idade":19}
objeto = JSON.parse(objeto)
// retorna o objeto {"nome":"Patrick","idade":19}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="eval">
        <p>
          O eval é um método do js capaz de executar cálculos matemáticos em uma
          String
        </p>
        <CodeCmp language="javascript">
          {` let resultado = eval("2 + 2"); 
 console.log(resultado); // Saída: 4`}
        </CodeCmp>
        <p>
          ps:O eval também consegue interpretar uma cadeia de caracteres em
          JSON, ou executar uma sequência de comandos em JavaScript.
        </p>
      </SectionCmp>

      <SectionCmp title="Ordem crescente e decrescente">
        <p>
          O js nativamente possui uma função capaz de organizar elementos e
          ordem crescente ou decrescente e este é o sort(). O método sort()
          permite classificar elementos de um array local. Além de retornar o
          array ordenado, ele também altera as posições dos elementos no array
          original.
        </p>
        <p>
          O sort por padrão faz a comparação do valor em string dos elementos.
          Para corrigir isso usamos uma função de comparação como parâmetro da
          função
        </p>
        <CodeCmp language="javascript">
          {`let number = [0, 1, 2]

numbers.sort((a, b) => {
  if (a > b) = return 1
  if (a < b) = return -1 
  return 0
})`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Local Storage">
        <p>
          O local storage e uma propriedade do window que permite que dados
          sejam persistidos mesmo após o recarregamento de uma página. Os tres
          objetos necessários para isso são:
        </p>
        <table>
          <thead>
            <tr>
              <th>Objeto localStorage</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>localStorage.setItem()</td>
              <td>Armazena um valor em uma chave no localStorage.</td>
            </tr>
            <tr>
              <td>localStorage.getItem()</td>
              <td>
                Recupera um valor armazenado em uma específica no localStorage.
              </td>
            </tr>
            <tr>
              <td>localStorage.removeItem()</td>
              <td>Remove um item específico do localStorage.</td>
            </tr>
            <tr>
              <td>localStorage.clear()</td>
              <td>Remove todos os itens do localStorage.</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Timer e Intervalo">
        <p>
          Para disparar um evento após um tempo pré-definido utilizamos o
          método, do window, setTimeout. Para declarar um set timeout são usados
          2 argumentos: uma função ou semelhante e o tempo para o a função ser
          disparada(em milissegundos)
        </p>
        <CodeCmp language="javascript">
          {`setTimeout(mudarCor => {
  const h1 = document.getElementById("h1")
  h1.classList.add("red")
}, 3000)`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Strict mode">
        <p>
          O java script permite que voce declare variáveis globais(sem usar
          var,let ou const) mas isso não é recomendado e pode causar problemas
          no código posteriormente. Também possível evitar que essas var globais
          sejam aceitas: para isso devemos declarar &quot;use strict&quot; no
          inicio do código
        </p>
        <CodeCmp language="javascript">
          {`'use strict'
fruta_predileta = "batata"
// ao usar o "Use strict" a variável global fruta_predileta não sera aceita pelo código`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="This e Bind">
        <p>
          Toda função Js possui o método bind. Esse método é usado para definir
          um valor ao this de uma função.
        </p>
        <CodeCmp language="javascript">
          {`function Imprimir_Nome() {
  console.log(this)
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Arrow Functions">
        <p>
          As arrow functions funções anonimas com uma sintaxe reduzida. Elas são
          comumente usadas como Callbacks em funções de ordem superior, métodos
          de objetos, e funções do set timeout. função anonima:
        </p>
        <CodeCmp language="javascript">
          {`// função normal 
let normal = function (b) {
  return b * 2
}
// função de flecha:
let arrow = b => b * 2`}
        </CodeCmp>
        <p>
          Ps:as funções arrow não possui um bind e não funcionam com o
          &quot;this&quot;
        </p>
      </SectionCmp>

      <SectionCmp title="Códigos assíncronos">
        <p>
          os códigos assíncronos são um tipo de código em que a execução não
          ocorre sequencialmente de cima para baixo. Em vez disso, o código
          assíncrono permite que outras tarefas sejam executadas simultaneamente
          enquanto uma tarefa está sendo processada em segundo plano.
        </p>
        <h3>Callback</h3>
        <p>
          O callback é uma maneira de lidar com códigos assíncronos. Com ele é
          possível Declarar uma função como um argumento de outra função, e essa
          função argumento sera executada junto a função principal.
        </p>
        <p>
          Esse conceito é util quando trabalhamos com servidores, onde nosso js
          e o servidor ficam assíncronos.
        </p>
        <CodeCmp language="javascript">
          {`let userList = []

function printUser() {
  console.log(lista_de_user)
}
function addUsers(nome, callback) {
  setTimeout(() => {
    lista_de_users.push(nome)
    callback()
  }, 1000);
}
addUsers("Patrick", printUsers)`}
        </CodeCmp>
        <p>
          Esse tipo de função também pode ser conhecido função de ordem superior
          ou função de primeira classe
        </p>

        <h3>Promises</h3>
        <p>
          A promise é um objeto que surgiu com um substituto para o callback.
          Ela possui os mesma função do callback, porém com uma sintaxe melhor
          estruturada e objetos únicos para facilitar a construção do
          código(then e catch())
        </p>
        <p>
          Para usar a promise primeiro declaramos em uma var uma new promise,
          com uma function que recebe os atributos resolve e reject. Após isso
          verificamos um um if/else se a inserção do elemento foi um sucesso e
          por fim criamos um return para a promise
        </p>
        <p>
          Apos declararmos a função promise usamos o then para executar função
          callback.
        </p>
        <CodeCmp language="javascript">
          {`let users = ["Patrick"]

function addUsers(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      users.push(nome)
      let error = false;
      if (!error) {
        resolve()
      } else {
        reject({ msg: "erro 69" })
      }
    }, 1000);
  })
  return promise;
}
function printUsers() {
  console.log(users)
}
addUser("Daniel").then(printUsers)`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Async Await">
        <p>
          uma outra maneira de executar o promise é usar o async await. Este é
          um modo de somente executar uma função após o elemento await ser
          executado
        </p>
        <p>
          Para usa-lo precisamos declarar uma função como async function e
          declara o função do promise como await.
        </p>
        <CodeCmp language="javascript">
          {`let users = ["Patrick"];

function addUser(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      users.push(nome)
      let error = false;
      if (!error) {
        resolve()
      } else {
        reject({ msg: "erro 69" })
      }
    }, 1000);   
  })
  return promise;
}
function printUsers() {
  console.log(users)
}
async function executar() {
  await addUser("Daniel")
  printUsers()
}
executar()`}
        </CodeCmp>
      </SectionCmp>
      <SectionCmp title="Filter">
        <p>
          O filter é uma função de todos os arrays. Ao usa-la ela Pega todos os
          elementos de um array e passa em seu callback, e ela retorna em uma
          nova string todos os elemento que forem verdadeiros ao passar pelo
          callback
        </p>
        <CodeCmp language="javascript">
          {`function novo_aluno(nome, idade) {
  return { nome, idade }
}
let alunos = [
  novo_aluno("Patrick", 19),
  novo_aluno("Marly", 54),
  novo_aluno("Edmar", 51),
  novo_aluno("Donira", 97)
]
let alunos_mais_20 = alunos.filter(alunos => { return alunos.idade > 20 })`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Map">
        <p>
          O map é uma propriedade das strings que cria uma nova string usando
          dados da string original. Com ela, por exemplo é possível criar uma
          string informando os dados de um objeto da string mãe.
        </p>
        <CodeCmp language="javascript">
          {`function novo_aluno(nome, idade) {
  return { nome, idade }
}

let alunos = [
  novo_aluno("Patrick", 19),
  novo_aluno("Marly", 54)
]

let string_dados_alunos = alunos.map(alunos => {
  return alunos.nome + " tem " + alunos.idade + " anos"
}) // retorna Patrick tem 19 anos; Marly tem 54 anos`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Valor vs Referência">
        <p>
          No js existem dois tipos de atribuições, sendo elas a atribuição por
          valor, e a atribuição por referencia. Uma diferença relevante entre
          esses dois é que quando tentamos clonar um elemento de atribuição por
          referencia, altera-lo também irá alterar o elemento clonado.
        </p>
        <p>
          Elementos primitivos como stings, numbers, booleans, etc, são
          atribuições de valor, sendo assim, atribui-los em uma nova variável
          irá gerar um clone que não afeta a variável original
        </p>
        <CodeCmp language="javascript">
          {`let minha_idade = 19; 
let minha_proxima_idade = minha_idade;
minha_proxima_idade = 20;
//minha_idade recebe 19;
//minha_proxima_idade recebe 20;
`}
        </CodeCmp>
        <p>
          Por outro lado valores como arrays e objetos recebem valores por
          referencia, sendo assim precisamos usar outros métodos para clona-los.
          Para clonar strings podemos usar um &quot;slice()&quot;, por exemplo,
          que quando não recebe um valor especifico irá criar um clone
          independente do array original.
        </p>
        <CodeCmp language="javascript">
          {`let frutas1 = ["maçã"] 
let frutas2 = frutas1;
frutas2.push("banana") // tanto fruta1 quanto fruta2 recebem ['maçã', 'banana']
 
let frutas1 = ["maçã"]
let frutas2 = frutas1.slice();
frutas2.push("banana")
// frutas1 recebe ['maçã']; fruta2 recebe ['maçã', 'banana']
`}
        </CodeCmp>
        <p>
          Para clonar objetos podemos declara o objeto clonado como um
          object.assign.
        </p>
        <CodeCmp language="javascript">
          {`let alunoA = {nome: "Patrick", idade: 19 } 
let alunoB = alunoA; 
alunoB.idade = 20 
// tanto alunoA quanto AlunoB retornam idade: {nome: "Patrick", idade: 20 } 
 
let alunoA = {nome: "Patrick", idade: 19 } 
let alunoB = Object.assign({ }, alunoA); 
alunoB.idade = 20 
// alunoA retorna {nome: "Patrick", idade: 19 }; aluno b retorna {nome: "Patrick", idade: 20 }
`}
        </CodeCmp>
        <p>
          Também podemos usar o spread operator para criar copias tanto do
          arrays quanto de objetos:
        </p>
        <CodeCmp language="javascript">
          {`let frutas1 = ["maçã"] 
let frutas2 = [...frutas1];
frutas2.push("banana") // frutas1 recebe ['maçã']; fruta2 recebe ['maçã', 'banana']
 
let alunoA = {nome: "Patrick", idade: 19 }
let alunoB = {...alunoA};
alunoB.idade = 20 // alunoA retorna {nome: "Patrick", idade: 19 }; aluno b retorna {nome:
"Patrick", idade: 20 }
`}
        </CodeCmp>
        <p>aprofundação do spread operator no proximo modulo</p>
      </SectionCmp>

      <SectionCmp title="Spread Operator">
        <p>
          O spread operator(&quot;[...]&quot;) além de criar copias de objetos e
          strings, também pode ser usado para concatenar estes elementos
        </p>

        <CodeCmp language="javascript">
          {`let aluno1 = {nome: "Patrick", idade: 19 } 
let aluno2 = {endereco: "cesário Machado", numero: 998425317 } 
 
let aluno3 = aluno1 + aluno2 
// retorna [object Object][object Object] 
let aluno4 = {...aluno1, ...aluno2 } 
// retorna {nome: 'Patrick', idade: 19, endereco: 'rua batata', numero: 998776655}
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Desestruturando um objeto">
        <p>
          E possível desestruturar um objeto e usar apenas uma de suas chaves.
          para isso declaramos um objeto com essas chave que recebe a chave
          original.
        </p>
        <CodeCmp language="javascript">
          {`let aluno1 = {nome: "Patrick", idade: 19, sexo: "masculino" } 
 
let {nome, idade} = aluno1 
console.log(nome) // imprimi {nome: "Patrick"} 
console.log(idade) // imprimi {idade: 19}
`}
        </CodeCmp>
        <p>
          Usando o spread operator junto a esta técnica podemos criar uma chave
          que retorna as chaves restantes.
        </p>
        <CodeCmp language="javascript">
          {`let aluno1 = {nome: "Patrick", idade: 19, sexo: "masculino" } 
let {nome, ...resto } = aluno1 
console.log(resto)  // retorna {idade: 19, sexo: "masculino" }`}
        </CodeCmp>
        <p>
          Essa técnica também pode ser usada em strings, porem neste caso o a
          referencia dos valores sera em relação a posição, e não a chave
        </p>
        <CodeCmp language="javascript">
          {`let frutas = ["banana", "morango", "uva", "manga"] 
let [fruta0, fruta1, ...resto] = frutas
console.log(fruta0) // imprimi "banana"
console.log(fruta1) // imprimi "morango"
console.log(...resto) // imprimi ["uva", "manga"]
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Reduce">
        <p>
          O reduce é uma propriedade dos arrays que permite a soma ou
          concatenação(a depender o tipo primitivo) dos valores de um array.
          para isso criamos uma estrutura onde declaramos como valores do reduce
          uma função e o valor inicial a Operação
        </p>
        <CodeCmp language="javascript">
          {`function gerar_aluno(nome, idade) {
  return { nome, idade }
}

let lista_de_alunos = [
  gerar_aluno("Patrick", 19),
  gerar_aluno("Marly", 54)
]

console.log(
  lista_de_alunos.reduce((valor_inicial, gerar_aluno) => {
    return valor_inicial + gerar_aluno.idade
  }, 0)) // imprimi 73 (soma de 19 e 54)`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Fetch">
        <p>
          O fetch é uma propriedade que nos permite isar dados em api&apos;s. Ao
          usar dados em api&apos;s nós podemos criar códigos com informações
          dinâmicas
        </p>
        <p>
          Ao usar o fetch em uma url ela ira retornar uma promise, int devemos
          usar o then duas vezes para ter acesso ao objeto com os dados (o
          primeiro then também retorna uma promise)
        </p>
        <CodeCmp language="javascript">
          {`const url = "https://economia.awesomeapi.com.br/last/USD-BRL"
fetch(url)
  .then((response) => {
    return response.json()
    // response é uma resposta http 
  })
  .then((data) => {
    return data
    // retorna um objeto com os dados da api
  })`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="try catch - tratamento de erros">
        <p>
          O tratamento de erros é usado para que erros menores em um código não
          interrompam o funcionamento do código inteiro. Para tratar um erro
          usamos uma estrutura semelhante ao if/else, onde usamos o
          &quot;try&quot; para códigos que não serão executados caso haja um
          erro, catch para quando houver um erro e finality para executar
          independente de um erro ou não
        </p>
        <CodeCmp language="javascript">
          {`try {
  console.log(bem_vindo);
} catch (err) {
  console.log("houve um erro " + err)
}
console.log("patrick")`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="MVC">
        <p>
          O padrão MVC (Model-View-Controller) é Atualmente o padrão de
          arquitetura mais usado no desenvolvimento web. Ele possibilita a
          divisão do projeto em camadas bem definidas, que executam apenas o que
          lhe é atribuído
        </p>
        <p>
          O padrão MVC divide a aplicação em três componentes principais: o
          model que é responsável pela lógica de negócios e interação com o
          banco de dados, o view que é a camada de apresentação responsável por
          exibir as informações ao usuário, por meio da interface gráfica e o
          controller que é o componente que recebe as requisições do usuário,
          processa as informações recebidas e atualiza o modelo e a view
          correspondentes.
        </p>
        <Image
          src={mvcImg}
          alt="Exemplo MVC"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </SectionCmp>
    </>
  )
}
