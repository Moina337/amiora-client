import { Vendeur } from '../models/vendeur.model';

export const VENDEURS_MOCK: Vendeur[] = [
  {
    id: 1,
    nom: 'TechZone',
    slug: 'techzone',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200',
    description: 'Spécialiste high-tech et accessoires.',
    ville: 'Moroni',
    dateInscription: new Date('2024-03-10'),
    statut: 'actif',
  },
  {
    id: 2,
    nom: 'Maison & Style',
    slug: 'maison-style',
    logoUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200',
    description: 'Décoration et articles pour la maison.',
    ville: 'Mutsamudu',
    dateInscription: new Date('2024-06-22'),
    statut: 'actif',
  },
];