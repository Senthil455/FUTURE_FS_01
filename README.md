# Senthil Raja R — Portfolio Website

Personal portfolio built with React (Vite), Node.js/Express, and MongoDB. Features an interactive resume, project showcase, skills section, and a contact form with email notifications.

## Features

- **Interactive Resume** — Animated hero section with role cycling, experience timeline, education, and skills grid
- **Project Portfolio** — Real projects with GitHub links and tech tags
- **Contact Form** — Sends messages to MongoDB + optional email notification via Nodemailer
- **SEO Optimized** — Meta tags, OG/Twitter cards, semantic HTML, responsive design
- **Dark Theme UI** — Modern glassmorphism navbar, gradient accents, responsive across all devices

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, Vite, react-helmet-async |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB (optional — graceful fallback) |
| Email | Nodemailer (optional — Gmail SMTP) |
| Security | express-rate-limit on contact endpoint |

## Quick Start

```bash
# 1. Install all dependencies
npm install
npm --prefix client install
npm --prefix server install

# 2. (Optional) Configure environment
copy .env.example .env
# Edit .env with your MongoDB URI and email credentials

# 3. Run both frontend + backend
npm run dev

# Client → http://localhost:3000
# Server → http://localhost:5000
```

## Project Structure

```
├── client/                          # React (Vite) frontend
│   ├── index.html                   # SEO meta tags
│   ├── vite.config.js               # Dev proxy to :5000
│   └── src/
│       ├── App.jsx                  # Layout
│       ├── index.css                # Dark theme variables
│       └── components/
│           ├── Navbar.jsx           # Sticky nav with mobile menu
│           ├── Hero.jsx             # Animated role cycling
│           ├── About.jsx            # Bio & stats
│           ├── Skills.jsx           # Tech stack by category
│           ├── Projects.jsx         # 5 featured projects
│           ├── Resume.jsx           # Experience & education timeline
│           ├── Contact.jsx          # Form with validation
│           └── Footer.jsx           # Social links
├── server/
│   ├── server.js                    # Express entry
│   ├── models/Message.js            # Mongoose schema
│   └── routes/contact.js            # POST /api/contact + nodemailer
└── package.json                     # Root scripts
```

## Deployment

### Frontend
```bash
npm --prefix client run build
# Deploy client/dist to Vercel, Netlify, or GitHub Pages
```

### Backend
```bash
npm --prefix server run start
# Deploy to Render, Railway, or any Node.js host
# Set MONGODB_URI and EMAIL_* env vars on the host
```

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | No (graceful fallback) |
| `EMAIL_USER` | Gmail address for Nodemailer | No |
| `EMAIL_PASS` | Gmail app password | No |
| `EMAIL_TO` | Where contact emails are sent | No (defaults to EMAIL_USER) |
| `PORT` | Server port (default 5000) | No |

## License

MIT
