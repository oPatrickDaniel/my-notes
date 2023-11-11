import CodeCmp from '../components/code'
import SectionCmp from '../components/section'

export default function ComponentName() {
  return (
    <>
      <h1>Logica de programação</h1>

      <SectionCmp title="Css inline">
        <p>
          E uma maneira de aplicar o css a pagina html a partir de seus próprios
          elementos usando o atributo style.
        </p>
        <CodeCmp language="html">
          {`<p style="background-color: red;"></p>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Css interno">
        <p>
          E semelhante ao css inline, porém, nesse caso todo o css da página
          fica localizado no & head dela.
        </p>
        <CodeCmp language="html">
          {`<head>
  <style>
    p {
      background-color: red;
    }
  </style>
</head>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Css externo">
        <p>
          Diferente dos anteriores o css externo e usado fora da pagina html com
          o auxilio de um link no head.
        </p>
        <CodeCmp language="html">
          {`<link rel="stylesheet" href="style.css">`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Class e id">
        <p>
          Class e id são atributos usados no html para identificar no css (ou no
          js). O id e usador para dar um nome único a div, já o class é usado
          para criar um conjunto de tags.
        </p>
        <CodeCmp language="css">
          {`<div id="presidente">Bolsonaro</div>
<div class="fruta">maçã</div>
`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Cores">
        <p>
          Para mudar a cor do texto de uma página se usa a tag color. O css
          aceita cores e rgb, hex ou nomes(em inglês).
        </p>
        <CodeCmp language="css">{`p {color: gray;}`}</CodeCmp>
        <p>
          Cores Padrão do css:
          <a href="https://phylos.net/2021-10-04/tabela-de-cores-html-css">
            Phylos.net
          </a>
        </p>
      </SectionCmp>

      <SectionCmp title="Gradiente">
        <p>
          O gradiente é uma técnica que permite criar um efeito de degradê entre
          duas ou mais cores.
        </p>
        <p>
          Existem dois tipos de gradiente: linear e radial. O linear é um efeito
          que transita entre duas ou mais cores em uma linha reta. O radial, por
          sua vez, transita entre as cores de forma circular.
        </p>
        <p>
          Para criar um gradiente linear, é necessário especificar as cores de
          início e fim do gradiente a direção em que ele deve ser exibido.
        </p>
        <CodeCmp language="css">
          {`background: linear-gradient(to right, red, yellow);`}
        </CodeCmp>
        <p>
          Para criar um gradiente radial, o código é semelhante, porem
          especificando o tipo de gradiente radial e o ponto em que as cores
          devem começar e terminar. Por exemplo:
        </p>
        <CodeCmp language="css">
          {`background: radial-gradient(circle, red, yellow);`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="background">
        <p>
          É possível trocar o fundo de uma página ou de uma tag, para uma imagem
          ou cor solida. Para isso são usadas as tags
          &quot;background-image&ldquo; e &quot;background-color&ldquo;
          respectivamente.
        </p>
        <CodeCmp language="css">
          {`body {
  background-color: #2222ff;
  background-image: url(imagem.png);
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Ferramentas do chrome">
        <p>
          Com o botão direito do mouse ou com o atalho ctrl+shift+c é possível
          inspecionar a página html. Nela existem elementos como o html de uma
          página, o seu style e local onde se encontra, o console para testes de
          códigos js, etc.
        </p>
      </SectionCmp>

      <SectionCmp title="unidades de medida">
        <p>
          No css existem varias unidades de medida, sendo a maioria fixas e
          outras de comparação. abaixo uma lista as principais:
        </p>
        <h4>Unidades fixas</h4>
        <table>
          <tr>
            <th>atributo</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>cm</td>
            <td>centímetros</td>
          </tr>
          <tr>
            <td>mm</td>
            <td>milímetros</td>
          </tr>
          <tr>
            <td>in</td>
            <td>onças</td>
          </tr>
          <tr>
            <td>px</td>
            <td>pixels</td>
          </tr>
          <tr>
            <td>pt</td>
            <td>pontos</td>
          </tr>
          <tr>
            <td>pc</td>
            <td>picas</td>
          </tr>
        </table>
        <h4>Unidades relativas</h4>
        <table>
          <tr>
            <th>Unidade de Medida</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>em</td>
            <td>
              É referente ao tamanho do elemento pai (2em = 2*elementoPai)
            </td>
          </tr>
          <tr>
            <td>rem</td>
            <td>É referente ao tamanho do elemento raiz(Html)</td>
          </tr>
          <tr>
            <td>vw</td>
            <td>
              É referente a largura da página (1vw = 1% da largura da página)
            </td>
          </tr>
          <tr>
            <td>vh</td>
            <td>
              É referente a altura da página (1vw = 1% da altura da página)
            </td>
          </tr>
          <tr>
            <td>vmin</td>
            <td>É referente ao menor valor da relação altura x largura</td>
          </tr>
          <tr>
            <td>vmax</td>
            <td>É referente ao maior valor da relação altura x largura</td>
          </tr>
          <tr>
            <td>%</td>
            <td>É referente ao tamanho do elemento pai</td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Margin e padding">
        <p>
          A tag margin cria uma distância do elemento pai pela área externa do
          box size do elemento.
        </p>
        <p>
          Semelhante ao margin, o padding também cria uma distância box size do
          elemento, porém, para dentro deste.
        </p>
        <CodeCmp language="css">
          {`* {
  margin: 0;
  padding: 0;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Border">
        <p>
          A tag border cria uma borda em volta do elemento base. Essa borda pode
          ser pintada, estilizada, curvada, etc.
        </p>
        <table>
          <tr>
            <th>Atributos</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>border-radius</td>
            <td>Curva a borda do elemento</td>
          </tr>
          <tr>
            <td>border-bottom</td>
            <td>Cria a borda inferior</td>
          </tr>
          <tr>
            <td>border-top</td>
            <td>Cria a borda superior</td>
          </tr>
          <tr>
            <td>border-color</td>
            <td>Muda a cor da borda</td>
          </tr>
          <tr>
            <td>border-left</td>
            <td>Cria a borda da esquerda</td>
          </tr>
          <tr>
            <td>border-right</td>
            <td>Cria a borda da direita</td>
          </tr>
          <tr>
            <td>border-width</td>
            <td>Dá o tamanho da borda</td>
          </tr>
          <tr>
            <td>border-style</td>
            <td>Dá formato a borda (sólida, pontilhada, etc.)</td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Box model">
        <p>
          Box model é uma estrutura de distâncias que existem entre um elemento
          e a borda da página. Essa estrutura é formada pelos elementos margin,
          border e padding do interior para o exterior, nessa ordem.
        </p>
        {/* <img src="../images/borderbox.png" alt="border box"> */}
      </SectionCmp>

      <SectionCmp title="box-sizing">
        <p>
          O atributo &ldquo;box-sizing&quot; é uma propriedade que define como o
          tamanho total de um elemento é calculado, incluindo suas bordas e
          preenchimento interno.
        </p>
        <p>
          Ao definir o box-sizing com border-box, o navegador calcula a largura
          e altura do elemento junto às bordas e o preenchimento interno.
        </p>
        <CodeCmp language="css">
          {`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Ajustes de texto">
        <p>
          Existem várias propriedades que podem ser inseridas em textos com css.
          Abaixo algumas dessas.
        </p>
        <table>
          <tr>
            <th>Atributo</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>color</td>
            <td>Muda a cor do texto</td>
          </tr>
          <tr>
            <td>text-align</td>
            <td>Posiciona o texto</td>
          </tr>
          <tr>
            <td>text-shadow</td>
            <td>Coloca uma sombra no texto</td>
          </tr>
          <tr>
            <td>text-decoration</td>
            <td>
              Cria tags de formatação como no HTML (negrito, sublinhado, etc.)
            </td>
          </tr>
          <tr>
            <td>text-transform</td>
            <td>
              Transforma o texto em letras maiúsculas, minúsculas ou híbridas
            </td>
          </tr>
          <tr>
            <td>text-overflow</td>
            <td>
              Define o que acontece quando o texto excede o tamanho do elemento
              pai
            </td>
          </tr>
          <tr>
            <td>text-indent</td>
            <td>Cria um espaço no início de parágrafos</td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Fonte">
        <p>
          O elemento &quot;font&quot; pode ser usado para criar várias
          modificações no texto. Algumas abaixo.
        </p>
        <p>
          É possível utilizar uma fonte externa com CSS. Para isso, deve-se
          colar o código: &lt;link rel=&quot;preconnect&quot;
          href=&quot;linkDaFonte&quot;&gt; no &lt;head&gt; da página.
        </p>
        <p>
          PS: as fontes sem serifa possuem a mesma largura no tamanho de todas
          as letras, diferente das com serifa.
        </p>
        <table>
          <tr>
            <th>Atributo</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>font-family</td>
            <td>Muda a fonte do texto</td>
          </tr>
          <tr>
            <td>font-size</td>
            <td>muda o tamanho do texto</td>
          </tr>
          <tr>
            <td>font-style</td>
            <td>muda o estilo da fonte (itálico, sublinhado, etc.)</td>
          </tr>
          <tr>
            <td>font-weight</td>
            <td>muda a &quot;grossura&quot; do texto (bold, negrito, etc.)</td>
          </tr>
          <tr>
            <td>font-variant</td>
            <td>
              Transforma as letras do texto em maiúsculas, destacando as que já
              eram desse tipo
            </td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Estilo de link">
        <p>
          O link possui 4 estados e estes podem ser modificados separadamente:
          link não visitado (link), link visitado (visited), mouse (hover) e
          clicado (active). Para acessar esses atributos especiais, devemos usar
          um &quot;.atributo&quot; após declarar a tag.
        </p>
        <p>
          PS: a tag cursor muda o formato do cursor - muda o formato da seta ao
          passar em cima do link.
        </p>
        <CodeCmp language="css">
          {`a:hover {
  cursor: pointer;
}

a:visited {
  font-style: none;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Listas">
        <p>
          O elemento &quot;list&quot; pode ser usado para criar várias
          modificações nas listas. Usando a tag list-style é possível mudar
          tanto a formatação do texto quanto as bolinhas (varias opções de
          modificação na descrição da videoaula).
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>list-style-type</td>
            <td>
              Especifica o tipo de marcador de lista a ser usado (por exemplo,
              círculos, números, etc.)
            </td>
          </tr>
          <tr>
            <td>list-style-image</td>
            <td>Especifica uma imagem a ser usada como marcador de lista</td>
          </tr>
          <tr>
            <td>list-style-position</td>
            <td>
              Especifica onde o marcador de lista deve ser colocado em relação
              ao conteúdo da lista (por exemplo, dentro ou fora da caixa de
              conteúdo)
            </td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Display">
        <p>
          A propriedade display é responsável pela maneira como os elementos são
          mostrados na tela. Existem 3 displays (fora flex e grid): block,
          inline e inline-block.
        </p>
        <p>
          Diferenças: o display inline não pode ter sua altura e largura mudada;
          um elemento block não precisa estar dentro de um parágrafo. Para mudar
          isso, deve-se usar a tag &quot;display&quot;.
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>display: block;</td>
            <td>
              Faz com que o elemento seja exibido como um bloco, ocupando toda a
              largura disponível e empurrando para baixo outros elementos
            </td>
          </tr>
          <tr>
            <td>display: inline;</td>
            <td>
              Faz com que o elemento seja exibido como uma linha, ocupando o
              mínimo espaço necessário e permitindo que outros elementos sejam
              exibidos ao lado dele
            </td>
          </tr>
          <tr>
            <td>display: inline-block;</td>
            <td>
              Faz com que o elemento seja exibido como um bloco em linha,
              permitindo que outros elementos sejam exibidos ao lado dele na
              mesma linha, mas ainda mantendo as propriedades de um bloco
            </td>
          </tr>
          <tr>
            <td>display: none;</td>
            <td>
              Faz com que o elemento seja completamente removido da página e não
              ocupe nenhum espaço, tornando-o invisível
            </td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Como ocultar uma div">
        <p>
          Existem várias maneiras de ocultar uma div, mas essas são as três mais
          comuns: usando display, o visible ou opacity.
        </p>
        <p>
          Usando o &quot;display: none&quot; o todo o conteúdo é totalmente
          removido da página, assim ele não ocupará um espaço nem interage com o
          cliente.
        </p>
        <CodeCmp language="css">
          {`div {
  display: none;
}`}
        </CodeCmp>
        <p>
          Usando o &quot;visibility: hidden;&quot; a div ainda ocupa seu espaço,
          mas não interage com o cliente.
        </p>
        <CodeCmp language="css">
          {`div {
  visibility: hidden;
}`}
        </CodeCmp>
        <p>
          Por último, com o &quot;opacity: 0;&quot; a div continuará ocupando
          seu espaço e ainda pode interagir com o cliente.
        </p>
        <CodeCmp language="css">
          {`div {
  opacity: 0;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Overflow">
        <p>
          O overflow mostra elementos maiores que o espaço delimitado através do
          scroll.
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>overflow: visible;</td>
            <td>Permite que o conteúdo vaze além das bordas do elemento pai</td>
          </tr>
          <tr>
            <td>overflow: hidden;</td>
            <td>
              Oculta qualquer conteúdo que ultrapasse as bordas do elemento pai
            </td>
          </tr>
          <tr>
            <td>overflow: scroll;</td>
            <td>
              Exibe barras de rolagem para permitir que o usuário role o
              conteúdo que ultrapassa as bordas do elemento pai(o scroll sempre
              fica visível em cima e em baixo)
            </td>
          </tr>
          <tr>
            <td>overflow: auto;</td>
            <td>
              Exibe barras de rolagem somente quando necessário, com base no
              tamanho do conteúdo que ultrapassa as bordas do elemento pai
            </td>
          </tr>
        </table>
        <h4>Overflow-wrap</h4>
        <p>
          Overflow-wrap cria uma quebra de linha quando um texto está prestes a
          exceder a largura do container. Caso não haja uma altura fixa ela pode
          aumentar o tamanho do container a fim de abrigar o texto.
        </p>
      </SectionCmp>

      <SectionCmp title="Alinhamento horizontal">
        <p>
          É possível mudar o alinhamento horizontal de elementos de display
          block usando a tag &quot;margin&quot;. Para elementos display inline e
          inline-block é necessário colocar o elemento em uma div e nela aplicar
          a tag &quot;text-align&quot;.
        </p>
        <CodeCmp language="css">
          {`.block {
  margin: 0 auto;
}

div {
  text-align: center;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Position">
        <p>
          O atributo position permite que elementos sejam mudados de posição na
          página se afetar o posicionamento de outros.
        </p>
        <table>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>position: static;</td>
            <td>
              O position static é o padrão e faz com que os próximos elementos
              fiquem do lado ou abaixo do primeiro elemento (depende do
              display).
            </td>
          </tr>
          <tr>
            <td>position: relative;</td>
            <td>
              Faz com que o posicionamento do elemento fique relativo ao
              elemento static, mas os outros elementos mantém o posicionamento
              inicial como referencia
            </td>
          </tr>
          <tr>
            <td>position: absolute;</td>
            <td>
              Faz com que o posicionamento do elemento fique relativo ao
              elemento pai que não seja static, e os outros elementos perdem a
              referencia de posição dele
            </td>
          </tr>
          <tr>
            <td>position: fixed;</td>
            <td>
              Faz com que o posicionamento do elemento fique relativo ao
              display, permanecendo sempre visível mesmo ao rolar a página
            </td>
          </tr>
          <tr>
            <td>position: sticky;</td>
            <td>
              Faz com que o posicionamento do elemento fique grudado em um
              posicionamento pre definido, assim quando a pagina e rolada o
              elemento não se mexe
            </td>
          </tr>
        </table>
      </SectionCmp>

      <SectionCmp title="Float">
        <p>
          O Float é uma propriedade semelhante ao display que permite manipular
          a direção de um elemento.
        </p>
        <p>
          Semelhante ao float também existe a clear. Ela faz com que nenhum
          elemento flutue no lado selecionado: &quot;clear: left;&quot;,
          &quot;clear: right;&quot; &quot;clear: both;&quot;.
        </p>
        <p>
          PS: caso um elemento fique maior que um div o &quot;overflow:
          auto;&quot; irá consertar a formatação.
        </p>
        <CodeCmp language="css">
          {`* {
  float: left;
  float: right;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Alinhamento Vertical">
        <p>
          Existem várias maneiras de fazer um alinhamento vertical. Abaixo 2
          exemplos:
        </p>

        <h4>Usando o text-align junto ao line-height:</h4>
        <p>
          Ao utilizar o &quot;text-align: center&quot; junto ao line-height com
          a altura do elemento irá criar uma sensação de centralização. O
          problema desse método é que ele depende do conhecimento do tamanho da
          página e não é responsivo.
        </p>

        <h4>Utilizando o position e o transformer:</h4>
        <ol>
          <li>Declarar o elemento Pai com posição relativa</li>
          <li>Declarar o próprio elemento como posição absoluta</li>
          <li>Criar um top e um left de 50%</li>
          <li>Adicionar um transform translate -50%, -50</li>
        </ol>
        <CodeCmp language="css">
          {`div {
  position: relative;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)';
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Viewport">
        <p>
          Viewport é uma tag usada para criar Responsividade nas páginas HTML.
          Tag gerada automaticamente pelo VS Code em páginas HTML5.
        </p>
        <CodeCmp language="html">
          {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Media Queries">
        <p>
          Os media Queries servem para dar comportamentos diferentes a uma
          página a partir do tamanho do display. Para usá-los, devemos criar ao
          fim do código um @media screen and (Condição, tamanho) &lcub; &rcub;
        </p>
        <CodeCmp language="css">
          {`@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="BEM">
        <p>
          O BEM (Bloco, Elemento, Modificador) é uma metodologia CSS criada para
          padronizar projetos HTML assim melhorando a semântica e facilitando a
          leitura e manutenção dos códigos.
        </p>
        <p>
          Mais detalhes:{' '}
          <a href="https://desenvolvimentoparaweb.com/css/bem/">
            desenvolvimentoparaweb.com
          </a>
        </p>
      </SectionCmp>

      <SectionCmp title="Pseudo Elementos">
        <p>
          Pseudo elementos são comandos que permitem mudar apenas uma parte do
          elemento. Para usar pseudo elementos usamos 2 pontos após a tag. ex:
          &quot;p::first-line&#123;&#125;&quot;
        </p>
        <table>
          <thead>
            <tr>
              <th>Pseudo Elemento</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>::first-line</td>
              <td>Altera a primeira linha do texto no display</td>
            </tr>
            <tr>
              <td>::first-letter</td>
              <td>Altera a primeira letra do texto no display</td>
            </tr>
            <tr>
              <td>::before</td>
              <td>
                Permite que um elemento seja adicionado antes. (pode ser usado
                junto ao li para mudar o estilo)
              </td>
            </tr>
            <tr>
              <td>::after</td>
              <td>
                Permite que um elemento seja adicionado depois. (pode ser usado
                junto ao li para mudar o estilo)
              </td>
            </tr>
            <tr>
              <td>::selection</td>
              <td>Define um estilo aos elementos selecionados da página</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Seletores">
        <p>
          Seletores são maneiras de chamar um elemento no CSS. Podemos usar 2 ou
          mais seletores ao mesmo tempo se os separarmos por vírgula. Se os
          seletores forem separados por um espaço o CSS será aplicado no segundo
          seletor que for filho do primeiro.
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
              <td>*</td>
              <td>Seleciona todos os elementos da página</td>
            </tr>
            <tr>
              <td>#</td>
              <td>Seleciona o elemento com o ID especificado (ex: #header)</td>
            </tr>
            <tr>
              <td>.</td>
              <td>
                Seleciona todos os elementos com a classe especificada (ex:
                .destaque)
              </td>
            </tr>
            <tr>
              <td>&gt;</td>
              <td>
                Seleciona todos os elementos filhos diretos do elemento pai
                especificado (ex: ul &gt; li)
              </td>
            </tr>
            <tr>
              <td>+</td>
              <td>
                Seleciona o elemento imediatamente seguinte ao elemento
                especificado (ex: h1 + p)
              </td>
            </tr>
            <tr>
              <td>~</td>
              <td>
                Seleciona todos o elementos seguintes ao elemento especificado
                (ex: h1 ~ p)
              </td>
            </tr>

            <tr>
              <td>[atributo]</td>
              <td>Seleciona todos o elementos que possuam esse atributo</td>
            </tr>
            <tr>
              <td>[atributo=&quot;valor&quot;]</td>
              <td>
                Seleciona todos o elementos que tenham um atributo com esse
                valor
              </td>
            </tr>
            <tr>
              <td>[atributo~=&quot;palavra&quot;]</td>
              <td>
                Seleciona todos o elementos que tenham &quot;palavra&quot; como
                parte do valor{' '}
              </td>
            </tr>
            <tr>
              <td>[atributo^=&quot;p&quot;]</td>
              <td>
                Seleciona todos o elementos que o valor começa em &quot;p&quot;{' '}
              </td>
            </tr>
            <tr>
              <td>[atributo#=&quot;p&quot;]</td>
              <td>
                Seleciona todos o elementos que o valor termina em &quot;p&quot;{' '}
              </td>
            </tr>
            <tr>
              <td>[atributo*=&quot;alav&quot;]</td>
              <td>
                Seleciona todos o elementos que o valor possua a sequencia
                &quot;alav&quot; de &quot;palavra por exemplo&quot;{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Pseudo Classes">
        <p>
          Pseudo classes são maneiras de selecionar um elemento a partir de um
          estado ou característica dele. Exemplos abaixo:
        </p>

        <p>
          O nth-child() começa em 1; um valor terminado em n(2n) pegará os
          valores divisíveis por esse; valores podem ser usado junto a
          soma/subtração; odd/even podem ser passados como valores (ímpar, par)
        </p>

        <table>
          <thead>
            <tr>
              <th>Pseudo-classe</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>:First-of-type</td>
              <td>Seleciona o primeiro elemento do tipo.</td>
            </tr>
            <tr>
              <td>:hover</td>
              <td>
                Seleciona um elemento quando o cursor do mouse passa sobre ele.
              </td>
            </tr>
            <tr>
              <td>:active</td>
              <td>Seleciona um elemento quando ele é clicado.</td>
            </tr>
            <tr>
              <td>:focus</td>
              <td>Seleciona um elemento quando ele está em foco</td>
            </tr>

            <tr>
              <td>:first-child</td>
              <td>Seleciona o primeiro filho de um elemento pai.</td>
            </tr>
            <tr>
              <td>:last-child</td>
              <td>Seleciona o último filho de um elemento pai.</td>
            </tr>
            <tr>
              <td>:nth-child()</td>
              <td>
                Seleciona um filho específico de um elemento pai, com base em
                sua posição. Você pode especificar uma fórmula matemática para
                selecionar um padrão de filhos, como &quot;2n+1&quot; ou
                &quot;3n-1&quot;.
              </td>
            </tr>
            <tr>
              <td>:checked</td>
              <td>
                Seleciona elementos de formulário (como caixas de seleção e
                botões de rádio) que foram marcados como selecionados.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Função Calc">
        <p>
          O calc no CSS pode ser usado para criar valores de elementos baseados
          em porcentagem. ex: &quot;*&lcub;width: calc(100% -
          300px)&rcub;&quot;.
        </p>
        <p>
          Obs: ao mudar o display de uma div para inline-block ela ganha um
          espaçamento de 4px.
        </p>
        <CodeCmp language="css">
          {`* {
  width: calc(100% - 300px)";
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Transformações">
        <p>
          As transformações são usadas para modificar o formato, local ou
          tamanho de um elemento. Abaixo alguns exemplos:
        </p>
        <table>
          <thead>
            <tr>
              <th>Transform</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>translate()</td>
              <td>
                move um elemento em relação ao seu ponto de origem, na
                horizontal e/ou vertical
              </td>
            </tr>
            <tr>
              <td>rotate()</td>
              <td>
                gira um elemento em sentido horário ou anti-horário. O valor
                deve ser declarado com deg no final
              </td>
            </tr>
            <tr>
              <td>scale(a,l)</td>
              <td>aumenta ou diminui o tamanho de um elemento</td>
            </tr>
            <tr>
              <td>skew()</td>
              <td>
                inclina um elemento em relação a um eixo, na horizontal e/ou
                vertical(formato de um paralelogramo)
              </td>
            </tr>
            <tr>
              <td>perspective()</td>
              <td>define o ponto de vista 3D do elemento</td>
            </tr>
            <tr>
              <td>matrix()</td>
              <td>define uma transformação 2D usando uma matriz de valores</td>
            </tr>
            <tr>
              <td>matrix3d()</td>
              <td>define uma transformação 3D usando uma matriz de valores</td>
            </tr>
            <tr>
              <td>translateX()</td>
              <td>move um elemento somente na horizontal</td>
            </tr>
            <tr>
              <td>translateY()</td>
              <td>move um elemento somente na vertical</td>
            </tr>
            <tr>
              <td>rotateX()</td>
              <td>gira um elemento em torno do eixo X</td>
            </tr>
            <tr>
              <td>rotateY()</td>
              <td>gira um elemento em torno do eixo Y</td>
            </tr>
            <tr>
              <td>rotateZ()</td>
              <td>gira um elemento em torno do eixo Z</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Compatibilidade de navegadores">
        <p>
          existem algumas funções do CSS3 que não funcionam em versões antigas
          dos navegadores. Para deixar os códigos compatíveis com navegadores
          antigos devemos utilizar prefixos(códigos especiais que ajudam na
          compatibilidade). Para checar a necessidade de prefixos podemos usar o
          site{' '}
          <a href="https://shouldiprefix.com" className="text-red-600">
            Shouldiprefix.com
          </a>{' '}
          ou o{' '}
          <a href="https://caniuse.com" className="text-red-600">
            Caniuse.com
          </a>
        </p>
      </SectionCmp>

      <SectionCmp title="Variáveis em CSS">
        <p>
          e possível usar variáveis no css. com elas podemos salvar dados para
          usos futuros. para isso devemos criar um seletor root(:root) e dentro
          dele declarar as variáveis.
        </p>
        <CodeCmp language="css">
          {`:root {
  --amareloClaro: rgb(255, 255, 110);
  --tamanhoImg: 400px;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="FlexBox">
        <p>
          O flex box é um e um conceito do css que é usado para manipular o
          posicionamento de elementos com mais liberdade. com ele podemos
          alinhar qualquer elemento nas nove direções de uma div.
        </p>
        {/* <img src="../images/flexbox.png" alt="posições flexbox"> */}

        <h4>Flex Direction</h4>

        <p>
          Para usar o FlexBox o primeiro passo e declarar o elemento pai como
          display flex.
        </p>
        <p>
          O flex-direction dita a direção que os elementos da pagina sequem:
        </p>
        <table>
          <thead>
            <tr>
              <th>valor</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>row</td>
              <td>
                Itens são posicionados da esquerda para direita na linha
                principal.(o padrão)
              </td>
            </tr>
            <tr>
              <td>row-reverse</td>
              <td>
                Itens são posicionados da direita para esquerda na linha
                principal.
              </td>
            </tr>
            <tr>
              <td>column</td>
              <td>
                Itens são posicionados de cima para baixo na linha transversal.
              </td>
            </tr>
            <tr>
              <td>column-reverse</td>
              <td>
                Itens são posicionados de baixo para cima na linha transversal.
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Wrap</h4>
        <p>
          Uma característica importante do Flexbox é conseguir manter a
          distribuição de elemento na pagina mesmo que valores como height e
          width sejam declarados, mas caso esse não seja o objetivo podemos usar
          o wrap. Através do wrap(proteger) ele vai tentar manter os valores
          declarados como height e width e cria uma quebra de linhas. Também e
          possível mudar a ordem da linhas com o Wap-reverse
        </p>
        <p>
          Essa proteção de altura pode ser maior que seu elemento pai, como
          exemplo, então ele deve ser usado com atenção.
        </p>
        <CodeCmp language="css">{`flex-wrap: wrap-reverse`}</CodeCmp>

        <h4>Flex Flow</h4>

        <p>
          o flex-flow e uma união do flex-direction como o flex-wrap. Para
          usa-lo primeiro declaramos o valor do flex-direction e e seguida com
          um espaço o wrap
        </p>
        <CodeCmp language="css">{`flex-flow: column wrap-reverse`}</CodeCmp>

        <h4>Justify Content</h4>
        <p>
          O Justify-content permite manipular os elementos horizontalmente os
          alinhando com a direta, esquerda ou centro da página
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
              <td>flex-start</td>
              <td>Alinha os itens no começo do container flexível (padrão)</td>
            </tr>
            <tr>
              <td>flex-end</td>
              <td>Alinha os itens no final do container flexível</td>
            </tr>
            <tr>
              <td>center</td>
              <td>Centraliza os itens horizontalmente no container flexível</td>
            </tr>
            <tr>
              <td>space-between</td>
              <td>Distribui os itens com espaço igual entre eles</td>
            </tr>
            <tr>
              <td>space-around</td>
              <td>Distribui os itens com espaço igual ao redor deles</td>
            </tr>
            <tr>
              <td>space-evenly</td>
              <td>
                Distribui os itens com espaço igual entre eles e ao redor deles
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Align Items</h4>

        <p>
          O align-items permite manipular os elementos verticalmente, permitindo
          alinhamentos com o topo, fundo ou meio da pagina
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
              <td>stretch</td>
              <td>
                Estica os itens para preencher o container flexível(padrão)
              </td>
            </tr>
            <tr>
              <td>flex-start</td>
              <td>
                Alinha os itens no começo do eixo transversal do container
                flexível
              </td>
            </tr>
            <tr>
              <td>flex-end</td>
              <td>
                Alinha os itens no final do eixo transversal do container
                flexível
              </td>
            </tr>
            <tr>
              <td>center</td>
              <td>Centraliza os itens verticalmente no container flexível</td>
            </tr>
            <tr>
              <td>baseline</td>
              <td>Alinha os itens em relação à linha de base do texto</td>
            </tr>
          </tbody>
        </table>

        <h4>Align Content</h4>

        <p>
          O Align-content funciona de forma semelhante ao align-items, com a
          diferença que ele muda o posicionamento das linhas do wrap, assim as
          linhas ficam posicionadas no começo, fim ou meio da pagina.
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
              <td>stretch</td>
              <td>
                Estica as linhas de itens para preencher todo o eixo transversal
                do container.
              </td>
            </tr>
            <tr>
              <td>flex-start</td>
              <td>
                Alinha as linhas de itens no começo do eixo transversal do
                container.
              </td>
            </tr>
            <tr>
              <td>flex-end</td>
              <td>
                Alinha as linhas de itens no final do eixo transversal do
                container.
              </td>
            </tr>
            <tr>
              <td>center</td>
              <td>
                Centraliza as linhas de itens verticalmente no container
                flexível.
              </td>
            </tr>
            <tr>
              <td>space-between</td>
              <td>Distribui as linhas de itens com espaço igual entre elas.</td>
            </tr>
            <tr>
              <td>space-around</td>
              <td>
                Distribui as linhas de itens com espaço igual ao redor delas.
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Ordem</h4>
        <p>
          O &quot;ordem&quot; permite que a ordem de elementos seja alternada
          apenas pelo css. por padrão o seu valor é 0, para alterar a ordem dos
          elementos devemos aumentar o valor para que ele seja avançado e
          diminuir para que ele transcenda
        </p>
        <CodeCmp language="css">
          {`.yellow {
  order: 1;
}`}
        </CodeCmp>

        <h4>Align Self</h4>

        <p>
          O align-self funciona igual ao align-itens e recebe os mesmos valores,
          porem ele afeta apenas um elemento
        </p>

        <CodeCmp language="css">
          {`.yellow {
  align - self: flex-end
}`}
        </CodeCmp>

        <h4>Grow/Shrink</h4>

        <p>
          o flex grow e flex Shrink servem para modificar do tamanho de
          elementos em relação ao container.
        </p>
        <p>
          o shrink(diminuir) recebe por padrão 1 o que o permite encolher, mas
          alterando esse valor para 0 esse perde essa capacidade
        </p>
        <p>
          {' '}
          O grow(aumentar) recebe por padrão 0, o que o impede de crescer, mas
          ao alterar esse valor ele não so pode crescer como ao usar 2, 3 como
          valor ele pode duplicar ou triplicar o seu tamanho
        </p>
        <CodeCmp language="css">
          {`.yellow {
  flex grow: 0;
  flex Shrink: 0;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Display Grid">
        <p>
          O grid é uma estrutura do css semelhante ao flex-box, porem que divide
          o conteúdo da pagina em linhas e colunas. Com ele podemos criar
          estruturas semelhantes ao table.
        </p>

        <h4>Grid Template</h4>

        <p>
          com o &quot;template&quot; podemos modificar o númeno de linhas e
          coluna e também o seu tamanho. Para declarar a quantidade de colunas
          usamos o grid-template-column e para declarar as linhas usamos
          grid-template-rows.
        </p>
        <p>
          cada valor declarado no grid-template ira representar uma linha ou
          coluna. Além das unidade de medida comuns do css o grid também aceita
          medias frações(fr) unidade de medida exclusiva deste e também
          &quot;auto&quot; que divide igualmente todo o espaço disponível.
        </p>
        <CodeCmp language="css">
          {`div {
  grid-template-rows: 1rw 1em;
  grid-template-columns: 1fr 20px auto;
}`}
        </CodeCmp>
        <p>
          Podemos usar apenas &quot;grid-template&quot; para unificar linhas e
          colunas. Nesse modelo os valores das e linhas são separados por uma
          &quot;/&quot;, na ordem &quot;linha / colunas&quot;.
        </p>
        <CodeCmp language="css">
          {`div {
  grid-template: 1rw 1em / 1fr 20px auto;
}`}
        </CodeCmp>

        <h4>Grid Gap</h4>

        <p>
          O gap cria um espaçamento entre as linhas e colunas do grid
          (semelhante ao padding). Para o espaçamento entre as linhas usamos
          row-gap e entre colunas usamos column-gap. Caso o valor das colunas e
          linhas seja igual podemos declarar apenas com grid-gap.
        </p>
        <CodeCmp language="css">
          {`div {
  gap: 2px;
}`}
        </CodeCmp>

        <h4>Justify e Align Items</h4>

        <p>
          O Justify itens e o Align Items funcionam de forma semelhante ao
          flex-box recebendo os mesmos métodos. Com eles podemos modificar o
          posicionamento horizontal e vertical dos elementos em relação as
          linhas e colunas do grid.
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
              <td>flex-start</td>
              <td>Alinha os itens no começo do container flexível (padrão)</td>
            </tr>
            <tr>
              <td>flex-end</td>
              <td>Alinha os itens no final do container flexível</td>
            </tr>
            <tr>
              <td>center</td>
              <td>Centraliza os itens horizontalmente no container flexível</td>
            </tr>
          </tbody>
        </table>

        <h4>Justify e Align Content</h4>

        <p>
          O Justify e Align Content são semelhantes ao Justify-itens porem
          possuem uma grande diferença. em quanto o Justify-itens alinha o
          elemento em relação ao grid, o Justify-itens alinha o grid em relação
          ao container.
        </p>
        <table>
          <tbody>
            <tr>
              <td>flex-start</td>
              <td>Alinha os itens no começo do container flexível (padrão)</td>
            </tr>
            <tr>
              <td>flex-end</td>
              <td>Alinha os itens no final do container flexível</td>
            </tr>
            <tr>
              <td>center</td>
              <td>Centraliza os itens horizontalmente no container flexível</td>
            </tr>
            <tr>
              <td>space-between</td>
              <td>Distribui os itens com espaço igual entre eles</td>
            </tr>
            <tr>
              <td>space-around</td>
              <td>Distribui os itens com espaço igual ao redor deles</td>
            </tr>
            <tr>
              <td>space-evenly</td>
              <td>
                Distribui os itens com espaço igual entre eles e ao redor deles
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Grid Template Areas</h4>

        <p>
          O Grid area permite reorganizar os elementos de forma independente. Ao
          declara-lo usamos repetições dos elementos selecionados para
          redistribui-los
        </p>
        <p>
          uma maneira de fazer isso seria declarando um &quot;grid-area&quot; em
          seus elementos filhos e declarar um &quot;grid-template-areas&quot; no
          elemento pai
        </p>
        <CodeCmp language="css">
          {`div {
  grid-template-areas:
    'a1 a1 a1 a2'
    'a2 a2 a2 a2';
}

.azul {
  grid-area: a1;
}

.verde {
  grid-area: a2;
}`}
        </CodeCmp>

        <h4>Grid Column</h4>

        <p>
          O grid column indica onde uma coluna começa e termina. Para indicar o
          começo usamos o grid-column-start e para indicar o fim usamos o
          grid-column-end. O valor do grid indica o inicio de uma linha, então
          caso o objetivo seja preencher totalmente um bloco o valor declarado
          deve ser o do fim da coluna
        </p>

        <CodeCmp language="css">
          {`#water {
  grid-column-start: 3;
  grid-column-end: 6;
}`}
        </CodeCmp>
        <p>
          Também podemos usar a forma abreviada do grid column para declarar os
          dois valores juntos, seguindo a ordem grid-column-start,
          grid-column-end.
        </p>
        <CodeCmp language="css">
          {`#water {
  grid-column: 4 / span 2;
}`}
        </CodeCmp>

        <h4>Grid Row</h4>
        <p>
          O grid row tem o mesmo funcionamento do grid column, porem ele indica
          onde uma linha começa e termina.
        </p>
        <p>
          {' '}
          Para usar a forma abreviada do grid a ordem a seguir é
          grid-column-start, grid-column-end.
        </p>
        <CodeCmp language="css">{`grid-row: 3 / span 3`}</CodeCmp>

        <h4>Grid Area</h4>
        <p>
          o grid area é uma forma de unir o grid row e o grid column. para o
          usar os valores são declarados na ordem: grid-row-start,
          grid-column-start, grid-row-end, seguido por grid-column-end.
        </p>
        <CodeCmp language="css">
          {`#water {
  grid-area: 1 / 2 / 4 / -1;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="CSS Animações">
        <p>
          Para criar uma animação no Css nos precisamos declarar 3 elementos: o
          estado inicial do elemento, o estado final, e o tempo de transição
          (podem haver outros estados). O estado inicial e final é declarado ao
          criar a animação, já o tempo e declarado no elemento que sofre a
          transformação
        </p>

        <CodeCmp language="css">
          {`@keyframes mudarCor {
  0% {
    background-color: red;
  }

  100% {
    background-color: blue;
  }
}

.box {
  animation-name: mudarCor;
  animation-duration: 4s;
}`}
        </CodeCmp>

        <h4>animation-delay</h4>

        <p>
          O animation-delay define um atraso antes que a animação comece a ser
          executada. Valores negativos irão adiantar a animação
        </p>
        <CodeCmp language="css">
          {`.box {
  animation-name: mudarCor;
  animation-duration: 4s;
  animation-delay: -2s;
}`}
        </CodeCmp>

        <h4>animation-iteration-count</h4>

        <p>
          o animation-iteration-count define um número de vezes que para a
          animação repetir. ele também aceita &quot;infinite&quot; como valor,
          que ira faze-lo sempre repetir
        </p>
        <CodeCmp language="css">
          {`.box {
  animation-name: mudarCor;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}`}
        </CodeCmp>

        <h4>animation-direction</h4>

        <p>
          o animation-direction define a direção da animação, que pode ser para
          frente, para trás ou alternando entre os dois.
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
              <td>normal</td>
              <td>
                Valor padrão da propriedade animation-direction. A animação é
                reproduzida no sentido normal, do início ao fim.
              </td>
            </tr>
            <tr>
              <td>reverse</td>
              <td>
                A animação é reproduzida no sentido inverso, do fim ao início.
              </td>
            </tr>
            <tr>
              <td>alternate</td>
              <td>
                A animação é reproduzida alternando entre o sentido normal e
                inverso. A primeira iteração é reproduzida no sentido normal.
              </td>
            </tr>
            <tr>
              <td>alternate-reverse</td>
              <td>
                A animação é reproduzida alternando entre o sentido normal e
                inverso. A primeira iteração é reproduzida no sentido inverso.
              </td>
            </tr>
          </tbody>
        </table>

        <h4>animation-fill-mode</h4>
        <p>
          Define como os estilos aplicados à animação serão mantidos antes e
          depois da execução da animação.(Forwards, Backwards e Both){' '}
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
              <td>forwards</td>
              <td>
                Faz a animação permanecer no seu estado final (último quadro)
                após a sua execução. Se houver mais de uma animação, a
                propriedade animation-fill-mode deve ser definida separadamente
                para cada uma delas.
              </td>
            </tr>
            <tr>
              <td>backwards</td>
              <td>
                Faz a animação iniciar no seu estado inicial antes de seu tempo
                de delay, mesmo que ela ainda não tenha sido reproduzida. Se a
                animação for repetida, a propriedade animation-fill-mode deve
                ser definida separadamente para cada uma delas.
              </td>
            </tr>
            <tr>
              <td>both</td>
              <td>
                Faz a animação seguir tanto as regras de forwards quanto
                backwards. A animação permanecerá no seu estado final após a sua
                execução e começará no seu estado inicial antes de seu tempo de
                delay.
              </td>
            </tr>
          </tbody>
        </table>

        <h4>animation-timing-function</h4>
        <p>
          Define a curva de tempo que controla a aceleração e desaceleração da
          animação.
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
              <td>ease</td>
              <td>
                Proporciona uma transição suave, começando devagar, aumentando a
                velocidade no meio e diminuindo no final. É o valor padrão.
              </td>
            </tr>
            <tr>
              <td>linear</td>
              <td>
                Cria uma transição com velocidade constante durante todo o
                processo de animação.
              </td>
            </tr>
            <tr>
              <td>ease-in</td>
              <td>
                Começa devagar e acelera gradualmente até o fim da animação.
              </td>
            </tr>
            <tr>
              <td>ease-out</td>
              <td>
                Começa rápido e desacelera gradualmente até o final da animação.
              </td>
            </tr>
            <tr>
              <td>ease-in-out</td>
              <td>
                Começa devagar, acelera no meio e desacelera no final da
                animação.
              </td>
            </tr>
            <tr>
              <td>cubic-bezier(n, n, n, n)</td>
              <td>
                Permite que você defina sua própria função de tempo
                personalizada usando coordenadas de um cubo de Bezier. Nesse
                caso, substitua os valores &quot;n&quot; pelas coordenadas que
                deseja usar.
              </td>
            </tr>
          </tbody>
        </table>

        <h4>animation-play-state</h4>
        <p>
          Define se a animação está em execução ou pausada. Essa propriedade
          recebe dois valores possíveis: paused, que pausa a animação em seu
          estado atual e running, que executa a animação.
        </p>
        <CodeCmp language="css">
          {`.box {
  animation-name: mudarCor;
  animation-duration: 4s;
  animation-play-state: running;
}`}
        </CodeCmp>

        <h4>Short Hand</h4>
        <p>
          Para deixar o código mais simples podemos declarar toda a animação em
          uma unica linha. Para isso devemos declarar o &quot;animation&quot; e
          seus valores na seguinte ordem: name, duration, timing-function,
          delay, iteration-count, direction, fill-mode
        </p>
        <CodeCmp language="css">
          {`.container {
  animation: mudarCor 2s ease-in 1s infinite alternate both;
}`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Transitions">
        <p>
          As transitions são semelhantes ao animation: com elas podemos criar
          animações de transição no &quot;:hover&quot; de elementos. O
          transition deve ser declarado na seguinte ordem: property, duration
          delay, timing-function.
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
              <td>transition-property</td>
              <td>
                Especifica a(s) propriedade(s) CSS que serão animadas durante a
                transição. É possível definir várias propriedades separadas por
                vírgula.
              </td>
            </tr>
            <tr>
              <td>transition-duration</td>
              <td>
                Especifica a duração da transição em segundos (s) ou
                milissegundos (ms).
              </td>
            </tr>
            <tr>
              <td>transition-delay</td>
              <td>
                Especifica um atraso antes do início da transição em segundos
                (s) ou milissegundos (ms).
              </td>
            </tr>
            <tr>
              <td>transition-timing-function</td>
              <td>
                Especifica como a transição ocorrerá. Pode receber os valores:
                ease, linear, ease-in, ease-out, ease-in-out ou cubic-bezier(n,
                n, n, n).
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>
    </>
  )
}
