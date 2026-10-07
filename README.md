# 🎮 Game Backlog

## Visão geral

**Game Backlog** é uma aplicação para gerenciamento pessoal de jogos, permitindo que o usuário organize sua biblioteca, acompanhe seu progresso e receba recomendações sobre qual jogo jogar.

A aplicação terá um catálogo de jogos e um backlog pessoal. O usuário poderá organizar os jogos de acordo com seu estado atual e, posteriormente, utilizar uma IA para fazer recomendações baseadas em contexto e preferências.

O objetivo principal do projeto não é apenas criar um backlog de jogos, mas utilizá-lo como um **projeto de estudo de engenharia de software**, praticando especificação, modelagem de domínio, arquitetura, testes e evolução do sistema.

---

## 🎯 Objetivos

* Criar um sistema para gerenciamento de jogos.
* Permitir que usuários mantenham seu próprio backlog.
* Permitir acompanhamento do progresso dos jogos.
* Disponibilizar busca e filtros.
* Criar um sistema de recomendação.
* Utilizar IA para interpretar pedidos em linguagem natural.
* Praticar **Spec-Driven Development (SDD)**.
* Exercitar conceitos de **System Design**.
* Evoluir o sistema gradualmente conforme novos requisitos surgem.

---

## 👤 Funcionalidades principais

### Catálogo de jogos

O sistema deverá possuir um catálogo contendo informações sobre os jogos, como:

* Nome
* Gêneros
* Plataformas
* Desenvolvedora
* Data de lançamento
* Duração estimada
* Tags
* Avaliação

Inicialmente, os dados poderão ser obtidos através de uma API externa.

---

### 📚 Backlog pessoal

O usuário poderá adicionar jogos ao seu backlog e acompanhar seu estado.

Possíveis estados:

* `Want to Play`
* `Playing`
* `Completed`
* `Paused`
* `Dropped`

O usuário também poderá registrar informações pessoais, como:

* Nota
* Horas jogadas
* Prioridade
* Observações

---

### 🔎 Busca e filtros

O usuário poderá pesquisar e filtrar jogos utilizando informações estruturadas.

Exemplos:

* Gênero
* Plataforma
* Duração
* Avaliação
* Status
* Prioridade
* Tags

A busca e os filtros deverão funcionar sem depender da IA.

---

### 🧠 Sistema de recomendação

O sistema deverá ser capaz de recomendar jogos com base nas informações disponíveis.

Inicialmente, a recomendação poderá utilizar regras tradicionais, considerando fatores como:

* Preferências do usuário
* Gêneros favoritos
* Jogos já concluídos
* Nota atribuída pelo usuário
* Prioridade
* Tempo disponível
* Status do jogo
* Duração estimada

Posteriormente, a IA poderá ser adicionada como uma camada complementar.

---

### 🤖 Assistente de IA

O usuário poderá realizar pedidos utilizando linguagem natural.

Exemplos:

> "Tenho duas horas hoje e quero jogar alguma coisa relaxante."

> "Quero algo parecido com os jogos que eu gostei."

> "Quero um jogo curto para terminar esse fim de semana."

A IA deverá interpretar a intenção do usuário e transformá-la em critérios que possam ser utilizados pelo sistema de recomendação.

A IA também poderá explicar por que determinado jogo foi recomendado.

---

## 🧩 Princípios do sistema

O projeto deverá seguir alguns princípios importantes.

### A IA não é a fonte da verdade

A IA deverá atuar como uma camada de interpretação e assistência.

A fonte de verdade deverá continuar sendo o próprio sistema.

```text
Database
    ↓
Fonte de verdade

Business Logic
    ↓
Regras do sistema

AI
    ↓
Interpretação e assistência
```

---

### IA não deve ser utilizada quando não for necessária

Operações determinísticas deverão continuar sendo realizadas pelo sistema tradicional.

Por exemplo:

> "Mostre meus jogos de RPG com menos de 20 horas."

Não é necessário utilizar um LLM.

Já:

> "Quero algo curto e relaxante para jogar hoje."

pode se beneficiar de IA para interpretar a intenção.

---

### Evolução incremental

O sistema deverá começar simples e evoluir conforme novos requisitos forem adicionados.

Não é necessário projetar toda a arquitetura futura antes da primeira versão.

---

# 🏗️ Evolução conceitual

Uma possível evolução do projeto:

### V1 — Backlog básico

* Catálogo
* Usuário
* Adicionar jogo ao backlog
* Alterar status
* Visualizar backlog

### V2 — Organização

* Busca
* Filtros
* Tags
* Prioridade
* Notas
* Horas jogadas

### V3 — Recomendação

* Sistema de ranking
* Preferências
* Histórico
* Recomendações baseadas em regras

### V4 — IA

* Interpretação de linguagem natural
* Recomendação contextual
* Explicação das recomendações

### V5 — Personalização

* Histórico de comportamento
* Preferências inferidas
* Recomendações personalizadas

### V6 — Evolução arquitetural

A partir do crescimento do sistema, avaliar problemas como:

* Cache
* Filas
* Processamento assíncrono
* Integração com APIs externas
* Rate limiting
* Observabilidade
* Resiliência
* Escalabilidade

Esses problemas não precisam ser implementados antecipadamente. Devem surgir como consequência de novos requisitos.

---

# 🧪 Objetivo de aprendizado

O projeto deverá ser utilizado para praticar:

* Product Requirements
* Functional Requirements
* Domain Modeling
* API Design
* Database Design
* System Design
* Architecture
* Testing
* Error Handling
* Observability
* External API Integration
* AI Integration
* Caching
* Asynchronous Processing
* Resilience
* Spec-Driven Development

---

# 📋 Metodologia

O desenvolvimento deverá seguir, sempre que possível, o ciclo:

```text
Problema
   ↓
Especificação
   ↓
Critérios de aceitação
   ↓
Design
   ↓
Implementação
   ↓
Testes
   ↓
Observabilidade
   ↓
Feedback
   ↓
Nova especificação
```

O objetivo é evitar que a implementação seja o ponto de partida de cada funcionalidade.

---

## 🚧 Escopo inicial

A primeira versão deverá ser propositalmente pequena.

O objetivo inicial é apenas permitir que um usuário:

1. Consulte jogos disponíveis.
2. Adicione jogos ao backlog.
3. Visualize seu backlog.
4. Altere o status de um jogo.

Funcionalidades de recomendação e IA serão adicionadas posteriormente.

---

## 💡 Ideia central

> **Construir um sistema simples de gerenciamento de jogos e utilizá-lo como laboratório para aprender a projetar, especificar e evoluir software com auxílio de IA.**
