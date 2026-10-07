# Game Backlog: Modelo de domínio da V1

## Entidade: Game (pertence a um usuário)
- id, ownerId, createdAt: preenchidos pelo sistema
- name: obrigatório, sem espaços nas pontas, não vazio, máx. 50
- genre: opcional, um só, texto livre
- releaseDate: opcional
- price: opcional, em reais, 0 = grátis, não negativo, até 2 casas decimais
- note: opcional, máx. 300
- status: Want to Play | Playing | Completed | Paused | Dropped
  (inicial: Want to Play; mudança livre, exceto para o mesmo status)

## Decisões de modelagem
- Uma única entidade (sem catálogo compartilhado): cada usuário tem
  sua lista privada.
- Valor é dado pessoal (preço varia por loja e promoção).
- Na V1 existe um usuário fixo; o dono já está no modelo.

## Camadas e responsabilidades
| Camada | Responsabilidade | Critérios |
|---|---|---|
| Domínio (Game) | Impedir que um jogo exista em estado inválido | ADD-1 a 5, ADD-8 a 13, STS-1, 2, 4, 6 |
| Casos de uso | Orquestrar cada funcionalidade; duplicidade; "não encontrado" | ADD-6, 7, DEL-2, 3, GET-2, STS-5 |
| Repositório / Postgres | Guardar, buscar, ordenar; unicidade por usuário e nome normalizado como rede de segurança | LST-1 a 4, ADD-6 |
| API (HTTP) | Traduzir pedidos e erros; nenhuma regra de negócio | todas (borda) |

## Regra de ouro
As dependências apontam para dentro: o domínio não conhece API nem banco.