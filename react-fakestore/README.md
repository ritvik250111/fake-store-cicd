# FakeStore E-Commerce App

A React-based e-commerce storefront utilizing the FakeStore API. Built with React Query for optimized data fetching and Redux Toolkit for cart state management.

## Features
* **Product Catalog:** Fetches and displays products dynamically.
* **Category Navigation:** Filter products by dynamically fetched categories.
* **Resilient Images:** Handles API image 404 errors with fallback placeholders.
* **Shopping Cart:** Add/remove items, updates total quantities/prices dynamically.
* **Persistent State:** Cart state survives page reloads utilizing `sessionStorage`.
* **Checkout Simulation:** Clears the cart and storage while providing visual success feedback.

## Tech Stack
* React + Vite
* Redux Toolkit (State Management)
* React Query / TanStack Query (Data Fetching / Caching)
* React Router DOM (Routing)

## How to Run Locally

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-repo-link>
   cd react-fakestore
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`