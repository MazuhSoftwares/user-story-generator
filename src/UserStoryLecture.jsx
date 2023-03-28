export default function UserStoryLecture() {
  return (
    <article className="user-story-lecture-article">
      <h2>O que são histórias de usuário?</h2>
      <p>
        Histórias de usuário são descrições simples e curtas de uma determinada
        funcionalidade de software. Idealmente essa história veio de observações
        e conversas com usuários.
      </p>
      <p>
        Em uma Metodologia Ágil, essa descrição curta é suficiente para um time
        multidisciplinar conseguir usar sua autonomia de projetar, implementar e
        testar os detalhes que a tornem realidade.
      </p>
      <p>
        Não há nenhuma regra específica para criar as histórias. A orientação é
        que caiba em um papelzinho de "post it", para manter objetividade. Este
        template acima apenas é um facilitador inicial, e seus principais pontos
        são:
      </p>
      <ul>
        <li>
          Persona: a audiência que protagoniza essa história (como visitante,
          usuário gratuito, usuário pago, gestora).
        </li>
        <li>
          Tarefa: a intenção de ação necessária para alcançar o objetivo
          (inserir um dado, selecionar algo, preencher um formulário etc).
        </li>
        <li>
          Objetivo: é o benefício alcançado, o problema da persona a ser
          resolvido (ter uma dado compartilhada, descobrir uma informação para
          tomar decisões, ou até ser apenas feliz).
        </li>
      </ul>
      <p>
        Esses detalhes são importantes porque evita que a história vire uma
        "tarefa técnica". E trás mais atenção a quem tipo de pessoa deve haver
        empatia e o que essa pessoa realmente quer. Por exemplo, ninguém quer de
        verdade "abrir uma planilha no Windows", mas sim "organizar sua vida
        financeira" e por um acaso planilha no sistema operacional é uma opção
        de ferramenta a ser potencialmente reinventada.
      </p>
    </article>
  );
}
