# React + Vite

# Testes

Sugestão principal: testes de componente e unidade com Jest + React Testing Library.
Por quê: rápidos, isolam lógica e UI, rodam em CI facilmente, cobrem renderização, estados e callbacks sem depender de backend.

Complementares:

Testes de integração (componentes compondo páginas) para garantir interação conjunta.
Testes E2E (Cypress ou Playwright) para fluxos críticos (listar produto, adicionar ao carrinho, checkout).
Testes de contrato (se consumir APIs) usando Pact para garantir compatibilidade entre frontend e microserviço de produto.
Testes de performance leves (Lighthouse CI) em build.

Critério inicial: começar com Jest + React Testing Library porque traz maior retorno rápido em qualidade e reduz regressões em refactors.
