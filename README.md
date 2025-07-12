# Beaver 🦫

Fictional landing page built with the [bhvr](https://github.com/stevedylandev/bhvr) stack and [Lingo.dev](https://github.com/lingodotdev/lingo.dev) compiler for i18n.

> [!TIP]
> Use the locale switcher in the top right to switch locales in real time.

## Getting Started

1. Clone the repository
```
git clone https://github.com/wazeerc/beaver.git
```
2. Navigate into the project directory and install dependencies
```
cd beaver && bun install
```
3. Add API key for [Lingo.dev](https://lingo.dev/en/compiler/quick-start#option-1-lingodev-engine) & edit `.env` to add your **Lingo.dev API key**
```
cd client && cp .env.example .env
```
4. Start the development server
```
bun dev
```

## Project Structure

```
.
├── client/               # React frontend
├── server/               # Hono backend
├── shared/               # Shared TypeScript definitions
│   └── src/types/        # Type definitions used by both client and server
└── package.json          # Root package.json with workspaces
```
