export interface Product {

  id: number;

  nom: string;

  description: string;

  prix: number;
  
  quantite: number;
  
  prixPromotion?: number;

  imageUrl: string;

  categorie: string;

  estEnVedette: boolean;

  nombreVentes: number;

  dateCreation: Date;

  vendeurId: number;

}