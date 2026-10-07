# Game Backlog: Spec da V1

## Regras gerais
- Usuário único na V1; cada usuário terá a sua própria lista (privada).
- Status válidos: Want to Play, Playing, Completed, Paused, Dropped.
- Um jogo tem: nome (obrigatório, até 50 caracteres); gênero (opcional,
  um só, até 30 caracteres); data de lançamento, valor e observação
  (opcionais, esta com até 300 caracteres); status.
- Valor em reais, sem histórico de preço. Vazio = não informado; 0 = gratuito.
- Texto vazio ou só com espaços em gênero e observação equivale a
  "não informado".
- Acentos contam como diferença na V1 (Pokémon ≠ Pokemon).

## 1. Adicionar jogo
- ADD-1: Dado um nome válido, o jogo é criado com status "Want to Play".
- ADD-2: Dado apenas o nome, os campos opcionais ficam vazios.
- ADD-3: Dados nome, data de lançamento, gênero, valor e observação,
  todos são salvos.
- ADD-4: Nome vazio ou só com espaços é recusado, informando o motivo.
- ADD-5: Espaços nas pontas do nome são ignorados ao salvar.
- ADD-6: Nome igual a um já existente (ignorando maiúsculas/minúsculas e
  espaços nas pontas) é recusado, informando que o jogo já existe.
- ADD-7: "Hades" e "Hades II" são jogos diferentes e podem coexistir.
- ADD-8: O valor é opcional; se omitido, fica como "não informado".
- ADD-9: Valor zero é aceito e significa gratuito.
- ADD-10: Valor negativo é recusado, informando o motivo.
- ADD-11: Valor com mais de duas casas decimais é recusado, informando o motivo.
- ADD-12: Nome com mais de 50 caracteres (contados depois de remover os
  espaços das pontas) é recusado, informando o motivo.
- ADD-13: Observação com mais de 300 caracteres é recusada, informando o motivo.
- ADD-14: Gênero com mais de 30 caracteres é recusado, informando o motivo.
- ADD-15: Data de lançamento inválida (ex.: 31/02) é recusada, informando
  o motivo.

## 2. Listar jogos
- LST-1: Retorna todos os jogos com nome, status, data de lançamento,
  gênero, valor e observação.
- LST-2: Sem jogos, retorna lista vazia (não é erro).
- LST-3: Inclui jogos em qualquer status.
- LST-4: Ordenada pelo jogo adicionado mais recentemente primeiro.

## 3. Ver um jogo
- GET-1: Dado um jogo existente, retorna todos os seus dados.
- GET-2: Jogo inexistente: informa que não foi encontrado.

## 4. Alterar status
- STS-1: Posso mudar o status de um jogo para qualquer um dos cinco válidos.
- STS-2: Qualquer mudança entre status diferentes é permitida.
- STS-3: O novo status aparece ao listar ou ver o jogo.
- STS-4: Status fora dos cinco válidos é recusado, informando o motivo.
- STS-5: Jogo inexistente: informa que não foi encontrado.
- STS-6: Mudar para o mesmo status atual é recusado.

## 5. Remover jogo
- DEL-1: O jogo removido deixa de existir (some da lista e da consulta).
- DEL-2: Jogo inexistente: informa que não foi encontrado.
- DEL-3: Após remover, posso adicionar outro jogo com o mesmo nome.

## 6. Editar jogo
- EDT-1: Dado um jogo existente, posso alterar um ou mais dos campos:
  nome, gênero, data de lançamento, valor e observação.
- EDT-2: Campos não informados no pedido permanecem como estão.
- EDT-3: Pedido que tenta alterar status, id, dono ou data de adição é
  recusado, informando que não são editáveis por aqui (para status, usar
  "alterar status").
- EDT-4: O jogo editado mantém sua posição na lista.
- EDT-5: Pedido sem nenhum campo para alterar é recusado, informando o motivo.
- EDT-6: Os campos alterados seguem as mesmas validações da criação
  (ADD-4, 5 e 9 a 15).
- EDT-7: Mudar o nome para o de outro jogo (ignorando maiúsculas/minúsculas
  e espaços nas pontas) é recusado, informando que o jogo já existe.
- EDT-8: Salvar o mesmo nome do próprio jogo, ainda que só mudando
  maiúsculas/minúsculas, é permitido.
- EDT-9: Campos opcionais (gênero, data, valor, observação) podem ser
  removidos, voltando a "não informado". O nome não pode ser removido.
- EDT-10: Jogo inexistente: informa que não foi encontrado.

## Fora da V1
Plataformas, "jogar com amigos", filtros e busca, notas, horas jogadas,
API externa, contas e multiusuário, recomendação por IA.