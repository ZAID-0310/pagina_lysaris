import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

// ✏️ Edita aquí las tarjetas de "Lo que nos distingue"
const pilares = [
  {
    icono: "🌸",
    titulo: "Frescura de Primera",
    texto:
      "Seleccionamos flores frescas del día para garantizar que tu detalle luzca impecable y mantenga su belleza por más tiempo.",
  },
  {
    icono: "✨",
    titulo: "Detalles Personalizados",
    texto:
      "Adaptamos cada arreglo según tus preferencias, colores favoritos y la ocasión que quieras celebrar.",
  },
  {
    icono: "🚚",
    titulo: "Envíos Especiales",
    texto:
      "Cuidamos la presentación y el traslado de tu pedido para que llegue en perfectas condiciones a las manos de esa persona especial.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-white">
      {/* sección hero */}
      <section className="bg-cream2 px-6 pb-16 pt-28 text-center">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-coral sm:text-5xl">
            ¿Quiénes Somos?
          </h1>
          
        <span className="mx-auto mt-4 block h-px w-16 bg-honey" />
        </Reveal>
        
        <Reveal delay={0.15}>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Transformamos sentimientos en arreglos florales únicos diseñados para alegrar cada ocasión especial.
          </p>
        </Reveal>
      </section>

      {/* sección historia e imagen */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="group relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
                alt="Sobre Lysaris Florería"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="space-y-4 text-left font-sans">
              <h2 className="text-2xl font-bold text-gray-900 font-display sm:text-3xl">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En <strong className="text-coral">Lysaris Florería</strong> nacimos con la convicción de que las flores son la mejor forma de expresar emociones sin decir una sola palabra. Cada flor seleccionada cuenta una historia y transmite un cariño único.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nos especializamos en la elaboración de ramos, arreglos y detalles totalmente personalizados para cumpleaños, aniversarios y momentos significativos, priorizando siempre la calidad y la frescura en cada composición.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* sección de pilares y valores */}
      <section className="bg-cream2 py-16 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-coral mb-12 font-display">
              Lo que nos distingue
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.15} className="h-full">
                <div className="group flex h-full flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-coral/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coral/10 text-2xl text-coral transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {p.icono}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{p.titulo}</h3>
                  <p className="text-sm text-gray-600">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la Acción (CTA) */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center font-sans">
        <Reveal>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display sm:text-3xl">
            ¿Quieres regalar una sonrisa hoy?
          </h2>
          <p className="text-gray-600 mb-8">
            Explora nuestro catálogo completo de arreglos y ramos, o contáctanos para armar un pedido a tu medida.
          </p>
          <Link
            href="/catalogo"
            className="inline-block rounded-lg bg-coral px-8 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:scale-105 hover:shadow-lg hover:shadow-coral/30 active:opacity-90"
          >
            Ver Catálogo
          </Link>
        </Reveal>
      </section>
    </main>
  );
}