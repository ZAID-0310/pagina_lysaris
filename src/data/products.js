export const ramosXpress = [
  {
    id: 'express-1',
    image:'/ramo_xpress.webp',
    name: 'Sunny Love',
    price: 'S/26.00',
    description: 'Ramo de girasol, statis y gypsophilia.',
  },
  {
    id: 'express-2',
    image: '/ramo_xpress.webp',
    name: 'Rayito de Amor',
    price: 'S/30.00',
    description: 'Gerberas amarillas, astromelia y claveles.',
  },
  {
    id: 'express-3',
    image: '/ramo_xpress.webp',
    name: 'Dulce Primavera',
    price: 'S/35.00',
    description: 'Astromelias amarillas y claveles blancos.',
  },
  {
    id: 'express-4',
    image: '/ramo_xpress.webp',
    name: 'Yellow Muse',
    price: 'S/40.00',
    description: 'Lirio, astromelias blancas y gypsophilia.',
  },
  {
    id: 'express-5',
    image:'/ramo_xpress.webp',
    name: 'Yellow Muse (Edición Especial)', // Puedes cambiarle el nombre o dejarlo igual
    price: 'S/40.00',
    description: 'Lirio, astromelias blancas y gypsophilia.',
  },
  {
    id: 'express-6',
    image: '/ramo_xpress.webp',
    name: 'Yellow Muse (Grande)',
    price: 'S/40.00',
    description: 'Lirio, astromelias blancas y gypsophilia.',
  },
]

export const ramosGirasoles = [
  {
    id: 2,
    nombre: "Girasoles Radiantes",
    precio: "S/38.00",
    descripcion: "Arreglo vibrante de girasoles seleccionados a mano.",
    imagen: '/ramo_girasoles.webp'
  },
]

export const ramosRosas = [
  {
    id: 3,
    nombre: "Rosas Elegancia",
    precio: "S/55.00",
    descripcion: "Rosas rojas premium acompañadas de fino follaje y envoltura.",
    imagen: "/ramo_rosas.webp"
  },
  {
    id: 4,
    nombre: "Rosas Elegancia",
    precio: "S/55.00",
    descripcion: "Rosas rojas premium acompañadas de fino follaje y envoltura.",
    imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
  },
];

export const ramosPrimavera = [
  {
    id: 1,
    nombre: "Ramo Primavera",
    precio: "S/45.00",
    descripcion: "Arreglo silvestre con variedad de flores frescas de temporada.",
    imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
  },
];

// Círculos del inicio: slug debe coincidir con "categoria" de los ramos
export const categorias = [
  {
    slug: "girasoles",
    nombre: "Girasoles",
    imagen: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=400&q=80",
    ramos: ramosGirasoles,
  },
  {
    slug: "rosas",
    nombre: "Rosas",
    imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=400&q=80",
    ramos: ramosRosas,
  },
  {
    slug: "primavera",
    nombre: "Primavera",
    imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=400&q=80",
    ramos: ramosPrimavera,
  },
];
  // Todos los ramos juntos (se arma solo con las listas de arriba)
export const ramos = categorias.flatMap((c) => c.ramos);

export const masVendidos = ramos.filter((r) => [1, 2, 3].includes(r.id));
export const girasolesHome = ramosGirasoles.map((r) => ({
  id: r.id,
  image: r.imagen,
  name: r.nombre,
  price: r.precio,
  description: r.descripcion,
}));