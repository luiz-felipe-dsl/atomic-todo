# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
# Atomic Todo — Atomic Design To-Do App

Quick start (run first)

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Run tests

```bash
npm test
```

4. (Optional) Run with Docker Compose

```bash
npm run docker:build
npm run docker:up
```

Project overview

This repository implements a small To-Do application using Atomic Design principles with React + TypeScript and Vite.

Highlights

- Atomic Design structure: `src/components/{atoms,molecules,organisms,templates,pages}`
- TypeScript interfaces (see `src/types/Task.ts`)
- Persistent tasks using `localStorage` (key: `tasks`)
- Responsive, card-based UI with animations
- Unit tests with Jest + React Testing Library

How this meets the challenge

- Project is organized by Atomic Design layers.
- The `Task` interface and all component props are typed with TypeScript.
- Core features implemented: add task, edit task, mark as completed, delete task, persist tasks in localStorage.
- Styling follows an atomic approach: atoms are tiny controls (Button, Input, Checkbox), molecules compose atoms (TaskItem), organisms group molecules (TaskList), templates provide page framing (MainTemplate), pages handle state and flows (HomePage).

Notes & implementation details

- localStorage initialization uses a safe lazy state initializer to avoid overwriting data during mount.
- Tests: unit tests cover add, toggle, and delete flows. Run with `npm test`.
- Linting and formatting: `npm run lint` and `npm run format` are available.

Next improvements (optional)

- Add a "Remove completed tasks" action button (can be added to `HomePage`).
- Add CI (GitHub Actions) to run tests on PRs.
- Production Dockerfile (multi-stage) to build and serve the static site via nginx.

If you want any of those, tell me which one and I'll add it.
