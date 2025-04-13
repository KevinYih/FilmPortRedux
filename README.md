# 🎬 Movie App (Powered by TMDB)

A modern movie browsing application built using the [TMDB API](https://www.themoviedb.org/documentation/api). This React-based project allows users to explore movies, view actor details, and enjoy smooth horizontal scrolling UI elements.

---

## 🚀 Tech Stack

- **React** – Frontend framework
- **React Router v6** – Client-side routing
- **Redux Toolkit** – State management
- **Axios** – API requests
- **Tailwind CSS** – Utility-first CSS framework
- **TMDB API** – Source of movie and actor data

---

## 📁 Project Structure

```txt
src/
├── assets/                         # Static assets (images, logos, etc.)
│   ├── nullPicpng.png
│   └── TMDBlogo.svg
│
├── components/                     # Reusable UI components
│   ├── BannerHome.jsx
│   ├── Card.jsx
│   ├── Driver.jsx
│   ├── FilmportLogo.jsx
│   ├── FilmportUserIcon.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MobileNavigation.jsx
│   ├── StarRating.jsx
│   ├── VideoPlay.jsx
│   ├── XScrollCard.jsx
│   └── XScrollCast.jsx
│
├── contents/                       # Navigation or content configuration
│   └── navigation.jsx
│
├── hooks/                          # Custom React hooks
│   ├── useFetch.js
│   └── useFetchDetails.js
│
├── pages/                          # Route-based page components
│   ├── DetailsPage.jsx
│   ├── ExplorePage.jsx
│   ├── Home.jsx
│   ├── SearchFrontPage.jsx
│   └── SearchPage.jsx
│
├── routes/                         # Router configuration
│   └── index.jsx
│
├── store/                          # Redux store and slices
│   ├── filmportSlice.js
│   └── store.js
│
├── App.css                         # Global app styles
├── App.jsx                         # Main app component
├── index.css                       # Global CSS (Tailwind or base styles)
├── main.jsx                        # Application entry point (ReactDOM)
```

---

## ✨ Features

- 🔍 Browse popular and trending movies
- 📄 View detailed movie and actor information
- 🎭 Horizontal scrollable cast list and movie list with navigation buttons
- ⚙️ Global state management with Redux Toolkit
- 📱 Fully responsive design (mobile & desktop)

---

## 🔐 TMDB API Setup

Before running the project, create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
TMDB requests are made using Axios, e.g.:
axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

🧰 Getting Started
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```
