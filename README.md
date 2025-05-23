# 🎮 Game For Us Web

Um catálogo visual e moderno de jogos, desenvolvido com Next.js, React, TypeScript e Material UI.

![Preview](public/img/gta6.jpg)

## ✨ Visão Geral

O **Game For Us Web** é um projeto de vitrine de jogos, com foco em experiência visual, responsividade e performance. Cada jogo é apresentado em cards animados, com informações, imagens e preço formatado.

---

## 🚀 Tecnologias & Ferramentas

- **Next.js** 15
- **React** 19
- **TypeScript**
- **Material UI (MUI)**
- **SWR** (data fetching reativo)
- **Tailwind CSS**
- **Custom CSS** (animações, gradientes, cursores SVG)

---

## 🖼️ Visual & Identidade

- Paleta dinâmica (claro/escuro)
- Cards com efeito hover, blur e gradiente animado
- Cursores SVG personalizados
- Layout responsivo e tipografia moderna (Geist)

---

## 📦 Estrutura dos Principais Componentes

- `src/app/games/page.tsx` — Página principal dos jogos
- `components/card-list.tsx` — Lista de cards de jogos
- `components/card.tsx` — Card individual com animação e cor dominante
- `components/game.tsx` — Exibe imagem, nome e preço do jogo

### Exemplo de Card

```tsx
<GameCard game={{
  id: 1,
  name: "GTA 6",
  image: "/img/gta6.jpg",
  price: 299.99,
  available_requests: 5
}} />
```

---

## 🛠️ Instalação & Uso

```bash
# Instale as dependências
yarn install # ou npm install

# Rode o servidor de desenvolvimento
yarn dev # ou npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura Resumida

```
src/
  app/
    games/
      components/
      css/
  api/interfaces/
  enums/
  hooks/
  libs/
public/
  img/
  cursor/
```

---

## 👤 Autor

Desenvolvido por Daniel Miranda.

---

## 📝 Licença

Este projeto é open-source e está sob a licença MIT.
