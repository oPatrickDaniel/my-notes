import SectionCmp from './components/section'
import CodeCmp from './components/code'
import Image from 'next/image'
import cicloDesenvolvimentoImg from '@/app/assets/cicloDesenvolvimento.png'

export default function Home() {
  return (
    <>
      <h1>Logica de programação</h1>

      <SectionCmp title="Porque um software é criado?">
        <ul className="list-inside list-disc">
          <li>Para criar soluções para problemas do dia a dia.</li>
          <li>Automação e otimização de processos.</li>
        </ul>
      </SectionCmp>

      <SectionCmp title="Ciclo de desenvolvimento de software.">
        <p>Estágio 1 - Idealização.</p>
        <p>Estágio 2 - Especificação de requisitos.</p>
        <p>Estágio 3 - Validação da solução.</p>
        <p>Estágio 4 - Desenvolvimento e testes.</p>
        <p>Estágio 5 - Implantação e entrega.</p>
        <Image
          src={cicloDesenvolvimentoImg}
          alt="Ciclo de desenvolvimento"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </SectionCmp>

      <SectionCmp title='Método 5 "Q"s para montar um algoritmo'>
        <p>
          Analise criticamente o problema e descubra:(Tente explicar esse
          problema pra voce mesmo em voz alta e compreender completamente o
          problema).
        </p>
        <ol className="list-inside list-decimal">
          <li>Quais são os dados de entrada necessários?</li>
          <li>O que devo fazer com esses dados?</li>
          <li>Quais são as restrições deste problema?</li>
          <li>Qual é o resultado esperado?</li>
          <li>
            Qual é sequencia de passos a ser feita para chegar no resultado?
          </li>
        </ol>
      </SectionCmp>

      <SectionCmp title="Conceitos OBRIGATÓRIOS para ser capaz de resolver problemas.">
        <p>
          Existem 4 conceitos essenciais para a resolução de problemas com a
          codagem.
        </p>
        <h3>Variáveis</h3>
        <p>Variáveis servem para armazenar valores para um uso tardio.</p>
        <h3>Condicionais</h3>
        <p>
          Condicionais são estruturas onde um algoritmo só é executado caso
          pré-requisitos sejam verdadeiros(ou falsos).
        </p>
        <h3>Laços de repetição</h3>
        <p>
          Laços de repetição são estruturas onde um algoritmo pode ser executado
          várias vezes em seguida.
        </p>
        <h3>Coleções</h3>
        <p>
          Coleções armazenam valores semelhantes a variáveis, porém podendo
          armazenar vários valores de uma única vez.
        </p>
      </SectionCmp>

      <SectionCmp title="Criando soluções em pseudocódigo">
        <p>
          Podemos usar pseudocódigos para exemplificar e facilitar a construção
          de um projeto:
        </p>
        <p>
          Crie um programa que retorne o valor hora de um funcionário com base
          no seu salário mensal e horas trabalhadas por mês.
        </p>
        <CodeCmp language="q">
          {`input salario-mensal
input horas-trabalhadas-por-mes
valor-hora = salario-mensal / horas-trabalhadas-por-mes
print valor-hora`}
        </CodeCmp>
      </SectionCmp>

      <SectionCmp title="clean code">
        <p>
          Os princípios do clean code foram popularizados por Robert C. Martin
          em seu livro &quot;Clean Code: A Handbook of Agile Software
          Craftsmanship&quot;. Esses princípios tem como objetivo criar um
          código legível e compreensivo a humanos, tornando fácil sua manutenção
        </p>
        <h3></h3>
      </SectionCmp>

      <SectionCmp title="P.O.O">
        <p>
          Poo e um acrônimo para programação orientada a objetos. Essa é o
          paradigma de programação mais usado atualmente. O poo usa como pilar
          quatro pilares, sendo esses herança, polimorfismo, encapsulamento e
          abstração.
        </p>
        <h3>Herança</h3>
        <p>
          A herança consiste em reaproveitar trechos de código na crianção de um
          novo semelhante. Por exemplo uma class carro que possui as
          propriedades nome e marcar e motor poderiam ser estendidas por uma
          nova chamada carroElétrico que além das propriedades de carro poderia
          ter a prioridade bateria
        </p>
        <h3>Polimorfismo</h3>
        <p>
          O polimorfismo consiste em identificar objetos de duas classes
          diferentes que tem o mesmo método implementado de formas diferentes.
          Nestes casos o objeto pode ser modificado na classe herdeira
          resultando no mesmo resultado porem de formas diferentes.
        </p>
        <h3>Encapsulamento</h3>
        <p>
          O encapsulamento consiste em tornar dados sensíveis inacessíveis fora
          da classe, usando private por exemplo.
        </p>
      </SectionCmp>

      <SectionCmp title="Design Patterns">
        <p>
          Os patters são soluções reutilizáveis para problemas comuns no
          desenvolvimento. Criados pelos Gof(gang of for) eles são padrões
          documentados em 23 formas e divididas em 3 categorias: creational,
          structural, behavioral
        </p>
        <h3>Creational Patterns</h3>
        <p>
          Esses padrões lidam com o processo de criação de objetos. Eles
          fornecem mecanismos para instanciar objetos de maneira a tornar um
          sistema independente de sua criação, composição e representação.
        </p>
        <h3>Structural Patterns</h3>
        <p>
          Esses padrões concentram-se na composição de objetos para formar
          estruturas maiores. Eles permitem definir como classes e objetos podem
          ser combinados para formar grandes estruturas, mantendo ao mesmo tempo
          flexibilidade e reutilização.
        </p>
        <h3>Behavioral Patterns</h3>
        <p>
          Esses padrões estão relacionados à forma como objetos interagem e se
          comunicam entre si. Eles definem modelos de comunicação entre objetos
          para facilitar a colaboração e a responsabilidade das tarefas.
        </p>
      </SectionCmp>

      <SectionCmp title="S.O.L.I.D">
        <p>
          Solid é um acrônimo de letras, cada letra representando um principio
          de designe de software que visa cria um código compreensível e
          sustentável
        </p>
        <h3>Single Responsibility Principle - SRP</h3>
        <p>
          O principio da responsabilidade unica diz que cada objeto deve ter
          apenas uma responsabilidade, e uma razão para mudar. Este conceito
          facilita possíveis mudanças no código.
        </p>
        <h3>Open/Closed Principle - OCP</h3>
        <p>
          O principio do aberto fechado diz que uma classe deve estar aberta
          para extensão, mas fechada para modificação. Seguindo este conceito
          novas features devem ser adicionadas no código via extensão sem
          modificar a classe original o que previne bugs na parte do código já
          operacional.
        </p>
        <p></p>
        <h3>Liskov Substitution Principle - LSP</h3>
        <p>
          O principio da substituição de Liskov diz que que classe derivada deve
          ser capaz de substituir os Objetos da classe base sem afetar a
          integridade do programa. Isso quer dizer que deve haver o cuidado ao
          extender uma classe para que as substituições na classe derivada não
          crie bugs que não existiam na classe original.
        </p>
        <h3>Interface Segregation Principle - ISP</h3>
        <p>
          O principio da segregação de interfaces diz que uma classe não deve
          ser forçada a implementar interfaces que não utiliza. Na pratica isso
          significa que interfaces devem ser menores e especificas, evitando a
          obrigação de implementar métodos desnecessários.
        </p>
        <h3>Dependency Inversion Principle - DIP</h3>
        <p>
          O Principio da inversão de dependências diz que devemos depender de
          abstrações e não de implementações e módulos de alto nível não devem
          depender de módulos de baixo nível. Ambos devem depender de
          abstrações. Na pratica isso quer dizer que caso haja um detalhe no
          código como um banco de dados, o funcionamento da classe não pode
          depender desse detalhe, e este deve ser injetado no código principal.
        </p>
      </SectionCmp>
    </>
  )
}
