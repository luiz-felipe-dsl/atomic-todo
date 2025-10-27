# Atomic Todo

A modern todo application built with React, TypeScript and Vite, following Atomic Design principles.

## Quick Start 🚀

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

### Docker (Optional)

```bash
# Build and start containers
npm run docker:build
npm run docker:up
```

## Features ✨

- 🎯 Built with Atomic Design principles
- 📱 Responsive, card-based UI with animations
- 💾 Task persistence using localStorage
- 🧪 Unit tests with Jest + React Testing Library
- 🔒 Type-safe with TypeScript
- ⚡ Lightning fast with Vite

## Project Structure 🏗️

```
src/
  components/
    atoms/        # Basic building blocks (Button, Input, Checkbox)
    molecules/    # Simple component combinations (TaskItem)
    organisms/    # Complex components (TaskList)
    templates/    # Page layouts (MainTemplate)
    pages/        # Full pages with state management (HomePage)
  types/         # TypeScript interfaces
  assets/        # Static files
```

## Technical Details 🛠️

- **State Management**: Tasks are stored in `localStorage` (key: `tasks`)
- **Type Safety**: All components and interfaces are fully typed
- **Testing**: Unit tests cover core flows (add/edit/delete tasks)
- **Styling**: Component-scoped styles following atomic principles

## Development Commands 💻

```bash
npm run dev          # Start development server
npm test            # Run test suite
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## Roadmap 🗺️

- [ ] Add "Remove completed tasks" button
- [ ] Set up CI/CD pipeline with GitHub Actions
- [ ] Create production Docker setup with nginx

## License 📝

MIT
