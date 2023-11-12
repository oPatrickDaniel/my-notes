import SectionCmp from '../../components/section'
import CodeCmp from '../../components/code'

export default function JqueryPage() {
  return (
    <>
      <h1>Jquery</h1>

      <SectionCmp title="introdução">
        <p>
          No passado e jQuery era uma biblioteca muito utilizada para
          simplificar ações no javaScript, mas com as atualizações da linguagem
          o frame work está caindo em desuso, porem ainda é importante
          compreender os conceitos do framework para dar manutenção em códigos
          com essa lib, caso necessário
        </p>
      </SectionCmp>

      <SectionCmp title="hide e slow">
        <p>
          O hide e o show são métodos do jQuery que ocultam ou desocultam um
          elemento atribuindo o valor de none ao display desse elemento.
          Semelhante o show faz o efeito inverso declarando o elemento com o seu
          display original
        </p>
        <CodeCmp language="jQuery">
          {`$("#meuElemento").hide();
$("#meuElemento").show();`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Eventos">
        <p>o tratamento de eventos com jQuery também é mais simples:</p>
        <CodeCmp language="jQuery">
          {`$("#meuElemento").click((evento) => {
  console.log(evento)
})`}
        </CodeCmp>
        <p>
          ps: também aceita valores como mouseenter mouseenter, mouseleave e
          dblclick(doble click); caso um valor seja declarado na função ela
          retornara o evento
        </p>
      </SectionCmp>

      <SectionCmp title="animações">
        <p>O jquery também possibilita o uso de vários tipos de animações.</p>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.animate()</td>
              <td>Cria animações personalizadas com propriedades CSS.</td>
            </tr>
            <tr>
              <td>.fadeOut()</td>
              <td>Faz um elemento desaparecer gradualmente.</td>
            </tr>
            <tr>
              <td>.fadeIn()</td>
              <td>Faz um elemento aparecer gradualmente.</td>
            </tr>
            <tr>
              <td>.slideDown()</td>
              <td>
                Mostra um elemento com um efeito de deslizamento para baixo.
              </td>
            </tr>
            <tr>
              <td>.slideUp()</td>
              <td>
                Esconde um elemento com um efeito de deslizamento para cima.
              </td>
            </tr>
            <tr>
              <td>.slideToggle()</td>
              <td>
                Alterna entre o efeito de deslizamento para cima e para baixo.
              </td>
            </tr>
            <tr>
              <td>.show()</td>
              <td>Mostra um elemento.</td>
            </tr>
            <tr>
              <td>.hide()</td>
              <td>Esconde um elemento.</td>
            </tr>
            <tr>
              <td>.toggle()</td>
              <td>Alterna entre mostrar e esconder um elemento.</td>
            </tr>
            <tr>
              <td>.fadeIn()</td>
              <td>Faz um elemento desaparecer gradualmente.</td>
            </tr>
            <tr>
              <td>.fadeOut()</td>
              <td>Faz um elemento aparecer gradualmente.</td>
            </tr>
            <tr>
              <td>.fadeTo()</td>
              <td>
                Define a opacidade de um elemento para um valor específico.
              </td>
            </tr>
            <tr>
              <td>.delay()</td>
              <td>
                Adiciona um atraso antes de executar a próxima ação na fila.
              </td>
            </tr>
            <tr>
              <td>.stop()</td>
              <td>Interrompe a animação atual em um elemento.</td>
            </tr>
            <tr>
              <td>.finish()</td>
              <td>Conclui a animação atual em um elemento imediatamente.</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Callback">
        <p>
          O objetos jquery também aceitam uma função de callback como argumento
        </p>
        <CodeCmp language="jQuery">
          {`$("button").click(() => {
  $("#green").fadeOut(2000, () => {
    $("#red").fadeIn(2000)
  })
})`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Selecionando elementos Filhos">
        <p>
          O jquery possui o método &quot;find()&quot; capaz de selecionar um
          elemento filho, neto ou bisneto de um elemento. Para funcionar
          corretamente o find deve receber um filtro
        </p>
        <CodeCmp language="jQuery">
          {`let ul1 = $("ul")
ul1.children("#item2").hide() // oculta o segundo item de uma lista`}
        </CodeCmp>
        <p>
          Outro seletor com uma função semelhante é o &quot;children()&quot;,
          porem consegue selecionar apenas os elementos filhos diretos da
          referencia original. Ele também pode ser usado sem um filtro, o que
          ira selecionar todos os elementos filhos
        </p>
        <CodeCmp language="jQuery">
          {`let ul1 = $("ul") 
ul1.children().hide()`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Encadeamento (chaining)">
        <p>
          A grande maioria dos métodos do jQuery retornam ela mesma ao serem
          executadas, o que permite que varias funções sejam encadeadas, caso
          desejado.
        </p>
        <CodeCmp language="jQuery">
          {`$("button").click(() => { 
  $("ul").slideUp().slideDown().fadeOut().fadeIn() 
})`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Lendo o conteúdo de um elemento">
        <p>
          Ler o conteúdo de um elemento com jQuery e bem semelhante a javaScript
          vanila, porem com um sintaxe simplificada. Podemos acessar o valore de
          um elemento comum com &quot;text&quot; ou html e de uma input com
          val(de value).
        </p>
        <CodeCmp language="jQuery">
          {`console.log($("h1").text()); //imprimi o texto do h1; 
console.log($("input").val()); //imprimi o valor do input; 
console.log($("ul").html()); // imprimi todo o conteúdo dentro da ul(inclusive o código html);
console.log($("ul").attr(name)); // imprimi o valor do atributo name em ul
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Modificando o conteúdo e características dos elementos">
        <p>
          Os métodos &quot;text&quot; e &quot;html&quot; também podem ser usados
          para modificar os valores de seus elementos. Para isso basta declarar
          o novo valor com um atributo do método
        </p>
        <CodeCmp language="jQuery">
          {`$("ul").html("&lt;li class='item1'&gt;item 1</li>") 
$("li").text("novo item")`}
        </CodeCmp>
        <p>
          Usando uma técnica parecida também podemos mudar o valor de um
          atributo. para isso iremos declarar no método &quot;attr()&quot; o
          atributo original e em seguida o novo atributo
        </p>
        <CodeCmp language="jQuery">
          {`$("li").attr("name", "abacate")
`}
        </CodeCmp>
        <p>
          Ao setar o novo valor este também pode receber uma função, onde essa
          recebe dois atributos: a posição do elemento original em um array e o
          valor antigo do atributo
        </p>
        <CodeCmp language="jQuery">
          {`$("li").attr("name", (i, oValue) => {
  return oValue + ' $ {i}'
})`}
        </CodeCmp>
        <p>
          Também podemos declarar um &quot;maxlength&quot; em um input para
          controlar o máximo de caracteres que ele aceita
        </p>
        <CodeCmp language="jQuery">
          {`$("input").attr("maxlength", 5)
`}
        </CodeCmp>
      </SectionCmp>
      <h3>Selecionando Elementos por atributos</h3>
      <p>
        E um projeto real o jquery nunca é usado para selecionar e modificar uma
        class, pois isso é considerado uma má pratica. no lugar disso nos o
        usamos para selecionar um atributo do elemento a ser modificado
      </p>
      <CodeCmp language="jQuery">
        {`$("[key=2]").remove()
`}
      </CodeCmp>
      <SectionCmp title="Removendo elementos">
        <p>
          O jquery possui métodos para remover elementos do html. O
          &quot;remove&quot; é um desses e pode ser usado para remover todo o
          elemento ou, usando parâmetros, pode remover apenas itens específicos
          dentro do elemento
        </p>
        <CodeCmp language="jQuery">
          {`$("li").remove(".item1", ".item4")`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Inserindo Elementos">
        <p>
          o jquery também possui alguns métodos para adicionar elementos no html
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
              <td>.append()</td>
              <td>Insere conteúdo no final do elemento selecionado.</td>
            </tr>
            <tr>
              <td>.prepend()</td>
              <td>Insere conteúdo no início do elemento selecionado.</td>
            </tr>
            <tr>
              <td>.after()</td>
              <td>Insere conteúdo após o elemento selecionado.</td>
            </tr>
            <tr>
              <td>.before()</td>
              <td>Insere conteúdo antes do elemento selecionado.</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>
      <SectionCmp title="Modificando o CSS">
        <p>
          O jquery também podes ser usado para modificar o css de uma página com
          facilidade. Para adicionar, remover ou intercalar uma class e um
          elemento podemos usar o &quot;addClass()&quot;,&quot;removeClass&quot;
          e &quot;toggleClass()&quot;.
        </p>
        <CodeCmp language="jQuery">
          {`$("ul").toggleClass("back-blue");
`}
        </CodeCmp>

        <p>
          Também podemos usar o método &quot;.css&quot; para identificar ou
          modificar o valor de um css. Para identificar o valor basta declarar o
          atributo em questão, e para modifica-lo declarar o novo valor em
          seguida.
        </p>
        <CodeCmp language="jQuery">
          {`console.log($("ul").css("background-color"));
// retorna a cor de background do elemento
console.log($("ul").css("background-color", "salmon"));
// muda o background-color para salmon`}
        </CodeCmp>
        <p>
          Também podemos declarar vários novos valores a um elemento. Para isso
          devemos declarar os novos valores com um objeto onde cada chave e seu
          valor são os novos valores
        </p>

        <CodeCmp language="jQuery">
          {`$("ul").css({
  "background-color": "salmon",
  "font-size": "30px"
})`}
        </CodeCmp>
      </SectionCmp>
      <SectionCmp title="Dimensões">
        <p>
          O jquery também nos permite acessar valores das dimensões do elemento
          html. para isso existem alguns métodos.
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
              <td>.width()</td>
              <td>
                Retorna a largura do elemento, incluindo o preenchimento
                (padding), mas excluindo a margem (margin) e a borda (border).
              </td>
            </tr>
            <tr>
              <td>.height()</td>
              <td>
                Retorna a altura do elemento, incluindo a altura do
                preenchimento (padding), mas excluindo a margem (margin) e a
                borda (border).
              </td>
            </tr>
            <tr>
              <td>.innerWidth()</td>
              <td>
                Retorna a largura do elemento, incluindo a largura do
                preenchimento (padding), mas excluindo a margem (margin).
              </td>
            </tr>
            <tr>
              <td>.innerHeight()</td>
              <td>
                Retorna a altura do elemento, incluindo a altura do
                preenchimento (padding), mas excluindo a margem (margin).
              </td>
            </tr>
            <tr>
              <td>.outerWidth()</td>
              <td>
                Retorna a largura do elemento, incluindo a largura do
                preenchimento (padding), a largura da borda (border) e,
                opcionalmente, a largura da margem (margin) se o parâmetro
                <code>includeMargin</code> for definido como <code>true</code>.
              </td>
            </tr>
            <tr>
              <td>.outerHeight()</td>
              <td>
                Retorna a altura do elemento, incluindo a altura do
                preenchimento (padding), a altura da borda (border) e,
                opcionalmente, a altura da margem (margin) se o parâmetro{' '}
                <code>includeMargin</code>
                for definido como <code>true</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Elementos irmãos (Siblings)">
        <p>
          O jquery também possui métodos que identificam elementos no mesmo
          nível do elemento original(irmãos)
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
              <td>.siblings()</td>
              <td>
                Retorna todos os irmãos do elemento, ou seja, os elementos que
                têm o mesmo pai que o elemento original.
              </td>
            </tr>
            <tr>
              <td>.next()</td>
              <td>Retorna o próximo elemento irmão do elemento original.</td>
            </tr>
            <tr>
              <td>.prev()</td>
              <td>Retorna o elemento irmão anterior do elemento original.</td>
            </tr>
            <tr>
              <td>.nextAll()</td>
              <td>
                Retorna todos os elementos irmãos seguintes do elemento
                original.
              </td>
            </tr>
            <tr>
              <td>.prevAll()</td>
              <td>
                Retorna todos os elementos irmãos anteriores do elemento
                original.
              </td>
            </tr>
            <tr>
              <td>.nextUntil()</td>
              <td>
                Retorna todos os elementos irmãos seguintes do elemento original
                até encontrar um seletor específico.
              </td>
            </tr>
            <tr>
              <td>.prevUntil()</td>
              <td>
                Retorna todos os elementos irmãos anteriores do elemento
                original até encontrar um seletor específico.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>
      <SectionCmp title="Filter, Last, First e Eq">
        <p>
          Além dos seletores já mencionados existem também seletores de filtro
          importantes do jquery
        </p>
        <table>
          <thead>
            <tr>
              <th>Seletor</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.eq(index)</td>
              <td>
                Seleciona o elemento com base no seu índice, onde o índice é
                especificado como parâmetro.
              </td>
            </tr>
            <tr>
              <td>.even</td>
              <td>Seleciona os elementos pares.</td>
            </tr>
            <tr>
              <td>.odd</td>
              <td>Seleciona os elementos ímpares.</td>
            </tr>
            <tr>
              <td>.first</td>
              <td>Seleciona o primeiro elemento.</td>
            </tr>
            <tr>
              <td>.last</td>
              <td>Seleciona o último elemento.</td>
            </tr>
            <tr>
              <td>.filter(selector)</td>
              <td>seleciona elementos que possuam o filtro desejado</td>
            </tr>
            <tr>
              <td>.not(selector)</td>
              <td>
                Seleciona os elementos que não correspondem ao seletor
                especificado.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>
    </>
  )
}
