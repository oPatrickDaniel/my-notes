
import SectionCmp from './components/section';
import CodeCmp from './components/code';

export default function Home() {
  return (
    <>
      <div className='container p-3'>
        <h1>Logica de programação</h1>

        <SectionCmp title='Porque um software é criado?'>
          <ul>
            <li>Para criar soluções para problemas do dia a dia.</li>
            <li>Automação e otimização de processos.</li>
          </ul>
        </SectionCmp>

        <SectionCmp title='Ciclo de desenvolvimento de software.'>
          <p>Estágio 1 - Idealização.</p>
          <p>Estágio 2 - Especificação de requisitos.</p>
          <p>Estágio 3 - Validação da solução.</p>
          <p>Estágio 4 - Desenvolvimento e testes.</p>
          <p>Estágio 5 - Implantação e entrega.</p>
          {/* <img src="../images/desenvolvimento_software.png" alt="img" /> */}
        </SectionCmp>

        <SectionCmp title='Método 5 "Q"s para montar um algoritmo'>
          <p>Analise criticamente o problema e descubra:(Tente explicar esse problema pra voce mesmo em voz
            alta e compreender completamente o problema).</p>
          <ol>
            <li>Quais são os dados de entrada necessários?</li>
            <li>O que devo fazer com esses dados?</li>
            <li>Quais são as restrições deste problema?</li>
            <li>Qual é o resultado esperado?</li>
            <li>Qual é sequencia de passos a ser feita para chegar no resultado?</li>
          </ol>
        </SectionCmp>

        <SectionCmp title='Conceitos OBRIGATÓRIOS para ser capaz de resolver problemas.'>
          <p>Existem 4 conceitos essenciais para a resolução de problemas com a codagem.</p>
          <h3>Variáveis</h3>
          <p>Variáveis servem para armazenar valores para um uso tardio.</p>
          <h3>Condicionais</h3>
          <p>Condicionais são estruturas onde um algoritmo só é executado caso pré-requisitos sejam
            verdadeiros(ou falsos).</p>
          <h3>Laços de repetição</h3>
          <p>Laços de repetição são estruturas onde um algoritmo pode ser executado várias vezes em
            seguida.</p>
          <h3>Coleções</h3>
          <p>Coleções armazenam valores semelhantes a variáveis, porém podendo armazenar vários valores de
            uma única vez.</p>
        </SectionCmp>

        <SectionCmp title='Criando soluções em pseudocódigo'>
          <p>Podemos usar pseudocódigos para exemplificar e facilitar a construção de um projeto:</p>
          <p>Crie um programa que retorne o valor hora de um funcionário com base no seu salário mensal e horas trabalhadas por mês.</p>
          <CodeCmp language='q'>
            {`input salario-mensal
              input horas-trabalhadas-por-mes
              valor-hora = salario-mensal / horas-trabalhadas-por-mes
              print valor-hora`}
          </CodeCmp>
        </SectionCmp>
      </div>
    </>
  )
}



