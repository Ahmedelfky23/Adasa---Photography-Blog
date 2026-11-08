# 📸 Adasa (عدسة) — Modern Photography Blog Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5_RTL-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Adasa (عدسة)** is a modern, responsive, and feature-rich Arabic photography blog platform. Designed specifically for photographers, visual artists, and enthusiasts, it provides insightful guides, gear reviews, lighting techniques, and creative masterclasses with a sleek dark-themed aesthetic and native Right-to-Left (RTL) typography.

---

## 🌐 Live Demo

Check out the live deployment on GitHub Pages:
> **[Adasa Live Demo]([https://your-username.github.io/Adasa---Photography-Blog/](https://ahmedelfky23.github.io/Adasa---Photography-Blog/))**  
> *(Replace `your-username` with your GitHub username)*

---

## ✨ Features

- **🎨 Modern Dark & Sleek UI:**
  - Built with custom design tokens, dark tones, and vibrant accent colors.
  - Native **RTL (Right-to-Left)** layout optimized with Google's **Tajawal** Arabic typography.
  - Fully responsive across mobile, tablet, and desktop screens.

- **🔍 Advanced Search & Filter:**
  - Real-time instant search across article titles, excerpts, contents, and tags.
  - Category filtering (Equipment, Techniques, Lighting, Portraits, Landscape, Editing, etc.).
  - Deep-linking support via query parameters (e.g., `?cat=Landscape`) for shareable filtered views.

- **🔀 Grid & List View Modes:**
  - Switch smoothly between a visual **Grid View** (card-based) and an informational **List View** with a single click.

- **📄 Pagination & Performance:**
  - Integrated client-side pagination for fast, clutter-free browsing.
  - Cached data fetching service (`blogservice.js`) with instant subsequent page transitions.

- **📖 Rich Article Details Page:**
  - Full article content layout with cover images, reading time, published date, and category pills.
  - Dedicated author profile banner and dynamic article tag cloud.
  - Smooth scroll-to-top on route change.

- **👥 Authors & Community Page (About Us):**
  - Highlights the platform's vision, core values, and community statistics.
  - Dynamically extracts and presents author profiles with their published article counts.

- **🚀 GitHub Pages SPA Ready:**
  - Configured with Vite base path and HTML redirect scripts to handle single-page application (SPA) routing on GitHub Pages seamlessly.

---

## 🛠️ Tech Stack

- **Core Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **Styling & Icons:**
  - [Bootstrap 5 (RTL)](https://getbootstrap.com/)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## 📂 Project Structure

```text
adasa/
├── public/
│   ├── data/
│   │   └── blogs.json        # Mock JSON data store for posts, categories & site info
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # Branding graphics, illustrations, and logos
│   ├── components/
│   │   ├── Blogcard.jsx       # Grid card display for posts
│   │   ├── BlogListItem.jsx   # List item display for posts
│   │   ├── CategoryFilter.jsx # Category selection pills
│   │   ├── Footer.jsx         # Footer with quick links and newsletter
│   │   ├── Loader.jsx         # Loading spinner indicator
│   │   ├── Navbar.jsx         # Navigation bar with responsive toggle
│   │   ├── Pagination.jsx     # Reusable pagination component
│   │   ├── searchBar.jsx      # Search input with clear handling
│   │   └── ViewToggle.jsx     # Grid / List view switcher
│   ├── layout/
│   │   └── Mainlayout.jsx     # Global layout wrapper (Navbar, Outlet, Footer)
│   ├── pages/
│   │   ├── About.jsx          # Platform mission and author showcase
│   │   ├── blogDetails.jsx    # Individual article reader view
│   │   ├── blogs.jsx          # Filterable, searchable blog catalogue
│   │   ├── Home.jsx           # Landing page with hero, stats, and highlights
│   │   └── NotFound.jsx       # Custom 404 page
│   ├── services/
│   │   └── blogservice.js     # Data layer with memory cache
│   ├── App.css
│   ├── App.jsx                # Route definitions
│   ├── index.css              # Custom styling variables and RTL rules
│   └── main.jsx               # React DOM entry point
├── index.html                 # Main HTML with RTL config & SPA redirect script
├── package.json
└── vite.config.js             # Vite configuration with base URL
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/Adasa---Photography-Blog.git
cd Adasa---Photography-Blog
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (usually `http://localhost:5173/Adasa---Photography-Blog/`).

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles the application for production into the `dist/` folder. |
| `npm run preview` | Locally preview the production build. |
| `npm run lint` | Runs ESLint to check for code issues. |
| `npm run deploy` | Builds the project and publishes the `dist/` directory to GitHub Pages. |

---

## 🚢 Deployment to GitHub Pages

This project is pre-configured for automated deployment to GitHub Pages using the `gh-pages` package.

1. Ensure the `base` property in `vite.config.js` matches your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/<your-repo-name>/",
   });
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```

3. In your GitHub repository settings under **Settings > Pages**, make sure the source branch is set to `gh-pages` / `root`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/your-username/Adasa---Photography-Blog/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
