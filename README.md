# ui-test-zemoga

App Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc.

# Acceptance Critiria

1. [x] The interactive component should meet the design criteria, which you can find below in the different required resolutions:
   - [Mobile Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=6%3A43&scaling=min-zoom)
   - [Tablet Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=84%3A1033&scaling=min-zoom)
   - [Desktop Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=84%3A2401&scaling=min-zoom)
   - [Design Handoff (Figma)](https://www.figma.com/file/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge)
2. [x] In mobile version, cards **should only** be displayed as a list of cards, with horizontal scrolling and overflow.
3. [x] In tablet and desktop versions, user **should be able to switch views** between _list view_ and _grid view_, using the dropdown menu, which should be located at the top right section of the component.
   1. If the _list view_ is selected, all cards should be stacked vertically, according to the design specs.
   2. If the _grid view_ is selected, all cards should be positioned as a grid of elements, according to the design specs.
4. [x] Each card should contain a **gauge bar** at the bottom, which will display the distribution of positive and negative votes **as a percentage**. (See `assets/data.json` for reference).
5. [x] Each card should contain three buttons: a **"thumbs down" (yellow)**, a **"thumbs up" (teal)** and a "Vote now" button **which should be disabled** by default.
   1. If either "thumbs up" or "thumbs down" button is pressed, it should **toggle the selected state of that button** (denoted as a white border, see design specs for reference), and enable the "Vote Now" button.
   2. If "Vote Now" button is pressed, **that vote should be posted**, and three other things should happen:
      1. Eyebrow text should change to the copy "Thank you for your vote!"
      2. "Vote now" text should change to the copy "Vote Again"
      3. The **gauge bar** below should reflect the changes in the registered data and **percentage should be updated**.
   3. If "Vote Again" button is pressed, all buttons should return to the initial state, and all modified copy texts should be reverted to their original state. The gauge bar, however, should persist the votes already posted.
6. [x] **All posted votes should be persisted** by any means, and should be exactly the same count, even if the page is refreshed. Use _any_ persistance mechanisms you prefer: LocalStorage, Cookies, IndexedDB, URL params, a Back End service (Firebase, DynamoDB, Redis, etc).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
