import { ClipboardList, LayoutDashboard, Package, Utensils } from "lucide-react";

import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Sala",
    description: "Mapa de mesas y estado del servicio en tiempo real.",
    icon: Utensils,
  },
  {
    title: "Comandas",
    description: "Flujo base para pedidos, cocina y cobro.",
    icon: ClipboardList,
  },
  {
    title: "Inventario",
    description: "Stock local preparado para crecer con Prisma y SQLite.",
    icon: Package,
  },
  {
    title: "Dashboard",
    description: "Indicadores operativos para ventas, reservas y ocupacion.",
    icon: LayoutDashboard,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b pb-5">
          <div>
            <p className="text-sm font-medium text-muted-foreground">BarOps</p>
            <h1 className="text-3xl font-semibold tracking-normal">BarOps</h1>
          </div>
          <Button variant="outline">Entrar</Button>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="max-w-xl text-4xl font-semibold tracking-normal sm:text-5xl">
              Mesas, comandas, reservas, TPV e inventario en una base limpia.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Esqueleto inicial con Next.js 15, TypeScript, Tailwind,
              shadcn/ui, Prisma SQLite, Auth.js v5, Vitest y Playwright.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Crear turno</Button>
              <Button variant="secondary">Ver reservas</Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <article
                  className="rounded-lg border bg-card p-5 text-card-foreground"
                  key={module.title}
                >
                  <Icon className="mb-8 h-5 w-5 text-muted-foreground" />
                  <h2 className="text-base font-semibold">{module.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {module.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
