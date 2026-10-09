# BarOps

Esqueleto inicial para una webapp de gestion de bar/restaurante: mesas, reservas, comandas, TPV, inventario y dashboard.

## Stack

- Next.js 15 con App Router, TypeScript y Tailwind CSS 4.
- shadcn/ui con tema neutral y un componente `Button` inicial.
- Prisma 6 + SQLite local en `prisma/dev.db`.
- Auth.js v5 (`next-auth@beta`) configurado sin proveedores.
- Vitest para unit tests y Playwright para end-to-end.

## Requisitos

- Node.js 20.
- npm.
- Windows 11 / PowerShell.

## Arranque local

Instala dependencias:

```powershell
npm install
```

Crea o sincroniza la base SQLite local:

```powershell
npm run db:push
```

Arranca la aplicacion:

```powershell
npm run dev
```

Abre http://localhost:3000.

## Tests

Tests unitarios:

```powershell
npm test
```

Tests end-to-end:

```powershell
npm run test:e2e
```

Si Playwright no tiene navegadores instalados en la maquina, ejecuta:

```powershell
npx playwright install
```

## Variables de entorno

El proyecto incluye `.env` para desarrollo local y `.env.example` como referencia.

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="replace-with-a-random-secret"
```

## Decisiones iniciales

- Se fija Next.js 15 porque es el objetivo del proyecto, aunque `create-next-app@latest` ya genera Next 16.
- Se usa Tailwind CSS 4 porque es la opcion actual que genera el scaffold moderno de Next y encaja con shadcn/ui.
- Se usa `next-auth@5.0.0-beta` porque Auth.js v5 se distribuye de forma canonica a traves del paquete `next-auth` v5.
- Prisma CLI y `@prisma/client` quedan alineados en Prisma 6 estable. La ruta SQLite `file:./dev.db` se resuelve desde `prisma/schema.prisma`, por eso el archivo queda en `prisma/dev.db`.
- El esquema incluye solo `AppMeta`, un modelo tecnico minimo para validar `db push`; aun no hay modelos de dominio de bar/restaurante.
