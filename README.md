# Nordhealth Sign Up Form

[![CI](https://github.com/TanyaLagodich/nordhealth-sign-up-form/actions/workflows/deploy.yml/badge.svg)](https://github.com/TanyaLagodich/nordhealth-sign-up-form/actions)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://tanyalagodich.github.io/nordhealth-sign-up-form/)

A small demo application built with **Vue 3**, **TypeScript**, **Pinia**, and the **Provet Cloud Design System**.

---

## 🛠️ Tech Stack

- ✅ **Vue 3** with Composition API and `<script setup>`
- ✅ **TypeScript**
- ✅ **Pinia** for state management
- ✅ **Vite** as the build tool
- ✅ **Provet Cloud Design System** (web components)
- ✅ **Vitest** + `@vue/test-utils` for unit testing
- ✅ **ESLint** + **Prettier** for linting and code formatting

---

## ✨ Features

- ✅ **Sign Up Page**
    - Fields: Email, Password
    - Simple client-side validation
    - Checkbox to opt-in for product updates (value is tracked, but not sent anywhere)
    - Simulated API request on form submission
    - Field-level and global error handling
    - Redirects to `/home` on successful sign-up

- ✅ **Backend Error Simulation**
    - If you enter `test@example.com` as the email, a fake server error is triggered:
      ```
      This email is already registered
      ```

- ✅ **Log In Page**
    - Present but currently empty

- ✅ **Not Found Page**
    - Basic fallback page for unknown routes

---

## 🚀 Getting Started

Install dependencies and run the dev server:

```bash
yarn install
yarn dev
```
Run tests:

```bash
yarn test
```

Lint the code:
```bash
yarn lint
```

Build the project:
```bash
yarn build
```

---

## 🧪 About the API Simulation
The API logic is mocked to simulate real-world backend behavior.
This setup is intended to demonstrate frontend error handling.
You can easily replace it with real backend integration later.

Use test@example.com to simulate a backend validation error.

---

## 🌐 Deployment
The app is automatically deployed to GitHub Pages on every push to the main branch.
