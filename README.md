
# Trend Commerce — Dataverse Integration Pack

This add-on swaps sample CSV data for **real Dataverse tables**, wires **Lists/Forms** into pages, adds **i18n** (en-US + is-IS), and ships **security** (CSP/HSTS) + a **WAF starter**, plus **ALM pipelines** for Dev→Test→Prod.

## 1) Dataverse
- Create tables from `dataverse/schema/*.json`.
- Build views/forms/lists per `MAKER_NOTES.md`.
- Bind pages:
  - `/catalog` → `catalog.dataverse.liquid` uses `{% entitylist name: 'Products List' %}`.
  - `/product` → `product.dataverse.liquid` uses `{% entityform name: 'Product Details (Read)' %}` (Record source = QueryString `id`).
  - `/checkout` → `checkout.dataverse.liquid` uses `{% entityform name:'Order (Insert)' %}` and `{% entityform name:'Order Line (Insert)' %}`.
  - `/account` → `account.dataverse.liquid` uses `{% entitylist name:'My Orders' %}`.

## 2) i18n (English + Icelandic)
- Enable languages in Dataverse, then add Website Languages in Portal Management.
- Translate or import content snippets in `/i18n/snippets/*`.

## 3) Security
- Copy `security/site-settings.json` values into Site Settings (HSTS, CSP, Referrer-Policy, etc.).
- Follow `security/WAF.md` to enable WAF and add rules.

## 4) ALM Pipelines
- Add your site to a **solution** (Enhanced Data Model). Update pipeline secrets (DEV/TEST/PROD URLs, AppId/Secret, WebsiteId).
- Use either Azure DevOps `azure-pipelines.yml` or GitHub Actions `trend-commerce-solution.yml` to export/unpack from Dev and import **managed** to Test/Prod.

---
