# 🏥 AH-AIHMS Frontend

The official frontend repository for the **AI-Driven Healthcare Management System (AIHMS)**. Built using **React.js (CRA)**, **Tailwind CSS**, **Redux Toolkit**, and **Storybook**, this application offers an intuitive, secure, and scalable interface for patients and doctors.

---

## 📌 Project Modules

### 🔐 **1. Authentication**
- Patient & Doctor Registration (separate forms)
- Email verification flow
- Secure Login (Email/Password, OAuth)
- Two-Factor Authentication (2FA)
- Password Reset workflow

### 🧑‍⚕️ **2. Patient Dashboard**
- AI & Manual Appointment Scheduling
- Health Monitoring (interactive charts)
- Medical Records (blockchain-backed)
- Profile Management (personal info, insurance)
- AI Chat Assistant (DeepSeek API integration)

### 🩺 **3. Doctor Dashboard**
- Patient Appointment Calendar
- Patient Record Access (with blockchain verification)
- Health Analytics & Trends
- Secure Real-time Messaging with Patients

---

## 🚀 Tech Stack

| Layer                      | Technology                                     |
|---------------------------|------------------------------------------------|
| Framework                 | React.js (CRA)                                 |
| State Management          | Redux Toolkit, Redux Persist                   |
| CSS Framework             | Tailwind CSS, PostCSS, Autoprefixer            |
| Forms & Validation        | React Hook Form, Yup                           |
| Routing                   | React Router v6                                |
| Data Visualization        | Recharts                                       |
| Authentication            | Axios, JWT, OAuth2                             |
| Real-time Communication   | socket.io-client                               |
| Internationalization      | react-i18next                                  |
| Component Docs            | Storybook                                      |
| Testing                   | Jest, React Testing Library, Cypress           |
| Formatting & Linting      | ESLint (Airbnb), Prettier, Husky, lint-staged  |
| Containerization          | Docker                                         |
| CI/CD                     | GitHub Actions                                 |
| Deployment                | Vercel                                         |

---

## 📁 Directory Structure

```
ah-aihms-frontend/
├── public/
├── src/
│   ├── app/                # Redux store
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Shared UI components
│   ├── features/           # Redux slices & logic
│   ├── pages/              # Route-based pages
│   ├── services/           # API calls (Axios)
│   ├── utils/              # Reusable utilities
│   ├── index.js            # App entry point
│   └── App.js              # Root component
├── .github/workflows/      # CI/CD workflows
├── .husky/                 # Git hooks
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

### 3. Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🧪 Scripts & Commands

| Script               | Description                                         |
|----------------------|-----------------------------------------------------|
| `npm start`          | Start development server                           |
| `npm run build`      | Build production-ready app                         |
| `npm test`           | Run tests with Jest                                |
| `npm run lint`       | Run ESLint (Airbnb config)                         |
| `npm run format`     | Format code using Prettier                         |
| `npm run storybook`  | Launch Storybook UI docs                           |
| `npm run build-storybook` | Build static Storybook files                   |
| `npm run eject`      | Eject CRA configuration (not recommended)          |

---

## 🌐 Environment Variables

Create `.env.development` and `.env.production` in root:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Use it inside your code like:

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

## 🔄 CI/CD - GitHub Actions + Vercel

Automatic build & deployment upon `main` branch push.

Add these secrets to your GitHub repository:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## 📚 Storybook

Launch interactive component documentation:

```bash
npm run storybook
```

Access at [http://localhost:6006](http://localhost:6006)

---

## 🧪 Testing

| Type           | Tools Used                   |
|----------------|------------------------------|
| Unit Tests     | Jest + React Testing Library |
| Integration    | Jest                         |
| End-to-End     | Cypress                      |

Run tests:

```bash
npm test
```

Run E2E with Cypress:

```bash
npx cypress open
```

---

## ✍️ Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 **License**

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 📧 **Contact**

**Aditya Gambhir**  
📬 [agamb031@ucr.edu](mailto:agamb031@ucr.edu)

**Ajit Singh**  
📬 [asing349@ucr.edu](mailto:asing349@ucr.edu)

**Project Repository**  
🔗 [https://github.com/Aditya-gam/ah-aihms-frontend.git](https://github.com/Aditya-gam/ah-aihms-frontend.git)

---

## ⚡ **Acknowledgements**

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Docker](https://docs.docker.com/)
- [Vercel](https://vercel.com/)
