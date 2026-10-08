# ADR-0005: Adotar TDD como regra do projeto

## Contexto
O projeto é um laboratório de estudo e segue Spec-Driven Development. A
spec da V1 tem 40 critérios que precisam virar testes automatizados.

## Decisão
Adotar TDD (teste falhando → código mínimo → refatorar) como regra:
- **Domínio e casos de uso:** o teste vem sempre antes do código.
- **Repositório, banco e HTTP:** testes junto ou logo depois do código.
- Cada teste cita o código do critério que cobre (ex.: "ADD-4").

## Alternativas consideradas
- **Testes depois do código:** é fácil pular e os critérios deixam de
  guiar o design.
- **TDD estrito em todas as camadas:** muito atrito onde há banco e servidor.

## Consequências
- (+) Cada critério tem teste, provando o critério de sucesso do Passo 1.
- (+) O design do domínio nasce guiado pelo comportamento esperado.
- (−) Ritmo inicial mais lento.
- (−) Exige disciplina de não pular o passo vermelho.