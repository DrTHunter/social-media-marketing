# Social Media Marketing

Service page for my social media marketing work: what I build, what the client provides, and how the paid campaign narrows down to the ads that bring in calls.

**Live page:** https://drthunter.github.io/social-media-marketing/

## The system

1. **Website** – mobile-first site, tap-to-call, quote form, SEO, blog posts, analytics, custom domain.
2. **Social pages** – Facebook and Instagram business pages branded to match, reviews on, Meta Business Suite and ad account owned by the client.
3. **Prime the pages** – about a month of posts (before-and-afters, finished jobs, tips, story posts, reviews) on a calendar before any ads run.
4. **Ad campaign** – roughly $10/day. Boost the posts that already perform, run several ad versions at once, cut the losers every week or two, put the budget behind the winners, and rotate fresh ads in. Monthly plain-English report.

The client's job is to answer the phone. That's where the sale happens.

## Blog posts for SEO and conversion

Each post answers something people search for, gets reused as social posts, links back to the site, and ends with one tracked call to action. The page uses the [Teton Angel blog](https://www.tetonangel.com/blog/) as the worked example.

## Case study and portfolio

[Teton Angel](https://www.tetonangel.com) – full book launch for Roland Hunter's novel: website and blog, promo video, Facebook and Instagram pages, story-driven posts.

Also featured: [OrionForge](https://www.orionforge.chat), [AudioOasis](https://www.audiooasis.app), [Flowmodoro](https://drthunter.github.io/Flowmodoro/) and [GitHub](https://github.com/DrTHunter).

## Editing

Static HTML, no build step.

- `index.html` – page content
- `assets/style.css` – styles (light and dark mode)
- `assets/site.js` – the ad-rotation demo (`STAGES`), the client checklist, and `CONTACT_URL` for the contact button

Run locally:

```bash
python -m http.server 5650
```
