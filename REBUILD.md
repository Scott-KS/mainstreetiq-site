# MSIQ.com — July 1, 2026 Rebuild Plan

**Branch:** `july-rebuild`
**Target launch:** 2026-07-01 (with 2026-06-17 internal soft-launch buffer)
**Last updated:** 2026-05-05

## What this document is

The single contract everything else in this rebuild builds against. Sitemap, page briefs, migration paths, and 301 maps live here. When `july-rebuild` PRs land they should match this document or update this document first.

This is **not** a content draft. Page copy is drafted in subsequent PRs, with `content/verticals/<slug>.md` registry files holding canonical vertical strings.

## Decisions locked

1. **Voice and brand.** Main Street IQ, one brand, one practice, segment-aware. MSIQ blues, Outfit, no em dashes, no emoji, asymmetric layouts. Per `feedback_msiq_design_principles`.
2. **Lead magnet.** CFO Assessment leads on the new home. Existing `/cfo-assessment` migrates to `/assessment`.
3. **CCIQ.com.** Sunset clean. Full 301 map to `mainstreetiq.com/wine`. Domain stays registered; DNS retires after 90 days of stable redirect traffic.
4. **Verticals at launch.** Wine, Elective Medicine, Wellness & Longevity, Hospitality, Food & Beverage. Five.
5. **Tier ladder.** Discover (segment-specific only, not in top nav), Monitor, Diagnose, Engage, Manage. **Capital Event tier retired** as of 2026-05-05; canonical-facts.md updated. Capital-event-shaped work is sold as a Diagnose project or an Engage/Manage retainer addition.
6. **Diagnose absorbs all one-time projects.** No standalone `/audit` page. Audit Pro is one of the projects under Diagnose.
7. **Pricing.** Wine pricing canonical from `MSIQ/canonical-facts.md`. Pricing for Elective Medicine, Wellness & Longevity, Hospitality, F&B is **TBD by Scott** before launch; templates use placeholders until filled.
8. **Case studies on launch.** Wine = existing CCIQ portfolio. Wellness & Longevity = Lucid (named on launch if closed by mid-June; design-partner CTA otherwise). Elective Medicine = Eternity Health (same conditions). Hospitality + F&B = design-partner CTAs.
9. **WCIR Q2 2026.** Holds. Ships from `mainstreetiq.com/wine/report` as a Main Street IQ wine report. WCIR brand-name treatment (rename vs. retain) decided at Week 5.
10. **Build approach.** Extend the flat-HTML pattern. No templating layer for July 1. Reuse existing `styles.css` component classes.
11. **Branch strategy.** All work on `july-rebuild`. Live URLs unlinked from nav until Week 5 nav refactor. Sitemap.xml + llms.txt updated at Week 6.
12. **CFO city pages.** Relocate to `/fractional-cfo/<city>.html`. 301 originals.
13. **CFO offering pages.** Stay as individual pages, relocated to `/fractional-cfo/<page>.html`. Preserves SEO equity. Surfaced in `/fractional-cfo/` overview, not in top nav.

## Sitemap (final)

