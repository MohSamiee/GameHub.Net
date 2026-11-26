# GameHub.Net

A game discovery app built with React, TypeScript, and Chakra UI, using the RAWG API to browse, search, and filter video games.

This is a learning project based on Code with Mosh's **React 18 for Beginners** course. It uses the Visual Studio React + ASP.NET Core template, with React 19 and Chakra UI 3 adaptations as the course progresses.

The React frontend is deployed on **Vercel**.

**[Live Demo](https://game-hub-net.vercel.app/)**

## Current Features

- Responsive game cards with artwork, platform icons, Metacritic scores, and rating emojis.
- Search for games by submitting a title in the search bar.
- Filter games by genre and platform, with a heading reflecting the selection.
- Sort by relevance, date added, name, release date, Metacritic score, or average rating.
- Switch between dark and light themes, with the preference saved by `next-themes`.
- Show skeleton cards while loading games and a message when a request fails.
- Display a placeholder when a game's image URL is missing.

The genre sidebar appears on large screens. Genre and platform options currently come from local TypeScript data files; game results come from RAWG.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, TypeScript 6, Vite 8 |
| UI | Chakra UI 3, Emotion, React Icons |
| Themes | next-themes |
| HTTP requests | Axios |
| Game data | RAWG Video Games Database API |
| Server project | ASP.NET Core, .NET 10 |
| Frontend hosting | Vercel |
| Development | Visual Studio 2026, ESLint |

## Project Structure

| Path | Purpose |
| --- | --- |
| `GameHub.Net.slnx` | Visual Studio solution |
| `gamehub.net.client/` | React application and Vite configuration |
| `gamehub.net.client/src/components/` | Game cards, filters, search, navigation, and loading components |
| `gamehub.net.client/src/hooks/` | Reusable data-fetching hook and game, genre, and platform hooks |
| `gamehub.net.client/src/services/` | Axios API client and image URL helper |
| `gamehub.net.client/src/data/` | Local genre and platform lists |
| `gamehub.net.client/src/assets/` | Logo, rating images, and image placeholder |
| `GameHub.Net.Server/` | ASP.NET Core server project |

## Getting Started

### Prerequisites

- Node.js `20.19+` in the 20.x series, or `22.12+`, with npm (as required by the installed Vite version).
- .NET 10 SDK. The current Vite development configuration also uses `dotnet dev-certs` for local HTTPS when running the frontend on its own.
- A RAWG API key from [RAWG](https://rawg.io/apidocs).
- Visual Studio 2026 with ASP.NET and web development support, if using the Visual Studio workflow.

### 1. Clone the Repository

```bash
git clone https://github.com/MohSamiee/GameHub.Net.git
cd GameHub.Net
```

### 2. Install Frontend Dependencies

```bash
cd gamehub.net.client
npm ci
```

### 3. Configure RAWG

Create `.env.local` inside `gamehub.net.client`:

```dotenv
VITE_RAWG_API_KEY=your_rawg_api_key
```

Restart the development server after changing environment variables. Local environment files are excluded by the repository's `.gitignore`.

Vite embeds `VITE_` variables in the browser bundle. This API key is therefore visible to users of the frontend; this setup does not keep it private on the server.

### 4. Run the App

Trust the local HTTPS development certificate if needed:

```bash
dotnet dev-certs https --trust
```

**Using Visual Studio:** Open `GameHub.Net.slnx`, select `GameHub.Net.Server` as the startup project, choose the HTTPS launch profile, and run. The configured SPA proxy starts the frontend development server.

**Using the terminal:** From `gamehub.net.client`, run:

```bash
npm run dev
```

The configured frontend URL is `https://localhost:49336`; use the URL printed by Vite if the port changes. Game browsing works with the frontend alone because it calls RAWG directly.

To run the server as well, use the following command from the repository root:

```bash
dotnet run --project GameHub.Net.Server --launch-profile https
```

The HTTPS server profile uses `https://localhost:7190`.

## Frontend Commands

Run these commands from `gamehub.net.client`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local HTTPS development server |
| `npm run build` | Check TypeScript and create the production bundle in `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Deployment on Vercel

The React frontend is deployed on **Vercel**, where it calls RAWG directly to retrieve game data. The ASP.NET Core server is not required for the deployed game discovery interface.

Frontend build settings:

| Setting | Value |
| --- | --- |
| Root directory | `gamehub.net.client` |
| Framework | Vite |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variable | `VITE_RAWG_API_KEY` |

Set the environment variable before building. Changes to its value require a new build. These settings deploy the frontend; the ASP.NET Core server is a separate deployment concern.

## Development Status

This project is a work in progress. The current implementation focuses on the game discovery interface and React fundamentals: components, props, state, custom hooks, API requests, and responsive layouts.

The ASP.NET Core project currently retains the template WeatherForecast endpoint and development OpenAPI configuration. Game discovery does not use that endpoint, and no custom game API, database, or authentication has been implemented. The game list currently displays the returned page of results without pagination or infinite scrolling.

## Credits

- Learning material: [Code with Mosh](https://codewithmosh.com/).
- Game information and artwork: [RAWG](https://rawg.io/).
