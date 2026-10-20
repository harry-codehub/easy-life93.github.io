# Harold Johnson — Portfolio

Personal portfolio for **Harold Johnson**, Software / Systems / Test Engineer and AI Consultant.
Built with Next.js 16, Tailwind CSS 4 and Framer Motion, based on the
[modern-portfolio](https://github.com/sanidhyy/modern-portfolio) template by Sanidhya Kumar Verma (MIT).

## Pages

| Route         | Content                                                          |
| ------------- | ---------------------------------------------------------------- |
| `/`           | Hero with summary and "View my work" button                      |
| `/about`      | Bio, stats, and tabs for skills, experience, platforms, education |
| `/services`   | AI evaluation, prompt/model testing, data quality, engineering   |
| `/work`       | Work highlights drawn from the resume                            |
| `/experience` | Role-by-role career history                                      |
| `/contact`    | Email, LinkedIn and location; optional contact form              |

## Editing content

- **Name, email, LinkedIn, summary and work history:** `lib/profile.ts`
- **Portrait:** add a transparent PNG (about 737×678) to `public/` and set `avatar` in `lib/profile.ts`, e.g. `avatar: "/avatar.png"`. Until then an "HJ" monogram is shown.
- **Skills / platforms tabs and stats:** `app/about/page.tsx`
- **Services:** `components/ServiceSlider.tsx`
- **Work highlights:** `components/WorkSlider.tsx`
- **Colors:** `app/globals.css` (`--color-accent` etc.)

## Run locally

Requires Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository and keep the detected **Next.js** defaults (pnpm is detected from `pnpm-lock.yaml`).
3. Click **Deploy**.

Or from this folder with the Vercel CLI:

```bash
npx vercel --prod
```

No environment variables are required. The contact page shows direct email and LinkedIn links by default.

### Optional: contact form

To enable the built-in contact form, add these in Vercel → Project → Settings → Environment Variables (see `.env.example`) and redeploy:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY` — from [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin) (add your Vercel domain)
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `CONTACT_SITE_URL`, `RESEND_TEMPLATE_CONTACT_USER`, `RESEND_TEMPLATE_CONTACT_ADMIN` — from [Resend](https://resend.com) (needs a verified sending domain and two email templates)

## License

MIT — see [LICENSE](LICENSE). Original template © Sanidhya Kumar Verma.
