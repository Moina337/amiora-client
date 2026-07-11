import { Category } from '../models/category.model';

export const CATEGORIES_MOCK: Category[] = [
  {
    id: 1,
    nom: 'Mode',
    slug: 'mode',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    description: 'Tendances urbaines, essentials et pièces élégantes pour toutes les occasions.',
    nombreProduits: 128,
  },
  {
    id: 2,
    nom: 'Chaussures',
    slug: 'chaussures',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'Sneakers, baskets et modèles premium pour un style quotidien.',
    nombreProduits: 94,
  },
  {
    id: 3,
    nom: 'Technologie',
    slug: 'technologie',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    description: 'Gadgets connectés, accessoires numériques et équipements modernes.',
    nombreProduits: 156,
  },
  {
    id: 4,
    nom: 'Maison',
    slug: 'maison',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Objets déco, mobilier design et solutions pratiques pour votre intérieur.',
    nombreProduits: 112,
  },
  {
    id: 5,
    nom: 'Beauté',
    slug: 'beaute',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    description: 'Soins, maquillage et routines beauté inspirées par les tendances.',
    nombreProduits: 87,
  },
  {
    id: 6,
    nom: 'Accessoires',
    slug: 'accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    description: 'Sacs, bijoux et détails qui subliment chaque look.',
    nombreProduits: 73,
  },
];
