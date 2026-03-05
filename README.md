
# Trend Commerce (Liquid) — 2026

A **complex, robust, high‑scale Liquid application template** (Power Pages‑friendly) with catalog, search, faceted filters, product details, cart, and admin analytics demo.

> This template is 100% Liquid + static assets. For production, bind lists/forms to Dataverse and move configuration with **solutions** and **pipelines**.

## Pages (Web Templates)
- `layout.liquid` — global shell, SEO head, header/footer, assets.
- `pages/home.liquid` — hero + featured products.
- `pages/catalog.liquid` — search `?q=`, category filter `?category=`, sort `?sort=price_asc|price_desc|title_az`, pagination `?page= & ps=`.
- `pages/product.liquid` — product details + add to cart.
- `pages/cart.liquid` — cart UI (localStorage) + totals.
- `pages/checkout.liquid` — stub (connect to your flow/API).
- `pages/account.liquid` — auth‑aware placeholder using `user`.
- `pages/admin.liquid` — demo analytics (revenue) using Liquid aggregation.

## Components
- `components/*` — product card, breadcrumbs, facet filter, pagination, toast.
- `macros/money.liquid` — currency rendering include.

## Sample data
- `includes/sample-data.liquid` — in‑memory CSV → array of product hashes. Replace with Dataverse lists/fetchxml in production.

## Install (Power Pages)
1. In **Portal Management** → **Web Files**, upload `/assets/**/*`.
2. Create **Web Templates** matching files in `/web-templates/**`.
3. Create **Web Pages** (Home, Catalog, Product, Cart, Checkout, Account, Admin) and point to the corresponding templates.
4. Optional: Replace `includes/sample-data.liquid` with Dataverse data (Lists or FetchXML) and set **Table Permissions**.

## Extending for scale
- Replace CSV sample with Dataverse; enable **server‑side filters**.
- Add **Web Application Firewall**, CSP & headers via site settings.
- Use **solutions/pipelines** to promote Dev→Test→Prod.

## Accessibility & Performance
- Semantic landmarks, visible focus, lazy images.
- Small JS, instant UI feedback, pagination with offsets; ready for Core Web Vitals.

---
MIT License. Use at will.
