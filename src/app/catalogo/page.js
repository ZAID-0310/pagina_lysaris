export default function Catalogo() {
  // Lista de ramos (puedes agregar, modificar o quitar elementos aquí fácilmente)
  const ramos = [
    {
      id: 1,
      nombre: "Ramo Primavera",
      precio: "$45.00",
      descripcion: "Arreglo silvestre con variedad de flores frescas de temporada.",
      imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nombre: "Girasoles Radiantes",
      precio: "$38.00",
      descripcion: "Arreglo vibrante de girasoles seleccionados a mano.",
      imagen: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nombre: "Rosas Elegancia",
      precio: "$55.00",
      descripcion: "Rosas rojas premium acompañadas de fino follaje y envoltura.",
      imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      nombre: "Rosas Elegancia",
      precio: "$55.00",
      descripcion: "Rosas rojas premium acompañadas de fino follaje y envoltura.",
      imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main>
      <section className="bg-cream2 px-6  pt-28 text-center pb-10">
        <h1 className="font-display text-4xl font-bold text-coral sm:text-5xl mb-12">
          RAMOS DE FLORES
        </h1>

          {/* Grilla responsiva */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ramos.map((ramo) => (
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
                <button
                  className="block w-full rounded-lg bg-gray-900/10 py-3 px-6 text-center text-xs font-bold uppercase text-gray-900 transition-all hover:scale-105"
                  type="button"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}