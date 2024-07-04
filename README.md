# EShop-app

This is simple EShop-app with following features:

- **Product List**: Displays list of products that user can navigate through and add to shopping cart
- **Product Details**: Displays detail information about a product
- **Cart Drawer(Panel/Modal)**: Displays products added to the cart

## Folder Structure

```plaintext
src/
  ├── assets/
  ├── components/
  ├── context/
  ├── hooks/
  ├── locales/
  ├── pages/
  ├── routes/
  ├── styles/
  │   ├── global.scss
  │   ├── variables.scss
  │   └── variables.ts
  ├── themes/
  ├── types/
  └── util/
```

- **assets/** : Contains static assets such as images, fonts, and other media files.
- **components/** : Contains reusable UI components used throughout the application. Most base components are used from Material UI library.
- **context/** : Contains React Contexts for managing global state across the application.
- **hooks/** : Custom React hooks for encapsulating and reusing stateful logic across components. _NOTE_: custom context hooks are defined in pair with contexts definitions.
- **locales/** : Contains localization files for supporting multiple languages in the application (Currently only en-US locale is supported)
- **pages/** : Contains the main pages of the application, which correspond to routes.
- **routes/**: Defines the application's routing configuration, mapping paths to the appropriate page components.
- **styles/**: Contains styling files for the application.
- **themes/**: Contains theme definitions and configurations for the application, particularly for styling Material-UI components.
- **types/**: Contains TypeScript type definitions, enums and interfaces used throughout the application.
- **util/** : Utility functions and helper methods used across the application.

## Styling and Theming

This application utilizes the Material UI library with pre-designed React components. Most of the components are made around ones from this library.

### Global Styles

[**global.scss**](../eshop-app//src//styles/global.scss): This file contains global styles that are applied throughout the entire application. It includes any styles that should be globally accessible.

### SCSS Variables

- [**variables.scss**](../eshop-app/src/styles/variables.scss): This file defines CSS variables that are available at the root level. These variables can be used in other CSS module files (_\*.module.scss_) to ensure consistent styling.
  TypeScript Variables:

- [**variables.ts**](../eshop-app/src/styles/variables.ts) : This file defines variables in TypeScript that should be reused for setting themes for Material-UI components. By keeping theme-related variables here, we can ensure consistency between SCSS styles and Material-UI components.

## Setup Instructions

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AndjelaCickovic/eshop-app.git
   cd eshop-app/src
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

This will start the development server on `http://localhost:3000` and open the application in your default browser.
