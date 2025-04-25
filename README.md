# React Movie Database

A React-based movie database application that allows users to search for movies, view trending movies, and explore detailed movie information. The app integrates with **The Movie Database (TMDb)** API and uses **Appwrite** for tracking search statistics.

## Features

- **Search Movies**: Search for movies by title using the TMDb API.
- **Trending Movies**: View a list of trending movies based on search statistics.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.
- **Search Tracking**: Tracks search terms and updates search counts using Appwrite.

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: TailwindCSS
- **API**: TMDb API
- **Backend**: Appwrite for search tracking
- **Utilities**: `react-use` for debouncing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>

2. Install dependencies:

    `npm install`

3. Create a .env file in the root directory and add the following environment variables:

    `VITE_TMDB_API_KEY=<your-tmdb-api-key>`

    `VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>`

    `VITE_APPWRITE_DATABASE_ID=<your-appwrite-database-id>`

    `VITE_APPWRITE_COLLECTION_ID=<your-appwrite-collection-id>`

    `VITE_APPWRITE_ENDPOINT=<your-appwrite-endpoint>`

4. Start the development server:

    `npm run dev`

5. Open the app in your browser at http://localhost:5173.