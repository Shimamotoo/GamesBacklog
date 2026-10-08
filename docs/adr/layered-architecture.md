# ADR-0002: Arquitetura em camadas

## Contexto
O projeto é um laboratório de estudo de engenharia de software. As regras
da spec são de tipos diferentes (do jogo, da lista, de fluxo) e precisam
de lugares claros. Também queremos testar o domínio sem banco nem servidor
e deixar a V4 (IA) entrar depois como mais uma camada.

## Decisão
Quatro camadas: domain, application, infrastructure e http. As dependências
apontam para dentro: o domínio não conhece nenhuma das outras. O contrato
do repositório fica em application; a implementação (Postgres) fica em
infrastructure. A camada http não tem regra de negócio, só traduz pedidos
e erros.

## Alternativas consideradas
- **Tudo nas rotas:** mais rápido no começo, mas mistura regra, banco e HTTP.
- **Framework opinativo (ex.: NestJS):** traz estrutura pronta, mas toma
  as decisões de camadas que queremos aprender a tomar.
- **Arquitetura hexagonal completa:** mais cerimônia do que a V1 pede.

## Consequências
- (+) Regras testáveis rápido, sem banco (repositório falso em memória).
- (+) Trocar banco ou framework fica isolado.
- (+) Cada regra tem um lugar certo.
- (−) Mais arquivos e indireção para um sistema pequeno.
- (−) Exige disciplina para não "vazar" regra para a camada http.