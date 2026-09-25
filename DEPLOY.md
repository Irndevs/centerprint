# Deploy — GitHub + Cloudflare

Config principal: **`wrangler.jsonc`** (mesmo estilo do topfarma).

```jsonc
{
  "name": "centerprint-variedades",
  "compatibility_date": "2026-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "observability": { "enabled": true },
  "assets": {
    "directory": "./dist/public",
    "not_found_handling": "single-page-application"
  }
}
```

- `assets.directory` → pasta gerada pelo Vite (`pnpm run build:pages`)
- `not_found_handling: single-page-application` → SPA (React) sem quebrar rotas

---

## Subir no GitHub

```bash
git init
git add .
git commit -m "site Center Print + Centertop"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/centerprint-variedades.git
git push -u origin main
```

---

## Opção A — Cloudflare conectado ao Git (mais simples)

1. Dashboard → **Workers & Pages** → Create → Connect to Git  
2. Build settings:

   | Campo | Valor |
   |-------|--------|
   | Build command | `pnpm run build:pages` |
   | Build output / assets | `dist/public` |

   (ou deixe o Wrangler ler o `wrangler.jsonc` se o projeto for Worker + Assets)

3. Save and Deploy.

---

## Opção B — GitHub Actions (já incluso)

Secrets no repositório:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Workflow: `.github/workflows/deploy-cloudflare.yml` → roda `wrangler deploy` após o build.

---

## Opção C — Terminal

```bash
pnpm install
pnpm run build:pages
npx wrangler deploy
# ou: pnpm run deploy
```

Login: `npx wrangler login`

---

## Domínio customizado (opcional)

No `wrangler.jsonc`, se quiser domínio próprio (como no topfarma):

```jsonc
"routes": [
  {
    "pattern": "centerprint.seudominio.com",
    "custom_domain": true
  }
]
```

Ou configure o domínio no painel: Workers & Pages → seu projeto → Custom domains.

---

## Scripts úteis

| Comando | Função |
|---------|--------|
| `pnpm run build:pages` | Só o front (Vite → `dist/public`) |
| `pnpm run deploy` | Build + `wrangler deploy` |
| `pnpm run preview:pages` | Teste local com Wrangler |
