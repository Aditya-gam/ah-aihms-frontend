# 🏥 AH-AIHMS Frontend

The official frontend for the **AI-Driven Healthcare Management System (AH-AIHMS)**, developed using **React.js (CRA)**, **Tailwind CSS**, **Redux Toolkit**, and **Storybook**. This modular frontend provides secure, interactive, and scalable UIs for both patients and doctors.

![CI/CD](https://github.com/Aditya-gam/ah-aihms-frontend/actions/workflows/deploy.yml/badge.svg)
[![Vercel](https://vercelbadge.vercel.app/api/adityagams-projects/ah-aihms-frontend)](https://ah-aihms-frontend.vercel.app/)


---

## 📌 Project Modules

### 🔐 Authentication
- Patient & Doctor Registration (separate forms, validation)
- Email Verification Flow
- Secure Login (Email/Password, OAuth)
- Two-Factor Authentication (2FA)
- Password Reset Workflow

### 🧑‍⚕️ Patient Dashboard
- Manual & AI-powered Appointment Scheduling
- Health Monitoring (interactive graphs, alerts)
- Medical Records (upload/download, blockchain-backed)
- User Profile Management
- AI Chat Assistant (DeepSeek API integration)

### 🩺 Doctor Dashboard
- Appointment Management (calendar UI)
- Patient Record Access (with blockchain verification)
- Predictive Health Analytics & Trend Monitoring
- Secure Real-time Messaging with Patients

---

## 🚀 Tech Stack

| Layer                    | Technology                                     |
|-------------------------|------------------------------------------------|
| Framework               | React.js (CRA)                                 |
| State Management        | Redux Toolkit, Redux Persist                   |
| CSS Framework           | Tailwind CSS, PostCSS, Autoprefixer            |
| Routing                 | React Router v6                                |
| Forms & Validation      | React Hook Form, Yup                           |
| Data Visualization      | Recharts                                       |
| API Communication       | Axios                                          |
| Authentication          | JWT, OAuth2                                    |
| Realtime Features       | socket.io-client                               |
| Internationalization    | react-i18next                                  |
| Testing                 | Jest, React Testing Library, Cypress           |
| Documentation           | Storybook                                      |
| Linting & Formatting    | ESLint (Airbnb), Prettier, Husky, lint-staged  |
| Containerization        | Docker                                         |
| CI/CD                   | GitHub Actions                                 |
| Deployment              | Vercel                                         |

---

## 📁 Directory Structure

```
ah-aihms-frontend/
├── public/
├── src/
│   ├── app/                # Redux store
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Shared UI components
│   ├── features/           # Redux slices & business logic
│   ├── pages/              # Route-based views
│   ├── services/           # API integrations
│   ├── utils/              # Utility helpers
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── .env.development
├── .env.production
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── Dockerfile
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya-gam/ah-aihms-frontend.git
cd ah-aihms-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Scripts & Commands

| Script                      | Description                                  |
|-----------------------------|----------------------------------------------|
| `npm start`                 | Start local dev server (CRA)                 |
| `npm run build`             | Build app for production                     |
| `npm test`                  | Run unit and integration tests               |
| `npm run lint`              | Run ESLint checks                            |
| `npm run format`            | Format codebase using Prettier               |
| `npm run storybook`         | Launch Storybook UI documentation            |
| `npm run build-storybook`   | Build static Storybook output                |
| `npm run eject`             | Eject CRA config (use only if necessary)     |

---

## 🌐 Environment Variables

Create `.env.development` and `.env.production`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Usage in code:

```js
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```

---

## 🐳 Docker Usage

### Build Docker Image

```bash
docker build -t ah-aihms-frontend .
```

### Run Container

```bash
docker run -p 3000:3000 ah-aihms-frontend
```

---

## 🔄 CI/CD Pipeline

CI/CD is configured via **GitHub Actions** and deploys to **Vercel**.

Add the following secrets to your GitHub repository settings:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## 📚 Storybook

Launch the interactive UI component documentation:

```bash
npm run storybook
```

Accessible at: [http://localhost:6006](http://localhost:6006)

---

## ✅ Testing

| Type           | Tools Used                   |
|----------------|------------------------------|
| Unit Tests     | Jest + React Testing Library |
| Integration    | Jest                         |
| End-to-End     | Cypress                      |

Run tests:

```bash
npm test
```

Run E2E:

```bash
npx cypress open
```

---

## 🧾 Contribution Guidelines

1. Fork this repo
2. Create a feature branch: `git checkout -b feature/feature-name`
3. Commit changes: `git commit -m "feat: add <feature>"`
4. Push changes: `git push origin feature/feature-name`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 📧 Contact

**Aditya Gambhir**  
📬 [agamb031@ucr.edu](mailto:agamb031@ucr.edu)

**Ajit Singh**  
📬 [asing349@ucr.edu](mailto:asing349@ucr.edu)

**Project Repository**  
🔗 [https://github.com/Aditya-gam/ah-aihms-frontend.git](https://github.com/Aditya-gam/ah-aihms-frontend.git)

---

## ⚡ Acknowledgements

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Docker](https://docs.docker.com/)
- [Vercel](https://vercel.com/)
- [GitHub Actions](https://github.com/features/actions)