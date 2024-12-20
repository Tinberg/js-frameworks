# JS Frameworks Project: E-Commerce Website
![Skjermbilde 2024-12-07 kl  11 54 16](https://github.com/user-attachments/assets/05ffe245-33e7-408b-97cb-6c770e547299)

Welcome to the E-Commerce Website, a simple yet functional online shopping platform developed as part of the JS Frameworks coursework. This project focuses on utilizing React, TypeScript, Vite, and Bootstrap to create a modern and efficient web application.

## Features

### Home Page
The Home Page provides an overview of featured products and a search bar to help users find what they need quickly.

### Product Details Page
A dedicated page for each product that showcases detailed information, including images, specificationss.

### Shopping Cart
The Shopping Cart allows users to manage the items they wish to purchase. Users can adjust quantities, remove items, and proceed to checkout.

### Contact Page
The Contact Page provides users with a form to reach out for support or inquiries.

## Built With

- **React**
- **TypeScript**
- **Vite**
- **Bootstrap**

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

To check if they are installed, run the following commands in your terminal:

```bash
node -v
npm -v
```

### Installing

1. Clone the repository:

   ```bash
   git clone github.com/Tinberg/JS-frameworks
   ```

2. Navigate to the project directory:

   ```bash
   cd JS-frameworks
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development
To start the development server run:

```bash
npm run dev
```

### Build
To create an optimized production build, run:

```bash
npm run build
```

## ESLint Configuration
The project includes an ESLint setup tailored for TypeScript and React. For advanced type-aware linting, you can expand the configuration:

1. Update the `parserOptions` in the top-level configuration:

   ```javascript
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Install the `eslint-plugin-react` package:

   ```bash
   npm install eslint-plugin-react --save-dev
   ```

4. Update the ESLint configuration to include the React plugin:

   ```javascript
   import react from 'eslint-plugin-react';

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```

## Assignment Info
This assignment is designed to fulfill the coursework requirements by demonstrating proficiency in React and TypeScript. Note that state management does not include localStorage, and additional UX/UI features have been deprioritized to focus on core functionalities.


---
Thank you for exploring this project!