```
mainstreetiq.com/
├── /                              index.html — Monitor floor + CFO Assessment hero
├── /assessment                    renamed from /cfo-assessment
│
├── /how-it-works                  Loop framing → tier ladder
│
├── /monitor                       Tier page
├── /diagnose                      Tier page — menu of one-time projects
├── /engage                        Tier page
├── /manage                        Tier page
│
├── /verticals/                    Hub — 5 cards
│   ├── /wine                      Absorbs cciq.com + existing /central-coast-iq
│   │   ├── /report                WCIR landing — Q2 2026 issue ships here
│   │   └── /reports/<slug>        Per-winery report URLs migrated from cciq.com
│   ├── /elective-medicine
│   ├── /wellness-longevity
│   ├── /hospitality
│   └── /food-beverage
│
├── /pricing                       Single surface, vertical toggle
│
├── /fractional-cfo/               Sectioned-off CFO advisory
│   ├── /                          Overview page (links to all offerings below)
│   ├── /interim-finance-leadership.html      migrated from root
│   ├── /finance-director-services.html       migrated from root
│   ├── /head-of-finance-services.html        migrated from root
│   ├── /cfo-for-series-a-prep.html           migrated from root
│   ├── /pe-ops-partner.html                  migrated from root
│   ├── /5-day-close.html                     migrated from root
│   ├── /vs-cpa.html                          migrated from /fractional-cfo-vs-cpa
│   ├── /dtc-ecommerce.html                   migrated from /fractional-cfo-dtc-ecommerce
│   ├── /santa-barbara.html                   migrated from /fractional-cfo-santa-barbara
│   ├── /san-luis-obispo.html                 migrated
│   ├── /ventura.html                         migrated
│   ├── /los-angeles.html                     migrated
│   ├── /orange-county.html                   migrated
│   ├── /san-diego.html                       migrated
│   └── /inland-empire.html                   migrated
│
├── /our-work/                     Existing 7 case studies, preserved
├── /blog/                         Existing 27 posts + index, preserved
├── /locations.html                Existing hub, preserved
├── /about.html                    Updated (new framing, founder + practice)
├── /contact.html                  Preserved
├── /card.html                     Preserved (only page with public phone)
└── /thanks-for-booking.html       Preserved
```

**Top nav (final):** `Verticals | How It Works | Monitor | Pricing | Assessment | Book a call`

**Footer adds:** `Fractional CFO | Our Work | Blog | About | Contact`

## Page-by-page content brief

### `/` (home)

- **Hero:** Loop framing in plain language ("Find customers, serve them well, hold them. Revenue is the only variable that matters."). Primary CTA = CFO Assessment. Secondary = Book a call.
- **Section 2:** "Monitor is the floor." Explainer panel introducing the tier ladder Discover → Monitor → Diagnose → Engage → Manage.
- **Section 3:** Vertical chooser — 5 cards (Wine, Elective Medicine, Wellness & Longevity, Hospitality, Food & Beverage), one-line outcome each, link to vertical page.
- **Section 4:** Founder block. Scott photo, "CFO's lens to AI-augmented business intelligence" tagline, bridge to `/fractional-cfo`.
- **Section 5:** Case study tiles. Existing 7 from `/our-work` plus new winery references where appropriate.
- **Section 6:** Lead magnet (CFO Assessment) + book-a-call dual CTA.

### `/assessment`

Migrate engine from `/cfo-assessment`. Refresh post-quiz funnel: route results into vertical pages where matched, not just CFO advisory. Preserve Zoho hidden-input pattern (per `feedback_zoho_select_hidden_input`).

### `/how-it-works`

- The loop in plain language
- Tier ladder visual (Discover → Monitor → Diagnose → Engage → Manage)
- "What a Monitor subscription actually feels like" — what arrives, when, how it's used
- Bridges to `/pricing` and `/verticals`

### Tier pages — `/monitor`, `/diagnose`, `/engage`, `/manage`

Same template each:
- What it is (1 paragraph)
- What you get (deliverables list — Monitor includes the 7 Plus modules)
- When it fits, when it doesn't
- Sample artifact (anonymized)
- Pricing band, vertical toggle (wine canonical, others TBD)
- CTA — Monitor: book a call (manual onboarding stays); Diagnose/Engage/Manage: book a call

### Vertical pages — `/verticals/<slug>`

Same template each:
- Vertical-specific hero (wine = "Pricing power, club retention, peer movement"; elective = "Lead quality, review velocity, brand search dominance"; etc.)
- 3-5 KPIs the Monitor pack tracks for this vertical
- Sample report excerpt
- Vertical-specific pricing strip (wine = real, others = placeholder)
- Case study slot or design-partner CTA
- Discover artifact link if exists (wine → `/wine/report`)

### `/pricing`

Single page, vertical toggle (default Wine). Four tier columns + CFO Advisory column. No "most popular" badge (per `feedback_no_auto_best`).

### `/fractional-cfo/`

Overview page introducing the advisory side of MSIQ for buyers wanting 1:1. Links to all six offering pages + city pages. Bridges to `/assessment` and `/engage`.

### `/wine`

