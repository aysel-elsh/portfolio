# aysel-elshenawy

Personal site. Next.js (App Router), TypeScript, Tailwind CSS v4. Builds to a static site in `out/`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in ./out
```

Deploy: push to GitHub and import into Vercel (zero config), or upload `out/` to any static host.

## Editing content

Everything you'd change lives in `content/`:

| File | What's in it |
| --- | --- |
| `content/profile.ts` | Email, LinkedIn, GitHub, CV PDF, portrait, intro text |
| `content/work.ts` | Project pages, shorter notes, coursework |
| `content/recognition.ts` | Press and awards |
| `content/community.ts` | Leadership and service |

A new object in `work` gets its own page at `/work/<slug>/` automatically.

## Adding photos

1. Put the image in `public/images/` (e.g. `public/images/tvm-bench.jpg`). JPG, about 2000px wide.
2. Add it to the entry's `photos` array in `content/work.ts`:

```ts
photos: [
  { src: "/images/tvm-bench.jpg", alt: "ThermoVolt prototype on the test bench",
    caption: "Bench prototype during a test run.", width: 2000, height: 1333 },
],
```

Photos are numbered as figures automatically. For your headshot, fill in `portrait` in `content/profile.ts`; it shows on the About page.

## Design tokens

Defined once in `app/globals.css` under `@theme`: paper `#F8F7F4`, surface `#EFECE6`, ink `#121316`, muted `#52565E`, hairline `#D8D5CE`, accent `#0F4C81`. Fonts are self-hosted through Fontsource: Newsreader (display), Inter (body), JetBrains Mono (metadata).

## Structure

```
app/            routes: / work work/[slug] about recognition community cv
components/     SiteRail, WorkIndex, Diagrams, ui (PageHead, Block, Plate, SpecTable, Ledger…)
content/        typed data
lib/types.ts    content types
```
