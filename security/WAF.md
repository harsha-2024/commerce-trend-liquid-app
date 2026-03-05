
# WAF Starter (Power Pages)

**Enable Web Application Firewall (WAF)** in the Power Platform Admin Center for your production site. Then add rules such as:

## Geo Allow (example: only allow target region)
- Rule: Match → Geo location → Country/region: Iceland → **Allow**
- Rule: Match → Request URI `/` → **Deny** (evaluated if not matched by allow)

## Rate Limit
- Rule: Rate limit → 1500 requests/5 minutes → Deny when exceeded

## Bot Protection
- Enable managed rules for Good/Bad/Unknown bots; disable specific false positives after reviewing WAF logs.