Absorbs `central-coast-iq.html` content. Hero on wine intelligence. Links to:
- `/wine/report` — WCIR landing
- `/wine/reports/<slug>` — per-winery report archive (where any are public)
- Existing wine blog content where relevant

## File path map: existing → new

### Routes that change (require 301)

| Existing path | New path | Reason |
|---|---|---|
| `/cfo-assessment` | `/assessment` | Brand-level lead magnet, not CFO-specific |
| `/central-coast-iq` | `/wine` | Wine becomes a vertical page, not a sub-brand |
| `/fractional-cfo-santa-barbara` | `/fractional-cfo/santa-barbara` | CFO content sectioned |
| `/fractional-cfo-san-luis-obispo` | `/fractional-cfo/san-luis-obispo` | |
| `/fractional-cfo-ventura` | `/fractional-cfo/ventura` | |
| `/fractional-cfo-los-angeles` | `/fractional-cfo/los-angeles` | |
| `/fractional-cfo-orange-county` | `/fractional-cfo/orange-county` | |
| `/fractional-cfo-san-diego` | `/fractional-cfo/san-diego` | |
| `/fractional-cfo-inland-empire` | `/fractional-cfo/inland-empire` | |
| `/fractional-cfo-vs-cpa` | `/fractional-cfo/vs-cpa` | |
| `/fractional-cfo-dtc-ecommerce` | `/fractional-cfo/dtc-ecommerce` | |
| `/interim-finance-leadership` | `/fractional-cfo/interim-finance-leadership` | |
| `/finance-director-services` | `/fractional-cfo/finance-director-services` | |
| `/head-of-finance-services` | `/fractional-cfo/head-of-finance-services` | |
| `/cfo-for-series-a-prep` | `/fractional-cfo/cfo-for-series-a-prep` | |
| `/pe-ops-partner` | `/fractional-cfo/pe-ops-partner` | |
| `/5-day-close` | `/fractional-cfo/5-day-close` | |
| `/our-services` | `/fractional-cfo/` | Old service overview rolls into CFO overview |

### Routes that stay

`/about`, `/contact`, `/card`, `/blog/*`, `/our-work/*`, `/locations`, `/thanks-for-booking`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `CNAME`.

### Routes that are net-new

`/`, `/assessment`, `/how-it-works`, `/monitor`, `/diagnose`, `/engage`, `/manage`, `/pricing`, `/verticals/`, `/verticals/wine` (alias `/wine`), `/wine/report`, `/verticals/elective-medicine`, `/verticals/wellness-longevity`, `/verticals/hospitality`, `/verticals/food-beverage`, `/fractional-cfo/`.

Note on home: `/` itself is replaced (not a 301 — same URL, new content). Old home content is partially preserved on `/fractional-cfo/`.

## cciq.com 301 map

cciq.com sunsets July 1. Cloudflare edge rules handle the redirect.

| cciq.com path | mainstreetiq.com target |
|---|---|
| `/` | `/wine` |
| `/cciq-assessment` | `/assessment` |
| `/cciq-methodology` | `/wine` (anchor: methodology) — methodology absorbed into vertical page |
| `/discover`, `/monitor`, `/diagnose`, `/engage`, `/manage` | `/wine` |
| `/wcir`, `/wine-country-intelligence-report` | `/wine/report` |
| `/reports/<winery-slug>` | `/wine/reports/<winery-slug>` (preserved deep links) |
| any other path | `/wine` (catch-all) |

DNS: A/CNAME records updated July 1 to point cciq.com to the redirect host. Domain registration retained through 2027 minimum. Reassess DNS retirement after 90 days of stable redirect traffic.

## Tier-to-SKU mapping (canonical from `MSIQ/canonical-facts.md`)

Wine pricing only — locked. Other verticals are placeholder.

### `/monitor`

| SKU | Wine price |
|---|---|
| Monitor Monthly | $400/mo |
| Monitor Annual (includes Discover Bundle) | $3,600/yr |
| Monitor Plus Monthly | $600/mo |
| Monitor Plus Annual | $6,000/yr |

Other verticals: TBD by Scott. Memory anchor — medical/elective ~2x premium per `project_msiq_pricing_structure`.

