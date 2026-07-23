export interface Vendeur {
  id: number;
  nom: string;
  slug: string; // pour l'URL /boutique/mon-super-shop
  logoUrl?: string;
  bannerUrl?: string;
  description?: string;
  ville?: string;
  dateInscription: Date;
  statut: 'actif' | 'suspendu' | 'en_attente';
}