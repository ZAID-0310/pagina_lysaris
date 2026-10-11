import Link from "next/link";

export default function Nosotros() {
  return (
    <main className="bg-white">
      {/* sección hero */}
      <section className="bg-cream2 px-6 pb-16 pt-28 text-center">
        <h1 className="font-display text-4xl font-bold text-coral sm:text-5xl">
          ¿Quiénes Somos?
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
          Transformamos sentimientos en arreglos florales únicos diseñados para alegrar cada ocasión especial.
        </p>
      </section>

      {/* sección historia e imagen */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
              alt="Sobre Lysaris Florería"
              className="h-full w-full object-cover"
            />
          </div>

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
        </div>
      </section>

      {/* sección de pilares y valores */}
      <section className="bg-cream2 py-16 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-coral mb-12 font-display">
            Lo que nos distingue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mb-4 text-coral text-2xl">
                🌸
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Frescura de Primera</h3>
              <p className="text-gray-600 text-sm">
                Seleccionamos flores frescas del día para garantizar que tu detalle luzca impecable y mantenga su belleza por más tiempo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mb-4 text-coral text-2xl">
                ✨
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Detalles Personalizados</h3>
              <p className="text-gray-600 text-sm">
                Adaptamos cada arreglo según tus preferencias, colores favoritos y la ocasión que quieras celebrar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mb-4 text-coral text-2xl">
                🚚
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Envíos Especiales</h3>
              <p className="text-gray-600 text-sm">
                Cuidamos la presentación y el traslado de tu pedido para que llegue en perfectas condiciones a las manos de esa persona especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción (CTA) */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center font-sans">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display sm:text-3xl">
          ¿Quieres regalar una sonrisa hoy?
        </h2>
        <p className="text-gray-600 mb-8">
          Explora nuestro catálogo completo de arreglos y ramos, o contáctanos para armar un pedido a tu medida.
        </p>
        <Link
          href="/catalogo"
          className="inline-block rounded-lg bg-coral px-8 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:scale-105 active:opacity-90"
        >
          Ver Catálogo
        </Link>
      </section>
    </main>
  );
}