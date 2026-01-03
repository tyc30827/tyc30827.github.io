# Willie's Portfolio Website

This is a modern, responsive personal portfolio website built with [Next.js](https://nextjs.org), designed to showcase the profile, skills, and projects of a Data Engineer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works beautifully on desktop, tablet, and mobile devices.
- **Dynamic Content**: All content is driven by a JSON data file (`src/data/portfolio.json`), making it easy to update without touching the code.
- **Modern UI/UX**: Built with Tailwind CSS for styling and Framer Motion for smooth animations.
- **Sections**:
  - **Hero**: Introduction and quick bio.
  - **About**: Detailed professional summary.
  - **Experience**: Timeline of professional work history.
  - **Education**: Academic background.
  - **Certifications**: Professional certifications and scores.
  - **Publications**: Research papers and conference talks.
  - **Tech Stack**: Categorized list of technical skills.
  - **Projects**: Showcase of key projects with descriptions and tech stacks.
  - **Contact**: Links to social profiles and email.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🏁 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tyc30827/tyc30827.github.io.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   │   ├── globals.css  # Global styles (Tailwind directives)
│   │   ├── layout.js    # Root layout
│   │   └── page.js      # Main landing page
│   ├── components/      # React components for each section
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   └── ...
│   └── data/
│       └── portfolio.json # 📝 Main content data file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 📝 Customization

To customize the content of the portfolio, you don't need to edit the React components. Simply modify the `src/data/portfolio.json` file.

**Example `portfolio.json` structure:**

```json
{
  "personalInfo": {
    "name": "Your Name",
    "role": "Your Role",
    "bio": "Your short bio..."
  },
  "experience": [
    {
      "role": "Job Title",
      "company": "Company Name",
      "description": ["Achievement 1", "Achievement 2"]
    }
  ]
  // ... update other sections similarly
}
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy your site.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
