# ADR-0003: Uma única entidade, com listas privadas por usuário

## Contexto
O README original separava "catálogo" e "backlog pessoal". Na V1 os jogos
são cadastrados manualmente, sem API externa, e a intenção é que cada
usuário tenha a sua própria lista. Dois usuários que anotam o mesmo jogo
não compartilham nada.

## Decisão
Uma única entidade, Game, que pertence a um usuário (owner_id). O nome é
único dentro da lista de cada dono (ignorando maiúsculas/minúsculas).
O valor é dado pessoal (preço varia por loja e promoção).

## Alternativas consideradas
- **Duas entidades (Game + BacklogEntry):** o jogo seria compartilhado e a
  anotação seria pessoal. Só traz benefício com catálogo compartilhado ou
  API externa, que não existem na V1.

## Consequências
- (+) Modelo e código mais simples.
- (+) Alinhado ao uso real: lista privada.
- (−) Se surgir um catálogo compartilhado ou API externa, será preciso
  separar as entidades com uma migração.
- (−) O mesmo jogo pode existir repetido em listas de usuários diferentes.