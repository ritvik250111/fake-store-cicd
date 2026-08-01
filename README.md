# React E-Commerce Application

[![Deploy to Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](#) <!-- Add your live link badge here -->
[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue?logo=github-actions)](#)

**🌐 Live Application:** [Insert your Vercel Live Link Here]

## 📋 Project Overview
This project is a React-based E-Commerce application built with a strong emphasis on reliability and automation. It features a fully automated Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions, ensuring that every code change is rigorously tested before being seamlessly deployed to Vercel. 

The development process strictly followed Test-Driven Development (TDD) principles to guarantee stable component rendering, predictable state management, and flawless user interactions.

## 🎥 Presentation Submission
*Note for Evaluators:* The required 5-minute video presentation covering the project's purpose, architecture, and a live demonstration has been uploaded directly to **Disco** as per the submission requirements.

## 🚀 Key Features
*   **Product Browsing:** Users can view a catalog of available products.
*   **Interactive Shopping Cart:** Users can seamlessly add items to their cart, with state updates reflecting immediately.
*   **Automated CI/CD:** Zero-touch deployment process triggered on push to the `main` branch.
*   **Robust Test Coverage:** Comprehensive unit and integration tests using Jest and React Testing Library.

## 🛠️ Technology Stack
*   **Frontend:** React.js
*   **Testing:** Jest, React Testing Library
*   **CI/CD:** GitHub Actions
*   **Hosting/Deployment:** Vercel

## 🧪 Testing Strategy (TDD)
This project implements Test-Driven Development to ensure high application reliability. Run tests locally using `npm test`.

### Unit Testing
Two distinct components have isolated unit tests verifying their behavior:
1.  **Product Component:** Tests verify correct rendering of product details (name, price, image) and check that user interaction (clicking the "Add" button) successfully fires the expected state changes.
2.  **Cart Component:** Tests ensure the cart renders empty by default and correctly displays item totals and quantities when state changes occur.

### Integration Testing
*   **Add-to-Cart Flow:** A comprehensive integration test simulates a user navigating the product list and clicking "Add to Cart". React Testing Library is used to assert that the Cart component's state successfully updates and displays the newly added product, ensuring the core e-commerce loop functions properly.

## ⚙️ CI/CD Pipeline Workflow
The pipeline is defined in `.github/workflows/main.yml` and triggers automatically on pushes to the `main` branch. 

**Stage 1: Continuous Integration (CI)**
*   Checks out the repository.
*   Sets up the Node.js environment.
*   Installs dependencies (`npm install`).
*   Runs the test suite (`npm test`). 
*   *Failsafe:* If any unit or integration test fails, the GitHub Action terminates, preventing broken code from progressing to deployment.

**Stage 2: Continuous Deployment (CD)**
*   *Prerequisite:* This stage only runs if the CI stage passes 100%.
*   Builds the React application for production.
*   Deploys the optimized build directly to Vercel.

## 💻 Local Setup Instructions

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
   cd YOUR_REPO_NAME
