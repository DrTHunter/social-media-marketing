# Social Media Marketing

Service page for my social media marketing work: what I build, what the client provides, and how the paid campaign narrows down to the ads that bring in calls.

**Live page:** https://drthunter.github.io/social-media-marketing/

## The system

1. **Website** – mobile-first site, tap-to-call, quote form, SEO, blog posts, analytics, custom domain.
2. **Social pages** – Facebook and Instagram business pages branded to match, reviews on, Meta Business Suite and ad account owned by the client.
3. **Prime the pages** – about a month of posts (before-and-afters, finished jobs, tips, story posts, reviews) on a calendar before any ads run.
4. **Ad campaigns** – roughly $10/day on Facebook and Instagram. Boost the posts that already perform, run several ad versions at once, cut the losers every week or two, put the budget behind the winners, and rotate fresh ads in. Optional Google search and call ads on top, budgeted separately after checking keyword costs. Monthly plain-English report.

Three levels: **Organic** ($0 ad spend: site, SEO blog, pages, Google Business Profile), **Organic + social ads** (~$10/day), and **Organic + social + Google** ($10/day plus a Google budget).

The client's job is to answer the phone. That's where the sale happens.

## Blog posts for SEO and conversion

Each post answers something people search for, gets reused as social posts, links back to the site, and ends with one tracked call to action. The page uses the [Teton Angel blog](https://www.tetonangel.com/blog/) as the worked example.

## Case study and portfolio

[Teton Angel](https://www.tetonangel.com) – full book launch for Roland Hunter's novel: website and blog, promo video, Facebook and Instagram pages, story-driven posts.

Also featured: [OrionForge](https://www.orionforge.chat), [AudioOasis](https://www.audiooasis.app), [Flowmodoro](https://drthunter.github.io/Flowmodoro/), [Orion Home Search](https://drthunter.github.io/Orion-Home-Search/) and [GitHub](https://github.com/DrTHunter).

## Editing

Static HTML, no build step.

- `index.html` – page content
- `assets/style.css` – styles (light and dark mode)
- `assets/site.js` – the ad-rotation demo (`STAGES`), the client checklist, and `CONTACT_URL` for the contact button

Run locally:

```bash
python -m http.server 5650
```
