# Raheem Quham Folahan — Portfolio

A cybersecurity portfolio for **Raheem Quham Folahan** — web application security,
penetration testing, and ethical hacking, with full-stack development as a supporting
strength.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and a small amount of
motion. Statically exported, so it deploys anywhere — Vercel included.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm start          # serve the built ./out
npm run lint
npm run typecheck
```

## Structure

```
app/                     routes (all statically generated)
  page.tsx               home
  about/                 about + working principles
  experience/            internship timeline
  projects/              project index
  projects/[slug]/       case studies (generateStaticParams)
  labs/                  TryHackMe / PortSwigger lab log
  certifications/        credentials
  contact/               contact channels
  opengraph-image.tsx    generated social card
  sitemap.ts, robots.ts  SEO
components/
  navigation/            header, footer
  sections/              hero, home sections, skills
  ui/                    buttons, tags, section headers, CV control
data/                    ← all content lives here
lib/site.ts              name, links, email, metadata base
public/cv/               CV document
```

## Editing content

Nothing in `components/` needs touching to change what the site says.

| What | File |
| --- | --- |
| Name, email, social links, canonical URL | `lib/site.ts` |
| Skill groups | `data/skills.ts` |
| Internships (and their `status`) | `data/experience.ts` |
| Projects and case studies | `data/projects.ts` |
| Certifications | `data/certifications.ts` |
| Lab platforms and completed labs | `data/labs.ts` |

### Adding a lab write-up

Append to `labEntries` in `data/labs.ts`:

```ts
{
  name: "Broken access control — lab name",
  platform: "PortSwigger Web Security Academy",
  category: "Access control",
  objective: "What the lab asked for and what it taught.",
  tools: ["Burp Suite", "Burp Repeater"],
  status: "completed",
  writeUp: "https://…", // optional
}
```

The labs page renders entries automatically and shows an empty-state until the
first one is added.

### Internship statuses

`data/experience.ts` uses `completed | ongoing | upcoming`. Statuses currently
reflect the position as of **November 2026** — update them as engagements end.
The site never claims an internship is finished while it is still running.

### CV

`components/ui/cv-download.tsx` holds one flag:

```ts
const CV_PDF_READY = false;
```

While `false`, the buttons offer `public/cv/Raheem-Quham-Folahan-CV.docx`
(editable). Drop a PDF at `public/cv/Raheem-Quham-Folahan-CV.pdf`, set the flag to
`true`, and every download button switches to it — no broken links either way.

## Content policy

This portfolio deliberately contains only what is supported by the CV or confirmed
directly:

- No education or academic history.
- No invented achievements, statistics, clients, or testimonials.
- Internships are described as internships, with their real scope.
- The USB social-engineering project is published as **concepts, methodology, and
  defensive outcomes only** — no payloads or executable detail.
- No fake contact form: the contact page routes to real email.
- Labs are not listed until they are completed.

## Deployment

```bash
npm run build   # → ./out
```

On Vercel: import the repo, framework preset **Next.js**, no environment variables
needed. `lib/site.ts` → `site.url` should match the production domain so canonical
URLs, the sitemap and the Open Graph metadata stay correct.
