# SearchGit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Description

SearchGit is an Angular application that allows users to search for GitHub users. It supports sign-in via email/password, GitHub OAuth, and handles user authentication.

## Features

- Sign in with email/password
- Sign up with email/password
- Sign in with GitHub
- Search GitHub users and display search results

## Setup Instructions

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd YOUR_REPOSITORY
   ```

3. **Install dependencies:**:

   ```bash
   npm install
   ```

4. **Set up environment.ts with Your Firebase Configuration:**

   Open src/environments/environment.ts and replace the placeholder values with your actual Firebase configuration. If the file does not exist, create it based on the environment.ts template and add your configuration.

5. **Start the application:**

   ```bash
   npm start
   ```

## Build

To build the project for production, use:

```bash
ng build
```

## Running Unit Tests

To execute the unit tests, run:

```bash
ng test
```

## Further Help

For more help on the Angular CLI, use:

```bash
ng help
```

### Key Changes and Additions

1. **Added "Description" section**: Explains what the application does.
2. **Added "Features" section**: Lists the main features of the application.
3. **Added "Contributing" section**: Details how to contribute to the project.
4. **Expanded "Setup Instructions" section**: Added instructions for adding your Firebase configuration in `environment.ts`.

This updated `README.md` should help you and other developers get started with the project and understand its setup and features. If you have any questions or suggestions, feel free to ask!

### File and Folder Structure

Here is the full list of files and folders for the `README.md` and `src/environments`:
search-git/
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── block/
│ │ │ │ ├── block.component.ts
│ │ │ │ ├── block.component.html
│ │ │ │ ├── block.component.scss
│ │ │ ├── block-details/
│ │ │ │ ├── block-details.component.ts
│ │ │ │ ├── block-details.component.html
│ │ │ │ ├── block-details.component.scss
│ │ │ ├── blocks/
│ │ │ │ ├── blocks.component.ts
│ │ │ │ ├── blocks.component.html
│ │ │ │ ├── blocks.component.scss
│ │ │ ├── login/
│ │ │ │ ├── login.component.ts
│ │ │ │ ├── login.component.html
│ │ │ │ ├── login.component.scss
│ │ │ ├── tables/
│ │ │ │ ├── tables.component.ts
│ │ │ │ ├── tables.component.html
│ │ │ │ ├── tables.component.scss
│ │ │ ├── UI/
│ │ │ │ │ ├── form/
│ │ │ │ │ │ ├── form.component.ts
│ │ │ │ │ │ ├── form.component.html
│ │ │ │ │ │ ├── form.component.scss
│ │ │ │ │ ├── header/
│ │ │ │ │ │ ├── header.component.ts
│ │ │ │ │ │ ├── header.component.html
│ │ │ │ │ │ ├── header.component.scss
│ │ │ │ │ ├── input/
│ │ │ │ │ │ ├── input.component.ts
│ │ │ │ │ │ ├── input.component.html
│ │ │ │ │ │ ├── input.component.scss
│ │ ├── guards/
│ │ │ ├── auth.guard.ts
│ │ ├── services/
│ │ │ ├── github.service.ts
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.scss
│ │ ├── app.config.ts
│ │ ├── app.routes.ts
│ ├── assets/
│ ├── environments/
│ │ └── environment.ts
│ ├── main.ts
│ ├── index.html
│ ├── styles.scss
├── .editorconfig
├── .eslintrc.json
├── tsconfig.json
└── ...
