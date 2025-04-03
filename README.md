# 🏥 AH-AIHMS Frontend

The official frontend for the **AI-Driven Healthcare Management System (AH-AIHMS)**, developed with **React.js**, **Redux Toolkit**, **Tailwind CSS**, and documented with **Storybook**. This application provides secure, responsive, and interactive user interfaces for patients and healthcare providers, incorporating advanced AI and blockchain features seamlessly.

[![CI/CD](https://github.com/Aditya-gam/ah-aihms-frontend/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aditya-gam/ah-aihms-frontend/actions/workflows/deploy.yml)
[![Vercel](https://vercelbadge.vercel.app/api/adityagams-projects/ah-aihms-frontend)](https://ah-aihms-frontend.vercel.app/)

---

## 📌 Project Modules

### 🔐 Authentication
- Separate registration flows for patients and doctors
- Email verification and password recovery workflows
- Secure login with JWT & OAuth2 integration
- Two-Factor Authentication (2FA)

### 🧑‍⚕️ Patient Dashboard
- AI-driven appointment scheduling
- Real-time health monitoring with interactive visualizations
- Secure medical record management (blockchain-integrated)
- AI Chat Assistant leveraging DeepSeek API

### 🩺 Doctor Dashboard
- Calendar-based appointment management
- Blockchain-verified patient records access
- Predictive health analytics and trend visualization
- Secure real-time messaging system with patients

---

## 🚀 Tech Stack

| Layer                  | Technology                                             |
|------------------------|--------------------------------------------------------|
| **Framework**          | React.js (Create React App)                            |
| **State Management**   | Redux Toolkit, Redux Persist                           |
| **Styling & UI**       | Tailwind CSS, PostCSS, Autoprefixer                    |
| **Routing**            | React Router v6                                        |
| **Forms & Validation** | React Hook Form, Yup                                   |
| **Data Visualization** | Recharts                                               |
| **API Communication**  | Axios                                                  |
| **Authentication**     | JWT, OAuth2                                            |
| **Real-time Features** | Socket.io-client                                       |
| **Internationalization**| react-i18next                                         |
| **Testing**            | Jest, React Testing Library, Cypress                   |
| **Component Docs**     | Storybook                                              |
| **Linting & Formatting**| ESLint (Airbnb), Prettier, Husky, lint-staged         |
| **Containerization**   | Docker                                                 |
| **CI/CD Pipeline**     | GitHub Actions                                         |
| **Deployment**         | Vercel                                                 |
| **Monitoring**         | Sentry                                                 |

---

## 📁 Project Structure

```bash
ah-aihms-frontend/
├── public/
├── src/
│   ├── app/                # Redux store and persistence config
│   ├── assets/             # Static assets (images, icons)
│   ├── components/         # Reusable UI components
│   ├── features/           # Feature-specific Redux slices and logic
│   ├── pages/              # View components mapped to routes
│   ├── services/           # API integrations & Axios instances
│   ├── utils/              # Helper functions and utilities
│   ├── App.js              # Root component
│   └── index.js            # Application entry point
├── .env.development
├── .env.production
├── .eslint.config.mjs
├── .prettierrc
├── Dockerfile
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 🛑 Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://npmjs.com/)

### 🚧 Installation & Setup
Clone and set up the repository locally:

```bash
git clone https://github.com/Aditya-gam/ah-aihms-frontend.git
cd ah-aihms-frontend
npm install
```

### ▶️ Run Development Server
```bash
npm start
```
App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Environment Variables

Create `.env.development` and `.env.production`:

**Development**
```env
REACT_APP_API_BASE_URL=http://localhost:5001/api
```

**Production**
```env
REACT_APP_API_BASE_URL=https://ah-aihms-backend.onrender.com/api
```

---

## 🧪 Available Scripts & Commands

| Command                      | Description                                  |
|------------------------------|----------------------------------------------|
| `npm start`                  | Run local development server                  |
| `npm run build`              | Build optimized production bundle             |
| `npm test`                   | Execute Jest tests                            |
| `npm run lint`               | Check code quality with ESLint                |
| `npm run format`             | Format codebase with Prettier                 |
| `npm run storybook`          | Start Storybook for component documentation   |
| `npm run build-storybook`    | Build static Storybook files                  |

---

## 🐳 Docker Setup (Optional)

Build the Docker image:

```bash
docker build -t ah-aihms-frontend .
```

Run Docker container:

```bash
docker run -p 3000:3000 ah-aihms-frontend
```

---

## 📚 Storybook UI Documentation

Launch interactive UI component docs:

```bash
npm run storybook
```

Access Storybook at: [http://localhost:6006](http://localhost:6006)

---

## ✅ Testing & QA

- **Unit & Integration tests:** Jest + React Testing Library
- **E2E tests:** Cypress

Run Jest tests:
```bash
npm test
```

Run Cypress E2E:
```bash
npx cypress open
```

---

## 🔁 CI/CD Pipeline

CI/CD pipeline via GitHub Actions auto-deploys to Vercel on `master` pushes:

- Ensure the following secrets are configured in your GitHub repository settings:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`

📄 [View deploy.yml workflow](https://github.com/Aditya-gam/ah-aihms-frontend/blob/master/.github/workflows/deploy.yml)

---

## 📈 Logging & Monitoring (Sentry)

Integrated with Sentry for real-time monitoring:

- Create a React project at [Sentry.io](https://sentry.io/).
- Replace DSN in `src/index.js`:
```js
Sentry.init({
  dsn: 'your_sentry_dsn_here',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

---

## 🧾 Contribution Guidelines

1. Fork the repository
2. Create a new feature branch:
    ```bash
    git checkout -b feature/feature-name
    ```
3. Commit your changes clearly:
    ```bash
    git commit -m "feat: Add <your-feature>"
    ```
4. Push changes:
    ```bash
    git push origin feature/feature-name
    ```
5. Open a pull request to `master`.

---

## 📄 License

Distributed under the **MIT License**. [View full LICENSE file](LICENSE).

---

## 📧 Contact & Support

- **Aditya Gambhir** – [agamb031@ucr.edu](mailto:agamb031@ucr.edu)
- **Ajit Singh** – [asing349@ucr.edu](mailto:asing349@ucr.edu)

📦 **[Project Repository](https://github.com/Aditya-gam/ah-aihms-frontend)**  
🚀 **[Live Demo on Vercel](https://ah-aihms-frontend.vercel.app/)**

---

## ⚡ Acknowledgements & References

- [React.js](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Docker](https://docs.docker.com/)
- [Vercel](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/actions)
- [Sentry](https://docs.sentry.io/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

---

### 🎯 Future Enhancements

- Expanded real-time features and AI integration
- Additional analytics and performance metrics
- Advanced blockchain features for medical data integrity