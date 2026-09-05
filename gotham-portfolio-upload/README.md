# Gotham-Inspired Futuristic Developer Portfolio

A premium, fully responsive personal portfolio website for Sathishkumar D (Python Full-Stack Developer). This portfolio features a high-tech Batcave command center dashboard aesthetic, dynamic HTML5 canvas background animations inspired by the atmosphere of Gotham City, and an interactive command-line terminal to query developer archives.

## 🔗 Live Site URL
The portfolio is deployed and accessible at:
👉 **[https://satthsss.github.io/Portfolio/](https://satthsss.github.io/Portfolio/)**

---

## 🦇 Key Theme Aesthetics & Visuals

- **Gotham Atmosphere Engine**: Real-time canvas rendering of a dark city skyline silhouette with flashing spire beacons, sweeping searchlight beams, glowing moon, animated fog mist, and weather controllers (light rain toggle).
- **Batcave HUD Dashboard**: Dark charcoal & matte black theme with electric blue and gold neon pulse highlights, cyber grids, scanlines, and clean glassmorphism layouts.
- **Bat-Computer CLI Console**: A built-in terminal shell simulation (`recruiter@gotham:~$`) where recruiters can type interactive commands like `help`, `whoami`, `skills`, `projects`, `contact`, or `clear` to query credentials directly.
- **Cyber Photo Frame**: Professional headshot styled inside a custom-designed HUD container with digital corner brackets and scanlines.

---

## 🛠️ Technology Stack

- **Frontend Core**: React.js 19 + Vite 8 (Ultra-fast HMR)
- **Styling Layout**: Tailwind CSS v4 + Custom Design Tokens
- **Animations**: Framer Motion (Optimized 3D card tilt & fades) + HTML5 Canvas API (Pre-rendered offscreen background to avoid lag/hangs)
- **Icons Resource**: Lucide React + Inline custom SVG vector wrappers

---

## 📦 Local Setup Instructions

Follow these steps to run the website locally on your computer:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/satthsss/gotham-portfolio.git
   cd gotham-portfolio
   ```

2. **Install Packages**:
   ```bash
   npm install
   ```

3. **Launch Local Server**:
   ```bash
   npm run dev
   ```

4. **View in Browser**:
   Open [http://localhost:8000/](http://localhost:8000/)

---

## 🚀 Pushing to your GitHub Repository

To post this codebase to your own GitHub account, run these commands in your project root terminal:

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initialize Gotham portfolio codebase"
   ```

2. **Create a new Repository on GitHub** named `gotham-portfolio`. Leave it empty (do not add a README, license, or gitignore).

3. **Link and Push**:
   ```bash
   git remote add origin https://github.com/satthsss/gotham-portfolio.git
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

This project is pre-configured to build and host on GitHub Pages using **GitHub Actions** (the modern recommended workflow):

1. Go to your repository settings on GitHub.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set the Source dropdown to **GitHub Actions**.
4. Create the workflow directory and file locally:
   `.github/workflows/deploy.yml` with standard static hosting configurations (pre-written in this project codebase).
5. Simply push your code to the `main` branch. GitHub will automatically compile, build, and deploy your site to `https://satthsss.github.io/gotham-portfolio/` in less than 2 minutes!

---

## 📂 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD deployment script
├── public/
│   ├── profile.jpg       # Professional photo asset
│   └── resume.pdf        # Downloadable PDF resume
├── src/
│   ├── components/       # Custom React UI components (Hero, Terminal, etc.)
│   ├── data/             # Portfolio credentials data store
│   ├── App.jsx           # Main React coordinator layout
│   ├── index.css         # Tailwind directives & Gotham style overrides
│   └── main.jsx          # Entry point mounting App
├── index.html            # Main HTML document structure
├── tailwind.config.js    # Styling config overrides
└── vite.config.js        # Vite port configurations
```
