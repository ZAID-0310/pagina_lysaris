import Link from "next/link";
import { ramos, categorias } from "@/data/products";

export default function CatalogoPage({ categoriaSlug }) {
  const phoneNumber = "51937111149"; // Numero de whatsapp de la tienda

  const categoria = categorias.find((c) => c.slug === categoriaSlug);
  const lista = categoria ? categoria.ramos : ramos;

  const chip = (activo) =>
    `rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
      activo
        ? "border-coral bg-coral text-white"
        : "border-coral/30 bg-white text-coral hover:border-coral"
    }`;

  return (
    <main className="bg-white">
      {/* Franja superior: título + filtros */}
      <section className="bg-cream2 px-6 pb-12 pt-28 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-coral sm:text-5xl">
          {categoria ? categoria.nombre : "Ramos de flores"}
        </h1>
        <span className="mx-auto mt-4 block h-px w-16 bg-honey" />
        

        {/* Filtros por flor */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/catalogo/" className={chip(!categoria)}>
            Todos
          </Link>
          {categorias.map((c) => (
            <Link
              key={c.slug}
              href={`/catalogo/${c.slug}/`}
              className={chip(categoria?.slug === c.slug)}
            >
              {c.nombre}
            </Link>
          ))}
        </div>
      </section>

      {/* Tarjetas sobre fondo blanco */}
      <section className="bg-white px-6 py-14 text-center">
        {lista.length === 0 && (
          <p className="text-gray-600">Pronto tendremos más arreglos en esta categoría.</p>
        )}

        {/* Grilla responsiva */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((ramo) => {
            const mensaje = encodeURIComponent(
              `¡Hola! Me interesa comprar el arreglo "${ramo.nombre}" (${ramo.precio}). ¿Tienen disponibilidad?`
            );
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${mensaje}`;

            return (
              <div
                key={ramo.id}
                className="relative flex w-full flex-col rounded-xl border border-olive/20 bg-white text-gray-700 shadow-md"
              >
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white text-gray-700">
                  <img
                    src={ramo.imagen}
                    alt={ramo.nombre}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-sans text-base font-semibold text-gray-900">
                      {ramo.nombre}
                    </p>
                    <p className="font-sans text-base font-bold text-coral">
                      {ramo.precio}
                    </p>
                  </div>
                  <p className="font-sans text-sm font-normal text-gray-600 opacity-80">
                    {ramo.descripcion}
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-green-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-green-600 hover:scale-105 active:opacity-[0.85]"
                  >
                    Comprar por WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}