# Game Backlog: Problema e critério de sucesso da V1

## Problema
Ao ver jogos interessantes para jogar com amigos, costumo esquecer o nome
deles, inclusive de jogos que ainda não têm data de lançamento definida.
Preciso de um lugar único onde registrar esses jogos e acompanhar o que
quero jogar, o que estou jogando e o que já terminei.

## Usuário
Apenas eu na V1. O modelo de dados deve permitir mais de um usuário no
futuro, mas autenticação e cadastro de contas não fazem parte da V1.

## Escopo da V1
- Cadastrar jogos manualmente
- Consultar jogos
- Adicionar jogo ao backlog
- Visualizar o backlog
- Alterar o status de um jogo
- Remover jogos

Entrega: backend (API + testes + banco SQL), com uma interface mínima que
exibe os dados e permite alterar o status de um jogo (select).

## Fora da V1
- Integração com API externa
- Multiusuário e contas
- Notas e horas jogadas
- Recomendação por IA

## Critério de sucesso
1. Cada critério de aceitação da spec tem pelo menos um teste automatizado.
2. O fluxo completo funciona de ponta a ponta:
   consultar → adicionar → visualizar → alterar status → deletar → editar informações.

## Restrições
- Prazo: sem prazo específico.

## Decisões em aberto
- Banco de dados (PostgreSQL) - Verificar docs/adr/database.md