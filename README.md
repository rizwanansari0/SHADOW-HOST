# SHADOW HOST

**Tagline:** Deploy Fast. Scale Without Limits.

A polished, responsive Next.js frontend starter for a hosting-platform concept. It includes a marketing site, pricing, demo authentication forms, a mock project dashboard, deployment history, domain management, analytics charts, team and billing screens, support center, admin UI preview, and legal-policy templates.

> **Important:** This is a frontend demo, not a functioning cloud hosting provider. It does not deploy user code, connect GitHub, change DNS, verify domains, issue SSL certificates, collect payments, create real support tickets, or authenticate users. Demo records and analytics are explicitly illustrative.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS (plus custom responsive CSS)
- Lucide React icons
- Recharts for dashboard charts
- Compatible with GitHub and Vercel deployment

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

To test the production build:

```bash
npm run build
npm start
```

No environment variables are required to preview the frontend. `.env.example` contains placeholders for future server-side integrations only. Do not add secrets to `NEXT_PUBLIC_*` variables or commit `.env.local`.

## Routes

- `/` — Landing page
- `/pricing` — Illustrative pricing plans
- `/login`, `/signup`, `/forgot-password` — Demo authentication UI; no credentials are stored or sent
- `/dashboard` — Overview and mock project metrics
- `/projects`, `/projects/new` — Project list and client-side validated project form
- `/deployments` — Mock deployment history and log preview
- `/domains` — Temporary demo domain list and DNS guide
- `/analytics` — Demo charts and usage summary
- `/team`, `/billing`, `/settings` — Dashboard interface previews
- `/docs` — Setup and integration documentation
- `/support` — Help center and non-persisted ticket form
- `/admin` — Non-functional admin UI preview; not secure for real admin work
- `/privacy`, `/terms` — Policy templates that must be reviewed before launch

## Upload to GitHub

1. Create a new empty repository on GitHub named `shadow-host` (do not add a README if you already have this one locally).
2. Download or unzip this project on your computer, or copy the project files into your local folder.
3. Open a terminal in the `shadow-host` folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial SHADOW HOST frontend"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/shadow-host.git
   git push -u origin main
   ```

4. Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to authenticate, use GitHub's supported sign-in/token flow; do not paste a token into source code.

### Upload using GitHub website (no terminal)

1. Create the repository on GitHub.
2. Open it and choose **Add file → Upload files**.
3. Upload the project files/folders from the unzipped `shadow-host` directory. Ensure hidden files such as `.gitignore` and `.env.example` are included. Never upload `.env.local` or secrets.
4. Commit the uploaded files to the `main` branch.

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the `shadow-host` GitHub repository.
3. Confirm the framework is detected as **Next.js**. Use the default build command `npm run build` and default output settings.
4. No environment variables are required for the demo frontend. Do not add placeholder credentials as real secrets.
5. Click **Deploy**. After deployment, test `/`, `/dashboard`, `/projects/new`, `/domains`, `/analytics`, `/support`, and the auth pages on both desktop and mobile.
6. Later pushes to the connected GitHub branch can trigger new Vercel deployments.

## Production integration roadmap

Before presenting SHADOW HOST as a real hosting service, implement and independently test:

1. **Authentication:** trusted auth provider, secure server-side sessions, email verification, password reset, CSRF/session protections, and account deletion.
2. **Database:** persistent users, projects, deployments, domains, plans, support requests, and audit logs. Validate every write on the server.
3. **Git provider:** OAuth app, strict callback validation, least-privilege scopes, encrypted server-side token storage, and disconnect/revoke support.
4. **Deployment provider:** server-only integration, authenticated job queue, build log streaming, status webhooks, abuse controls, quotas, and isolation. Never execute arbitrary user code on the Next.js application server.
5. **Domains and SSL:** provider-confirmed DNS verification, ownership checks, certificate state, and safe error handling.
6. **Analytics:** real provider data, clear consent/privacy handling, and retention controls.
7. **Billing:** payment provider checkout, signed webhooks, server-side subscription state, invoice handling, cancellation, refunds, and plan enforcement. Never infer payment success from a client-side redirect.
8. **Authorization:** server-side role-based checks on every admin/API route. Hiding buttons in the UI is not security.
9. **Operations:** rate limiting, monitoring, alerts, backups, incident response, privacy/terms review, and abuse reporting.

## Project structure

```text
app/                  App Router pages and global styles
components/            Reusable marketing, auth, dashboard, and chart components
lib/demo-data.ts       Clearly illustrative dashboard data
types/index.ts         Shared TypeScript types
public/                Static assets directory
.env.example           Safe placeholders for future integrations
```

## Notes

- The authentication forms validate input and display an explanatory demo message. They do not create accounts, transmit credentials, or store passwords.
- Project/domain/settings/support actions only update temporary client-side state or display a demo confirmation.
- Admin page is intentionally marked as a preview and must not be treated as access-controlled.
- Replace the sample privacy and terms pages with reviewed documents before collecting personal data or taking payment.
- Performance figures and pricing are illustrative and must not be marketed as service-level commitments.
