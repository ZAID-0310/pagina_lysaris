import {ramos} from "@/data/products";

export default function Catalogo() {
  const phoneNumber = "51937111149"; // Tu número de WhatsApp

  return (
    <main>
      <section className="bg-cream2 px-6 pt-28 text-center pb-10">
        <h1 className="font-display text-4xl font-bold text-coral sm:text-5xl mb-12">
          RAMOS DE FLORES
        </h1>

        {/* Grilla responsiva */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ramos.map((ramo) => {
            // Mensaje personalizado con el nombre y precio del ramo
            const mensaje = encodeURIComponent(
              `¡Hola! Me interesa comprar el arreglo "${ramo.nombre}" (${ramo.precio}). ¿Tienen disponibilidad?`
            );
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${mensaje}`;

            return (
              <div
                key={ramo.id}
                className="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md"
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