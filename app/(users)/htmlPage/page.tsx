import CodeCmp from '../../components/code'
import SectionCmp from '../../components/section'

export default function HtmlPage() {
  return (
    <>
      <h1>HTML5</h1>

      <SectionCmp title="Tags">
        <p>
          Uma tag é um elemento que é utilizado para indicar ao navegador o tipo
          de conteúdo que está sendo escrito.
        </p>
        <p>
          Existem dois tipos de tags: as tags de abertura, usadas para indicar
          onde o elemento começa, e as tags de fechamento, usadas para indicar
          onde um elemento termina.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Tag</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td>abertura</td>
            </tr>
            <tr>
              <td>&lt;/p&gt;</td>
              <td>fechamento</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Estrutura básica Html">
        <p>
          O html possui uma estrutura básica, composta pelas tags
          &lt;html&gt;&lt;/html&gt;. Dentro dessas são utilizadas, duas tags
          para fazer a separação entre dados do cabeçalho e os dados do corpo da
          página. Essas são, respectivamente, as tags &lt;head&gt;&lt;/head&gt;
          e &lt;body&gt;&lt;/body&gt;.
        </p>
        <p>
          Dentro do head e encontrado informações como a linguagem da página, o
          titulo da página, o link para um css externo, etc... , já no body e
          encontrado todas a informações visíveis da página, como textos e
          imagens.(ps:o link para um javaScript externo também pode ser
          encontrado aqui).
        </p>
        <CodeCmp language="html">
          {`<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titulo</title>
</head>

<body>
</body>

</html>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Títulos e parágrafos">
        <p>
          Para criar textos no html é necessário o uso de tags. Um texto simples
          pode ser criado com o uso das tags &lt;H&gt;&lt;/H&gt; e
          &lt;p&gt;&lt;/p&gt;.
        </p>
        <p>
          A tag H é usada para a criação de um titulo, e dever ser usada junto a
          um numero de 1 a 6, indicando a importância do titulo, já a tag p é
          usada para indicar um parágrafo.
        </p>
        <CodeCmp language="html">
          {`<h1>Titulo 1° importância (não deve ser usado apenas uma vez por pagina)</h1>
<h3>titulo de 3° importância</h3>
<p>Paragrafo</p>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Comentários">
        <p>
          É possível fazer comentários nos códigos usando a tag &lt;!-- --&gt;.
        </p>
        <CodeCmp language="html">{'<!-- Comentário -->'}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Formatação">
        <p>
          Existem várias tags que podem ser usadas para fazer a formatação de um
          texto. Lista abaixo com as principais tags e seus efeitos no texto:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Tag</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>&lt;strong&gt;</td>
              <td>Deixa o texto em negrito</td>
            </tr>
            <tr>
              <td>&lt;em&gt;</td>
              <td>Deixa o texto em itálico</td>
            </tr>
            <tr>
              <td>&lt;mark&gt;</td>
              <td>Deixa o texto marcado</td>
            </tr>
            <tr>
              <td>&lt;small&gt;</td>
              <td>Deixa o texto menor</td>
            </tr>
            <tr>
              <td>&lt;big&gt;</td>
              <td>Deixa o texto maior</td>
            </tr>
            <tr>
              <td>&lt;del&gt;</td>
              <td>Deixa o texto cortado</td>
            </tr>
            <tr>
              <td>&lt;ins&gt;</td>
              <td>Deixa o texto sublinhado</td>
            </tr>
            <tr>
              <td>&lt;sub&gt;</td>
              <td>Deixa o texto subscrito</td>
            </tr>
            <tr>
              <td>&lt;sup&gt;</td>
              <td>Deixa o texto super-escrito</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Links">
        <p>
          É possível inserir links na página HTML usando a tag{' '}
          <code>&lt;a&gt;</code>.
        </p>
        <CodeCmp language="html">
          {'<a href="linkdedestino.com">texto do link</a>'}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Imagens">
        <p>
          É possível adicionar imagens na página HTML usando a tag{' '}
          <code>&lt;img&gt;</code>.
        </p>
        <p>
          Também é possível alterar o tamanho da imagem usando os atributos{' '}
          <code>height=&quot;&quot;</code> (altura) e{' '}
          <code>width=&quot;&quot;</code> (largura) ou trocar a imagem de acordo
          com o tamanho da página usando <code>srcset=&quot;&quot;</code>.
        </p>
        <CodeCmp language="html">
          {'<img src="linkdaimagem" alt="descrição da imagem">'}
        </CodeCmp>
        <p>
          Usando o site <a href="https://tinypng.com">tinypng.com</a> é possível
          otimizar imagens para utiliza-as em sites
        </p>
      </SectionCmp>

      <SectionCmp title="Figure">
        <p>
          A tag figure pode ser usada para adicionar uma legenda em uma imagem.
          Para isso devemos colocar a foto dentro de uma tag figure, junto a tag
          figcaption para indicar a legenda.
        </p>
        <CodeCmp language="html">
          {`<figure>
  <img src="linkdaimagem.com" alt="descrição da imagem">
  <figcaption>legenda</figcaption>
</figure>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Quebra de linha">
        <p>
          É possível criar quebras de linha usando a tag <code>&lt;br&gt;</code>
          .
        </p>
        <CodeCmp language="html">{'<br>'}</CodeCmp>
        <p>
          Também podemos usar a quebra de linha com traço através do{' '}
          <code>&lt;hr&gt;</code>.
        </p>
        <CodeCmp language="html">{'<hr>'}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Listas">
        <p>
          No HTML é possível criar listas ordenadas e não ordenadas. Para isso
          deve-se usar a tag
          <code>&lt;ol&gt;</code> ou <code>&lt;ul&gt;</code> como pai e{' '}
          <code>&lt;li&gt;</code> como filho.
        </p>
        <CodeCmp language="html">
          {`<ol>
  <li>primeiro da lista</li>
</ol>
<ul>
  <li>segundo da lista</li>
</ul>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Lang">
        <p>
          O atributo lang indica qual a língua da página. Normalmente o lang é
          usado no head e é indicado por 4 letras, sendo as duas primeiras a
          língua e as duas últimas o país da língua (ex: pt-br, pt-pt, etc.).
        </p>
        <CodeCmp language="html">{'<html lang="pt-br"></html>'}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tabelas">
        <p>
          No HTML é possível criar tabelas para a organização de dados. Para
          isso usamos a tag
          <code>&lt;table&gt;</code>. Também podemos usar as tags{' '}
          <code>&lt;thead&gt;</code> e <code>&lt;tbody&gt;</code> para agrupar o
          cabeçalho e o corpo da tabela.
        </p>
        <CodeCmp language="html">
          {`<table>
  <thead>
    <tr>
      <th>Texto de cabeçalho 1</th>
      <th>Texto de cabeçalho 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Texto do corpo 1</td>
      <td>Texto do corpo 2</td>
    </tr>
  </tbody>
</table>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Formulário">
        <p>
          O formulário é usado para adquirir dados de viewers da página. Um
          formulário pode ter atributos, sendo o{' '}
          <code>method=&quot;get&quot;</code> que mostra os dados fornecidos na
          barra de link ou o <code>method=&quot;post&quot;</code> que oculta os
          dados do usuário (é usado em páginas de login). Também existe o
          atributo <code>action=&quot;&quot;</code> que indica para onde os
          dados serão enviados.
        </p>
        <CodeCmp language="html">{'<form action="" method=""></form>'}</CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tipos de input">
        <p>
          Os inputs são tags filhas do <code>&lt;form&gt;</code> e são
          responsáveis por definir que tipo de formulário será mostrado na tela.
          Abaixo os seus atributos e para o que cada um serve.
        </p>

        <table>
          <tbody>
            <tr>
              <th>Atributo</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>type=&quot;text&quot;</td>
              <td>Abre uma barra de texto</td>
            </tr>
            <tr>
              <td>type=&quot;password&quot;</td>
              <td>Abre uma barra para senhas</td>
            </tr>
            <tr>
              <td>type=&quot;checkbox&quot;</td>
              <td>Abre um quadrado de seleção</td>
            </tr>
            <tr>
              <td>type=&quot;radio&quot;</td>
              <td>
                Cria um quadrado de seleção onde apenas um pode ser marcado
              </td>
            </tr>
            <tr>
              <td>type=&quot;reset&quot;</td>
              <td>Reseta os dados dos formulários</td>
            </tr>
            <tr>
              <td>type=&quot;submit&quot;</td>
              <td>Envia os dados do formulário para o backend</td>
            </tr>
            <tr>
              <td>type=&quot;color&quot;</td>
              <td>Abre uma gaveta para a escolha de cores</td>
            </tr>
            <tr>
              <td>type=&quot;date&quot;</td>
              <td>Abre um calendário para selecionar datas</td>
            </tr>
            <tr>
              <td>type=&quot;datetime&quot;</td>
              <td>Permite selecionar datas e horas</td>
            </tr>
            <tr>
              <td>type=&quot;file&quot;</td>
              <td>Permite enviar um arquivo (precisa ser post)</td>
            </tr>
            <tr>
              <td>type=&quot;number&quot;</td>
              <td>Só permite números</td>
            </tr>
            <tr>
              <td>type=&quot;range&quot;</td>
              <td>
                Cria uma barra para escolher números (barra de nota do
                Instagram)
              </td>
            </tr>
            <tr>
              <td>type=&quot;tel&quot;</td>
              <td>Aparece apenas o teclado numérico (telefone)</td>
            </tr>
            <tr>
              <td>type=&quot;email&quot;</td>
              <td>Só permite emails</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Tratamento de inputs">
        <p>
          É importante tratar os dados de inputs antes de enviar seus dados ao
          servidor. O tratamento pode ser feito usando JavaScript, porém a
          maneira comum de fazê-lo é usando atributos nas tags form. Abaixo os
          principais atributos:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Atributo</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>required</td>
              <td>
                Especifica se um campo de formulário precisa ser preenchido
                antes que o formulário possa ser enviado.
              </td>
            </tr>
            <tr>
              <td>minlength</td>
              <td>
                Especifica o comprimento mínimo dos dados textuais (strings).
              </td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>
                Especifica o comprimento máximo dos dados textuais (strings).
              </td>
            </tr>
            <tr>
              <td>min</td>
              <td>Especifica o valor mínimo dos tipos de entrada numérica.</td>
            </tr>
            <tr>
              <td>max</td>
              <td>Especifica o valor máximo dos tipos de entrada numérica.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>
                Especifica o tipo de dados que deve ser inserido (número,
                endereço de e-mail, etc.).
              </td>
            </tr>
            <tr>
              <td>pattern</td>
              <td>
                Especifica uma expressão regular que define um padrão que os
                dados inseridos precisam seguir.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="select">
        <p>
          O select cria um dropdown com dados pré-definidos (estados, por
          exemplo). Para criar um, deve ser usada a tag select seguida das tag
          option, onde ficam os dados do dropdown.
        </p>
        <CodeCmp language="html">
          {`<select name="" id="">
  <option value="">opção 1 </option>
</select>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Textarea">
        <p>
          O textarea é usado para criar uma área de texto para enviar ao backend
          (uma página de reclamações, por exemplo). O tamanho de uma área de
          texto é especificado pelos atributos cols=&quot;&quot; e
          rows=&quot;&quot;.
        </p>
        <CodeCmp language="html">
          {'<textarea name="" id="" cols="30" rows="10"></textarea>'}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Tags Semânticas">
        <p>
          No HTML5 foram introduzidas tags semânticas para melhorar o
          ranqueamento de pesquisa no Google. Abaixo estão as principais:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Tags</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>&lt;header&gt;</td>
              <td>Indica um cabeçalho</td>
            </tr>
            <tr>
              <td>&lt;nav&gt;</td>
              <td>Indica um menu de navegação</td>
            </tr>
            <tr>
              <td>&lt;footer&gt;</td>
              <td>Indica o rodapé da página</td>
            </tr>
            <tr>
              <td>&lt;main&gt;</td>
              <td>Principal conteúdo da página (só pode ser usado uma vez)</td>
            </tr>
            <tr>
              <td>&lt;section&gt;</td>
              <td>Separa o site em seções</td>
            </tr>
            <tr>
              <td>&lt;article&gt;</td>
              <td>Indica um artigo no site</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Atributos personalizados">
        <p>
          O setAttribute e getAttribute são métodos do jS usados para criar ou
          modificar atributos em um elemento html, seja eles atributos
          pre-existentes ou não. Para criar um atributos se usa o
          .setAttribute(&quot;&quot;) e para armazenar um atributo existente
          usamos o get.Attribute(&quot;&quot;)
        </p>
        <p>
          Segundo as boas praticas da programação, ao usar a atributo inventado
          devemos declara-lo no Js usando o method &quot;dataset.&quot; e no
          html usar &quot;data-&quot; antes do nome do atributo.
        </p>
        <CodeCmp language="html">
          {`<ul id='lista' data-n='25' data-id=53>
</ul>`}
        </CodeCmp>
        <CodeCmp language="javascript">
          {`let lista = document.getElementById('lista')
lista.dataset.n = 4`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Video">
        <p>
          Para adicionar videos a uma pagina html usamos a tag video. junto a
          tag podemos usar alguns atributos:
        </p>
        <table>
          <thead>
            <tr>
              <th>Atributos</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                width=&quot;&quot; <br />
                weight=&quot;&quot;
              </td>
              <td>Alteram a proporção do vídeo(altura e largura)</td>
            </tr>
            <tr>
              <td>controls</td>
              <td>Adiciona os controles ao vídeo</td>
            </tr>
            <tr>
              <td>autoplay</td>
              <td>Inicia o vídeo automaticamente</td>
            </tr>
            <tr>
              <td>poster=&quot;&quot;</td>
              <td>Adiciona uma thumbnail ao vídeo</td>
            </tr>
            <tr>
              <td>preload=&quot;&quot;</td>
              <td>
                Carrega dados parciais ou completos do vídeo antes de ser
                iniciado
              </td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="Video - Controle">
        <p>
          Usando javaScript e possível criar um novo controlador de video.
          abaixo alguns methods nativos:
        </p>
        <table>
          <thead>
            <tr>
              <th>Métodos</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.play</td>
              <td>Inicia o video</td>
            </tr>
            <tr>
              <td>.pause</td>
              <td>Pausa o video</td>
            </tr>
            <tr>
              <td>.currentTime</td>
              <td>Pula ou volta segundos do video</td>
            </tr>
            <tr>
              <td>.playbackRate</td>
              <td>Modifica a velocidade de reprodução do video</td>
            </tr>
          </tbody>
        </table>
      </SectionCmp>

      <SectionCmp title="iFrame">
        <p>
          O iframe e uma tag do html que é usada para colocar trechos de outros
          sites no seu próprio. Atualmente o uso mais comum deste e para usar
          videos de outros servidores(YouTube,Vimeo,etc.)
        </p>
        <p>
          Para fazer isso no YouTube, por exemplo, devemos ir no video em
          questão, clicar em compartilhar, incorporar e copiar o código iframe
          do video.
        </p>
        <CodeCmp language="html">
          {`<iframe width="" height="" src="https://www.youtube.com" title="YouTube video" frameborder=""
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"=allowfullscreen></iframe>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Audio">
        <p>
          A tag audio serve para adicionar audios a uma página html. A tag audio
          semelhante a tag video possui atributos que podem que facilitam a
          leitura da página.
        </p>
        <CodeCmp language="html">
          {`<audio class="audio" controls>
  <source src="../audio.mp3" type="audio/ogg">
</audio>`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Set Interval">
        <p>
          E possível criar animações simples usando Html, css e js juntos. Para
          fazer esse tipo simples de animação podemos usar um setInterval, junto
          a um style.width/height para criar a movimentação.
        </p>
        <CodeCmp language="javascript">
          {`setInterval(() => {
  player.style.top = posX;
  player.style.left = posY;
}, time);`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="Canvas">
        <p>
          O canvas é uma tela dentro do html que é usada para fazer animações,
          jogos, etc. Todo canvas deve criado usando um id, e as atributos
          height=&quot;&quot; e width=&quot;&quot;.
        </p>
        <p>
          Após o configuração básica do canvas no html o restante deve ser
          configurado no Js. Para tornar a tela funcional devemos primero pegar
          o id do canvas e depois declarar o tipo de tela(2d ou 3d).
        </p>
        <CodeCmp language="javascript">
          {`let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");`}
        </CodeCmp>

        <h3>Inicio e Fim do caminho (Path)</h3>

        <p>
          Antes de criarmos um elemento cavas devemos usar o beginPath para
          sinalizar o inicio da linha. Também é possível usar closePath para
          fechar o canvas.
        </p>
        <CodeCmp language="javascript">
          {`ctx.beginPath();
ctx.closePath();`}
        </CodeCmp>

        <h3>Linhas</h3>
        <p>
          Para criar linhas no canvas devemos seguir o passo a passo a baixo:
        </p>
        <p>
          Ps: também é possível mudar a espessura e cor da linha com lineWidth e
          strokeStyle respectivamente.
        </p>
        <ol>
          <li>iniciar uma nova linha com beginPath</li>
          <li>Declarar o inicio da linha com &quot;moveTo&quot;</li>
          <li>Declarar o final da linha com &quot;lineTo&quot;&quot;</li>
          <li>Declarar a espessura da linha com &quot;stroke&quot;</li>
        </ol>

        <CodeCmp language="javascript">
          {`ctx = context;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.lineWidth = n;
ctx.strokeStyle = "cor";
ctx.stroke();`}
        </CodeCmp>

        <h3>Retângulo preenchido</h3>
        <p>
          Para criar um retângulo preenchido no canvas devemos seguir o passo a
          passo a baixo:
        </p>
        <ol>
          <li>iniciar uma nova linha com beginPath</li>
          <li>Declarar a cor do retângulo com fillStyle</li>
          <li>Declarar o local e tamanho do retângulo com fillRect</li>
          <li>Imprimir o triangulo com fill</li>
        </ol>

        <CodeCmp language="javascript">
          {`ctx = context;
ctx.beginPath();
ctx.fillStyle = "cor";
ctx.fillRect(x, y, altura, largura);
ctx.fill();`}
        </CodeCmp>

        <h3>Retângulo oco</h3>
        <p>
          Para criar um retângulo oco no canvas devemos seguir o passo a passo a
          baixo:
        </p>

        <ol>
          <li>iniciar uma nova linha com beginPath</li>
          <li>Declarar a cor do retângulo com strokeStyle</li>
          <li>Declarar o local e tamanho do retângulo com strokeRect</li>
          <li>Imprimir o triangulo com stroke</li>
        </ol>

        <CodeCmp language="javascript">
          {`ctx = context;
ctx.beginPath();
ctx.strokeStyle = "cor";
ctx.strokeRect(x, y, altura, largura);
ctx.stroke();`}
        </CodeCmp>

        <h3>Retângulo transparente</h3>
        <p>
          Para criar um retângulo transparente no canvas devemos seguir o passo
          a passo a baixo:
        </p>
        <ol>
          <li>iniciar uma nova linha com beginPath</li>
          <li>imprimir o triangulo usando clearRect</li>
        </ol>
        <CodeCmp language="javascript">
          {`ctx = context;
ctx.clearRect(x,y,altura,largura);`}
        </CodeCmp>

        <h4>Circles</h4>
        <p>
          Para criar círculos no canvas devemos seguir o este passo a passo:
        </p>
        <ol>
          <li>iniciar uma nova linha com beginPath</li>
          <li>declarar o style do circulo com strokeStyle</li>
          <li>declarar o método arc e suas propriedades</li>
          <li>imprimir o circulo na tela com stroke</li>
        </ol>
        <p>
          {' '}
          ps: o inicio e o fim são medidos em radianos. 1 circulo completo
          equivale a 2PI radianos. Usando os atributos fillStyle e fill e
          possível preencher o circulo.
        </p>
        <CodeCmp language="javascript">
          {`ctx = context
ctx.beginPath()
ctx.strokeStyle = "cor"
ctx.arc(x, y, raio, incio, fim, anti-horário)
ctx.fillStyle = "cor"
ctx.fill()
ctx.stroke()`}
        </CodeCmp>

        <h3>Animação</h3>
        <p>
          Usando o canvas junto ao serInterval e possível criar animações. Para
          criar as animações devemos manipular os valores declarados na criação
          do desenho: e um circulo podemos modificar sua posição alterando os
          valores de x e y ou seu surgimento alterando seu valor de incio e fim.
        </p>
        <p>
          Ps: ao criar uma animação de movimento em canvas devemos também criar
          o background em canvas.
        </p>

        <h3>Imagens</h3>
        <p>
          Existem 2 maneiras de se trabalhar com uma imagem em canvas:
          declarando a imagem no html ou diretamente no JS.
        </p>
        <ol>
          <p>Ex modelo 1: </p>
          <li>Colocar a imagem em uma let</li>
          <li>Declarar os atributos da imagem: .drawImage(img, x, y)</li>
        </ol>
        <CodeCmp language="javascript">
          {`ctx = context
let img = document.getElementById("image")
ctx.drawImage(img, x, y )`}
        </CodeCmp>
        <ol>
          <p>ex: modelo 2:</p>
          <li>declara uma nova imagem em uma let</li>
          <li>declarar o caminho da imagem</li>
          <li>
            criar uma function onLoad para a imagem ser carregada após o fim do
            carregamento da página
          </li>
        </ol>
        <CodeCmp language="javascript">
          {`let img = new Image();
img.src = "../img/1.png";
img.onload = function desenharImg() {
ctx.drawImage(img, 20, 20); }`}
        </CodeCmp>
      </SectionCmp>
    </>
  )
}
