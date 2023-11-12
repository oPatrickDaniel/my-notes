import SectionCmp from '../../components/section'
import CodeCmp from '../../components/code'

export default function typescriptPage() {
  return (
    <>
      <h1>Typescript</h1>

      <SectionCmp title="Primeiro contato + hello world">
        <p>
          O Typescript é uma variante de javascript com forco em se tornar uma
          linguagem altamente tipada, seguindo paradigmas de programação com o
          poo.
        </p>
        <p>
          No site oficial do ts existe um editor de códigos chamado playground.
          Nele é possível treinar e compartilhar códigos.
        </p>
        <CodeCmp language="javascript">
          {`let mensagem: string = 'Hello World!';
console.log(mensagem);'`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="tsconfig.json">
        <p>
          O tsconfig.json é um arquivo onde configurações do compilador de ts
          ficam salvas. abaixo os principais valores
        </p>
        <table>
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>compilerOptions</td>
              <td>Configurações do compilador TypeScript.</td>
            </tr>
            <tr>
              <td>compilerOptions.target</td>
              <td>
                Versão do JavaScript para a qual o TypeScript será compilado.
              </td>
            </tr>
            <tr>
              <td>compilerOptions.module</td>
              <td>
                Sistema de módulos a ser usado (por exemplo,
                &quot;commonjs&quot;, &quot;es2015&quot;, &quot;amd&quot;,
                etc.).
              </td>
            </tr>
            <tr>
              <td>compilerOptions.outDir</td>
              <td>
                Diretório de saída para os arquivos JavaScript compilados.
              </td>
            </tr>
            <tr>
              <td>compilerOptions.strict</td>
              <td>Ativa ou desativa as verificações estritas do TypeScript.</td>
            </tr>
            <tr>
              <td>compilerOptions.noEmit</td>
              <td>Impede a geração de arquivos JavaScript na compilação.</td>
            </tr>
            <tr>
              <td>include</td>
              <td>
                Padrões de inclusão de arquivos TypeScript para compilação.
              </td>
            </tr>
            <tr>
              <td>exclude</td>
              <td>Padrões de exclusão de arquivos TypeScript da compilação.</td>
            </tr>
            <tr>
              <td>extends</td>
              <td>Caminho para um arquivo tsconfig.json a ser estendido.</td>
            </tr>
            <tr>
              <td>files</td>
              <td>Lista explícita de arquivos TypeScript a serem incluídos.</td>
            </tr>
            <tr>
              <td>references</td>
              <td>
                Referências a projetos em um ambiente de projeto com vários
                projetos.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Type Annotation">
        <p>
          O type Annotation é uma capacidade do ts que nos permite especificar o
          tipo do valor de uma variável. Ela aceita valores como string,
          boolean, number, etc. abaixo alguns exemplos
        </p>
        <CodeCmp language="javascript">
          {`// Variável 

let frutaPredileta: string = "Manga"
console.log(frutaPredileta)

// Array
let animais: string[] = ["gato, cachorro"]
console.log(animais)

// Objeto
let user: {
name: string;
age: number;
sex: string;
}

user = {name: "Patrick", age: 20, sex: "max" }
console.log(user)

// função
function someNumbers(num1: number, num2: number) {

return num1 + num2
}
console.log(someNumbers(3, 5))`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tipos primitivos">
        <h3>boolean</h3>
        <p>
          O boolean ainda dever ser declaro com o type annotation boolean e
          recebe os valores true e false
        </p>
        <p>
          Ps: não usar o type annotation de boolean com letra maiúscula. Boolean
          = object; boolean = type primitive
        </p>
        <CodeCmp language="javascript">
          {`let taskCompleted: boolean = true;
let taskIncomplete: boolean = false;`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Number & Bigint">
        <p>
          O Number e bigInt são tipos primitivo usados para armazenar números. o
          number para números tradicionais e bigInt para números gigantes
        </p>
        <p>Ps: o bigInt so está disponível nas versões Es2020 e ESNext</p>
        <CodeCmp language="javascript">
          {`// number 
let num1: number = -3.14
//hex
let num2: number = 0x37Cf
// octal
let num3: Number = 0o377
// binary
let num4: Number = 0b111001
// number
let big1: bigint = 9007199254740991n
// binary
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n
// hex
let big3: bigint = 0x20000000000003n
// octal
let big4: bigint = 0o400000000000000003n`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Strings">
        <p>Seguindo o mesmo padrão as stings armazenam valores de texto</p>
        <CodeCmp language="javascript">
          {`let user: {
name: string;
age: number
}

user = {name: 'Patrick', age: 20 }

let mensagem: string = 'O usuário se chama $ {user.name} e tem $ {user.age} anos de idade'
console.log(mensagem)`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Arrays">
        <p>
          Os arrays pode ser declarados com colchetes o usando o seu
          objeto(letra maiúscula) seguido do seu tipo.
        </p>
        <CodeCmp language="javascript">
          {`// array com colchetes 
let frutas: string[] = ['banana', 'maça']
// Object Array
let carros: Array &lt;string&gt; = ['Toyota', 'uno']`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tuple">
        <p>
          As Tuplas são variante de strings que pode receber valores de
          diferentes tipos. A quantidade de valores de uma tupla são definidos
          em sua criação. Para que não seja necessários repetir varias vezes o
          type de um tuple podemos usar o spread operator com o respectivo tipo
        </p>
        <CodeCmp language="javascript">
          {`// tuple clássico 
let UserData: [string, string, number] = ['Patrick', 'React Developer', 20]

// tuplas com labels
let animalData: [nome: string, dietaryClass: string, age: number] = ['boi', 'herbívoro', 10]

// tuple com spread Operator
let animals: [string, ...string[]] = ['cachorro', 'gato', 'galinha', 'peixe']

// tuple heterogênea
let animalData2: [number, boolean, ...string[]] = [2, true, ...animals]

// função com tuple
function peopleList(peoples: string[], ages: number[]) {
return [...peoples, ...ages]
}

// labeled tuple com spreedOperator numa função
type Name =
| [fistName: string, lastName: string]
| [fistName: string, lastName: string, age: number]

function returnData(name: Name) {
return [...name]
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Enum">
        <p>
          Os enums servem para armazenar valores numéricos. Eles são uteis por
          terem uma facilidade na troca de valores, reduzir erros de digitação
          dos números, existir apenas em tempo de execução, etc.
        </p>
        <CodeCmp language="javascript">
          {`// enum numérico
enum Language {
Portuguese,
Spanish,
English,
French,
}

// enum string
enum Day {
Monday = 'Seg',
Tuesday = 'Ter',
Wednesday = 'Qua',
Thursday = 'Qui',
Friday = 'Sex',
Saturday = 'Sab',
Sunday = 'Dom'
}
// const enum
const enum Comida {
Hamburger,
Pizza,
Sorvete,
Chocolate,
Barbecue,
}
// function enum
function comida(c: Comida) {
return console.log('Comida deliciosa')
}
// Exemplo prático
enum Tarefa {
Todo,
Progress,
Done,
}
const completeTasks = {
id: 1,
status: Tarefa.Progress,
description: 'A tarefa está em andamento'
}
if (completeTasks.status === Tarefa.Progress) {
console.log('Enviar Email: $ {completeTasks.description}')
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Any">
        <p>
          O tipo any é o padrão do Typescript. Ele pode receber qualquer valor e
          funciona basicamente igual ao javascript
        </p>
        <CodeCmp language="javascript">
          {`let a: any = 1
let b: any = '1'
let c: any = true`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Unknown">
        <p>
          O unknown é semelhante ao any, porem ele evita alguns erros em tempo
          de execução. Por regra, quando não a certeza do tipo esperado usamos
          unknown
        </p>
        <CodeCmp language="javascript">
          {`let a: unknown = 1
let b: unknown = '1'
let c: unknown = true`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Void">
        <p>
          O void representa elementos que não possuem valor. Ele pode ser
          atribuído a funções sem retorno ou a variáveis indefinidas ou nulas
        </p>
        <CodeCmp language="javascript">
          {`function helloWord(): void {
console.log('hello Word')
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Null e Undefined">
        <p>
          O null e Undefined são usados para em valores indefinidos. Uma
          variável declarada com null se torna um objeto; em operações logicas
          null ira retornar 0 enquanto Undefined retornara NaN
        </p>
        <CodeCmp language="javascript">
          {`let a: undefined = undefined
let b: null = null`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Never">
        <p>
          O tipo never não pode conter valores. Ele costuma ser usado em funções
          de erros, por exemplo
        </p>
        <CodeCmp language="javascript">
          {`function message(): never {
throw new Error
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Object">
        <p>
          O tipo object representa todos os valores que não são primitivos.
          Objetos sào usado para guardar valores em chaves
        </p>
        <CodeCmp language="javascript">
          {`
let user01 = {
nome: 'Patrick',
age: 20,
}
interface User00 {
nome: string,
age: number,
}
function user02(user: User00,) {
console.log('$ {user.nome} tem $ {user.age} anos de idade')
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tipos de união">
        <p>
          O ts aceita 2 ou mais atributos esperados em uma variável. Pra isso
          usamos o &quot;|&quot;.
        </p>
        <CodeCmp language="javascript">
          {`
let num: number | 'string'
num = 1
mum = "um"`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tipos de interseção">
        <h2></h2>
        <p>
          O tipo de interseção combina dois ou mais tipos para criar um tipo que
          tenha todas as propriedades dos tipos existentes. Ele é normalmente
          usado com interfaces através do simbolo &quot;&&quot;
        </p>
        <CodeCmp language="javascript">
          {`
interface Employee {
employeeID: number;
age: number;
}
interface Manager {
stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
employeeID: 12345,
age: 34,
stockPlan: true
};`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tipos literais">
        <p>
          Os tipos literais permitem que você crie novas tipagens a uma variável
          que espere valores pré definidos
        </p>
        <CodeCmp language="javascript">
          {`
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Optional Parameters">
        <p>
          diferente do JS vanilla o TS exige que todos os parâmetros de uma
          função sejam declarados ao executa-la. Para que um parâmetro se torne
          opcional usamos o &quot;?&quot; ao declara-lo
        </p>
        <CodeCmp language="javascript">
          {`
function Welcome(nome: string, dia?: string) {
if (dia === undefined) {
return 'Bem vindo $ {nome}. Tenha uma ótima semana'
} else {
return 'Bem vindo $ {nome}. Tenha uma ótima $ {dia}'
} } 
function userLogs(message: string, id?: string) {
const logTime = new Date().toLocaleTimeString() 
console.log('$ {logTime}: jogador $ {id || 'anônimo'} $ {message} ') 
} 
userLogs("morreu de queda") 
userLogs("morreu de queda", '007') `}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Default Parameters">
        <p>
          O TypeScript aceita a declaração de valores padrões e parâmetros de
          funções. O declarar um valor padrão o parâmetro se torna do tipo
          opcional
        </p>
        <CodeCmp language="javascript">
          {`
function discountPurchase(price: number, discount: number = 0.08) {
return 'O preço final é $ {price * (1 - discount)}' 
} 
console.log(discountPurchase(100))`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Rest Parameters">
        <p>
          O rest parameters é usado para declara parâmetros de função sem
          restrição de quantidades, desde que sejam do mesmo tipo. para usa-lo
          basta declarar &quot;...&quot; antes do nome do parâmetro
        </p>
        <CodeCmp language="javascript">
          {`
function someNumbers(...nuns: number[]) {
let total: number = 0; 
nuns.forEach((num) => {
total += num 
}) 
return total 
} 
console.log(someNumbers(2, 2)) 
console.log(someNumbers(2, 2, 2))`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Classes">
        <p>
          As classe são um conceito da programação orientada o objetos (Poo)
          que. são usadas para encapsular propriedades em um único objetos.
          Exemplo de classes:
        </p>
        <CodeCmp language="javascript">
          {`
class User {
// Properties 
_name: string 
_userNum: string 

// Constructor 
constructor(name: string, userNum: string) {
this.name = name 
this.userNum = userNum 
} 

// Accessors 

// Methods 
ConfirmNewUser(): string {
return 'Usuário$ {this.name}, numero de conta $ {this.userNum} criado com sucesso' 
}
} 

const user = new User('Patrick', '01') `}
        </CodeCmp>
        <p>
          ps: O sublinhado (_) antes do nome da propriedade não é necessário na
          declaração de propriedade, mas fornece uma maneira de distinguir essa
          declaração dos parâmetros que podem ser acessados por meio do
          construtor, além de unir os dois visualmente.
        </p>
      </SectionCmp>

      <SectionCmp title="Modificadores de Acesso">
        <p>
          Os Modificadores de acesso do ts servem para alterar a visibilidade
          das propriedades e métodos de uma classe. O ts possui 3 modificadores:
          o public, o private e o protected
        </p>
        <h3>Public</h3>
        <p>
          O publico é o modelo padrão e não precisa ser declarado. ao usa-lo a
          propriedades/método será visível em todo o escopo do código
        </p>
        <CodeCmp language="javascript">
          {`
class User {
public fullName: string 

constructor(fullName: string) {
this.fullName = fullName 
}}`}
        </CodeCmp>

        <h3>private</h3>
        <p>
          O Modificador private impede que as propriedades/métodos sejam
          acessadas fora da classe onde foi criada. Para usar esses membros
          devemos usar outros membros pré definidos
        </p>
        <CodeCmp language="javascript">
          {`
class Student {
private name: string 

constructor(name: string) {
this.name = name 
} 

printName() {
console.log('Olá $ {this.name}') 
}`}
        </CodeCmp>

        <h3>protected</h3>
        <p>
          O protected funciona de maneira semelhante ao private, com a diferença
          que classes que herdam de de um protected também podem acessar seus
          dados
        </p>
        <CodeCmp language="javascript">
          {`
class Student {
protected name: string 
constructor(name: string) {
this.name = name; 
} 
printName() {
console.log('Olá $ {this.name}'); 
} }
class kids extends Student {
protected age: number 
constructor(name: string, age: number) {
super(name); 
this.age = age; 
} 
printNameAge() {
console.log('$ {this.name} tem $ {this.age} anos'); 
}`}
        </CodeCmp>

        <h3>Readonly</h3>
        <p>
          O readonly assim como o nome indica permite que métodos e propriedades
          sejam apenas lidos, não podendo haver uma modificação no seu valor
          inicial
        </p>
        <CodeCmp language="javascript">
          {`class Student {
readonly name: string 

constructor(name: string) {
this.name = name; 
} 
printName() {
console.log('Olá $ {this.name}'); 
} 
} `}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Get e set">
        <p>
          O get e set a acessadores usados para setar ou pegar valores em
          membros de uma classe.
        </p>
        <CodeCmp language="javascript">
          {`class Car {
private _make: string 

constructor(make: string) {
this._make = make 
} 

get make() {
return this._make 
} 

set make(make) {
this.make = make 
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Herança">
        <p>
          No ts classe podem herdar os membros de outras usando a palavra
          reservada extends. o declarar a nova classe ela ira herdar todos os
          membros públicos da classe pai (o construtor não é herdado).
        </p>

        <CodeCmp language="javascript">
          {`class Car {
private _make: string 
private _color: string 

constructor(make: string, color: string) {
this._make = make 
this._color = color 
} 

aboutCar(): string {
return 'O/A $ {this._make} é $ {this._color}' 
} 
}

class ElectricCar extends Car {
private _range: number

constructor(make: string, color: string, range: number) {
super(make, color) 
this._range = range 
}

aboutCar(): string {
return super.aboutCar() + 'e possui uma autonomia de $ {this._range}km' 
} 
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Membros estáticos">
        <p>
          Membros estáticos são elementos da classe que pode ser acessados sem
          que haja um estanciamento da classe
        </p>
      </SectionCmp>
    </>
  )
}
