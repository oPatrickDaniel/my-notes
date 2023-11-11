import SectionCmp from './../components/section'
import CodeCmp from './../components/code'

export default function ReactPage() {
  return (
    <>
      <h1>React</h1>

      <SectionCmp title="Create React">
        <p>
          Atualmente a documentação do React indica a criação de um novo projeto
          com o nextJs. Para isso usamos o comando npx create-next-app@latest no
          terminal e este comando ira criar toda e estrutura do React
        </p>
      </SectionCmp>

      <SectionCmp title="Componentes e Prioridades">
        <p>
          Um componente é uma parte genérica de um código html/css que pode ser
          reaproveitado em vários projetos.
        </p>
        <p>
          Para criar um componente devemos devemos criar um novo arquivo
          importando neste o react e o arquivo original do projeto. Após isso
          basta criar uma função que retorna o jsx do componente e exportar esta
          função para a usar em outras partes do projeto
        </p>
      </SectionCmp>

      <SectionCmp title="Objetos com Class">
        <p>
          Também é possível criar componentes utilizando classes. Para isso
          devemos estender o componente de react.components e declarar o
          componente dentro de um render
        </p>
        <CodeCmp language="react">
          {`class Header extends React.Component {
  render() {
    return (
      <>
        < div >
          < header > Hello World </header>
        </div>
      </>
    )
  }
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Estados">
        <p>
          Os estado é uma &quot;variável&quot; do React capaz de identificar
          quando elementos dom são modificados e assim os atualizando. Para
          atualizar um elemento. Para alterar um estado primeiramente o elemento
          deve ser criado no construtor usando o state. posteriormente esse
          elemento pode ser atualizado utilizando um setState
        </p>
        <CodeCmp language="react">
          {`class Counter extends React.Component {

constructor(props) {
  super(props)
  this.state = { count: 0 }
  this.add = this.add.bind(this)
}

add() {
  this.setState((state) => ({ count: state.count + 1 }))
}

render() {
  return (
    <div>
      <h1>contador: {this.state.count}</h1>
      <button onClick={this.add}>adicionar</button>
    </div>
  )
}
}`}
        </CodeCmp>
        <p>
          ps: ao usar o estado atual como variável para setar o novo estado
          devemos utilizar uma função para declarar o novo valor. Essa função
          ira funcionar como um callback
        </p>
      </SectionCmp>

      <SectionCmp title="Métodos de ciclo de vida">
        <p>
          Ao criar componentes com classes existem alguns objetos relevantes.
          abaixo os principais.
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>Constructor</td>
            <td>
              Método chamado quando uma instância do componente é criada. É
              usado para configurar o estado inicial do componente e definir
              propriedades. Pode ser omitido se não for necessário configurar um
              estado inicial complexo.
            </td>
          </tr>
          <tr>
            <td>shouldComponentUpdate</td>
            <td>
              Método que determina se o componente deve ser
              atualizado/renderizado novamente. Pode ser usado para otimizar o
              desempenho, evitando renderizações desnecessárias. Retorna um
              valor booleano (verdadeiro/falso) baseado em comparações entre as
              props e o estado anterior e atual.
            </td>
          </tr>
          <tr>
            <td>componentDidMount</td>
            <td>
              Método chamado logo após o componente ser inserido no DOM. É usado
              para realizar tarefas de inicialização, como buscar dados de APIs
              externas ou configurar event listeners. Também é um bom lugar para
              realizar ações que requerem acesso ao DOM.
            </td>
          </tr>
          <tr>
            <td>componentWillUnmount</td>
            <td>
              Método chamado antes de um componente ser removido do DOM e
              destruído. É usado para limpar recursos, como cancelar
              solicitações de API, remover event listeners e fazer outras
              tarefas de limpeza antes que o componente seja desmontado.
            </td>
          </tr>
          <tr>
            <td>render</td>
            <td>
              Método que retorna os elementos JSX que compõem a representação
              visual do componente. É chamado sempre que o componente precisa
              ser renderizado novamente. Ele deve ser uma função pura, sem
              efeitos colaterais.
            </td>
          </tr>
        </table>
        <p>
          ps: O uso do método componentWillUnmount está sendo gradualmente
          substituído pelo uso de componentDidUpdate e componentWillUnmount
          devido à introdução dos Hooks no React.
        </p>
      </SectionCmp>

      <SectionCmp title="Hooks">
        <p>
          Os hooks São uma maneira de utilizar os estados e os objetos de ciclo
          de vida.
        </p>
        <h3>hooks state</h3>
        <p>
          o hook responsável por gerenciamento de estados é o useStates e para
          usa-lo devemos o declarar como o valor de uma variável de atribuição,
          onde o primeiro valor será a configuração atual e o segundo a função
          de atualização
        </p>
        <CodeCmp language="react">
          {`const [count, setCount] = useState(0)
          
function add() {
  setCount(count + 1)
}

return (
  <div>
    <h1>contador: {this.state.count}</h1>
    <button onClick={this.add}>adicionar</button>
  </div>
)`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Hooks effect">
        <p>
          Criando componentes usando funções não temos acesso a propriedades
          herdadas como componentDidMount e componentDidUpdate, então devemos
          usar o useEffect. Ele e um método semelhante ao DidMount, porem por
          padrão é disparado quando a pagina é carregada e quando é atualizada.
          Para usa-lo como o DidUpdate basta declarar um array vazio como um
          segundo valor após o callback, e para usar como o Unmount o valor
          disparado sera o return do effects
        </p>
        <CodeCmp language="react">
          {`useEffect(() => {
  console.log('equivalente ao DidMount')
}, [])

useEffect(() => {
  console.log('equivalente ao DidUpdate')
}, [count])

useEffect(() => {
  return console.log('equivalente ao Unmount')
})`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="nextJs">
        <p>arquivos criados na pasta pages se tornam url&apos;s</p>
        <p>props.children</p>
      </SectionCmp>
    </>
  )
}