### `/diagnose`

| SKU | Wine price |
|---|---|
| Website Audit | $1,495 |
| Website Audit + 30-min session | $1,995 |
| Website Audit Pro | $2,995 |
| Competitor Benchmark | $2,995 |
| Competitor Benchmark + strategy call | $3,995 |
| Full Business Diagnostic | $4,995 |
| Full Business Diagnostic + session | $7,995 |

CFO Diagnostic projects (Annual Plan, Management Reporting Setup, Client Profitability Deep Dive, Wine Club LTV + Cohort Model, Pricing Strategy Review) live on `/fractional-cfo/` and are linked from `/diagnose` as a "CFO-side projects" callout.

### `/engage`

| SKU | Wine price |
|---|---|
| Engage Standard | $2,995/mo |
| Engage Plus | $4,495/mo |

### `/manage`

| SKU | Wine price |
|---|---|
| Manage Standard | $9,995/mo |
| Manage Plus | $13,995/mo |

### Add-ons (callout on `/pricing`)

Consolidated Billing $500/mo, Additional partner track $500/mo, Additional named peer $50/mo, Custom KPI dashboard $1,995, Emergency response $1,495/incident, 1-on-1 Office Hours $295/session, Workshop facilitation $2,995/session.

## Build sequence

| Week | Dates | Goals |
|---|---|---|
| 1 | May 6-12 | This doc (PR 1). Three reference templates (PR 2). DESIGN.md update (PR 3). Vertical content stubs (PR 4). |
| 2 | May 13-19 | Ship `/how-it-works`. Ship `/monitor`, `/diagnose`, `/engage`, `/manage`. Scaffold `/pricing` with wine bands. |
| 3 | May 20-26 | Vertical batch 1: `/verticals/wine` (highest fidelity, absorbs `/central-coast-iq`). `/verticals/elective-medicine`. |
| 4 | May 27-Jun 2 | Vertical batch 2: `/verticals/wellness-longevity`, `/verticals/hospitality`, `/verticals/food-beverage`. |
| 5 | Jun 3-9 | Refactor home page (CFO Assessment hero). Move CFO content to `/fractional-cfo/`. Build cciq.com 301 map. Migrate `/cfo-assessment` → `/assessment`. Update top + footer nav. WCIR brand-name decision. |
| 6 | Jun 10-16 | Chrome DevTools walk-through of every page. Reality-check claims vs canonical-facts.md. Brand-guardian + accessibility audits. End-to-end CTA tests. Update sitemap.xml, llms.txt, robots.txt. |
| 7 | Jun 17-23 | Soft launch on staging subdomain. 3-5 advisor reviews. Buffer for structural fixes. |
| 8 | Jun 24-30 | Apply advisor feedback. Final reality check. Merge `july-rebuild` to main. DNS flip + cciq.com 301s active July 1. |

## Open / pending decisions

| Decision | Owner | Resolve by |
|---|---|---|
| Pricing for Elective Medicine, Wellness & Longevity, Hospitality, F&B | Scott | Week 4 (before vertical batch 2 ships) |
| Lucid + Eternity case study naming (named vs. design-partner CTA) | Scott | Week 4 |
| WCIR brand-name treatment ("Main Street IQ Wine Country Intelligence Report" vs. rename) | Scott | Week 5 |
| `/assessment` post-quiz funnel routing (does it segment buyers into vertical pages?) | Scott + Claude | Week 5 |

## Out of scope for July 1

- Newsletter
- Ahrefs MCP-driven blog GSC dashboard
- Self-serve Stripe checkout for Monitor (manual onboarding via Calendly + Strategic Brief stays)
- Templating layer (11ty, Hugo) — Q3 2026 if scaling demands it
- Multi-segment Discover artifacts beyond wine (per `project_msiq_discover_segment_specific`)

## Update protocol

When any decision in this document changes:
1. Update this file with the new decision, dated.
2. If the change touches canonical-facts.md (tiers, pricing, brand strings), update canonical-facts.md first.
3. If the change invalidates a PR already merged, open a corrective PR before continuing forward work.
