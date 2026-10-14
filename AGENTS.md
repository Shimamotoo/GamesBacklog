Regras de trabalho neste projeto:
- A fonte da verdade é docs/02-spec-v1.md. Não altere a spec sem pedir.
- Siga TDD: um critério por ciclo. Escreva o teste, rode `npm test` em
  backend/ e mostre a falha antes de alterar qualquer código de produção.
- Não altere um teste para fazê-lo passar. Se o teste estiver errado,
  pare e pergunte.
- Não use valores fixos no código de produção para forçar falhas.
- Regras de domínio ficam em backend/src/domain. Não coloque regra de
  negócio na camada http nem na infrastructure.
- Um commit por ciclo, com prefixo feat:, test: ou chore:.
- Antes de codar, leia os ADRs em docs/adr/.