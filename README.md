# SRS Vision – Official Website

A responsive Next.js starter website for SRS Vision, using the supplied company logo and a navy / blue / cyan / violet visual identity.

## Included
- Public company website: home, services, portfolio, team and contact sections
- Quote enquiry form (front-end demo; no email/database submission yet)
- Admin dashboard UI at `/dashboard` with sample metrics, projects, activity and navigation
- Responsive layouts for mobile, tablet and desktop
- Official SRS Vision logo in `public/images/srs-vision-logo.jpg`

## Requirements
- Node.js 20.9+ (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Upload to GitHub
1. Create a new empty repository on GitHub, for example `srs-vision-official-website`.
2. Extract this ZIP on your computer.
3. Open a terminal inside the extracted folder:
```bash
git init
git add .
git commit -m "Initial SRS Vision official website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/srs-vision-official-website.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username.

## Deploy
Import the GitHub repository into Vercel and use the default Next.js settings. No environment variables are required for this front-end demo.

## Important production notes
This ZIP is a complete runnable **front-end starter**, not a production-connected company management system. The dashboard uses sample data. Contact and quotation forms validate input in the browser but do not yet save or send submissions. There is no live authentication, database, payment gateway, email delivery, or synchronization with the internal team platform yet.

Before accepting real client information, connect a backend (for example Supabase/PostgreSQL), implement secure authentication and role-based permissions, add server-side form handling, configure email notifications, and test security. Never put secret keys in browser-side code.

## Brand
- Company: SRS Vision
- Tagline from supplied logo: Your Vision. Our Creation.
- Company vision: Learn Together. Create Together. Build Together. Grow Together.
- Colors: deep navy, royal blue, cyan and violet.
