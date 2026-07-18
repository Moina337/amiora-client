import { Product } from "../models/product.model";

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    nom: "Nike Air Max",
    description: "Chaussure de sport confortable et moderne.",
    prix: 50000,
    quantite: 10,
    prixPromotion: 40000,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    categorie: "Mode",
    estEnVedette: true,
    nombreVentes: 120,
    dateCreation: new Date("2026-06-01")
  },
  {
    id: 2,
    nom: "Samsung Galaxy S24",
    description: "Smartphone Android haut de gamme.",
    prix: 350000,
    quantite: 5,
    prixPromotion: 320000,
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    categorie: "Tech",
    estEnVedette: true,
    nombreVentes: 80,
    dateCreation: new Date("2026-05-25")
  },
  {
    id: 3,
    nom: "Adidas Superstar",
    description: "Sneakers iconiques Adidas.",
    prix: 30000,
    quantite: 15,
    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    categorie: "Mode",
    estEnVedette: false,
    nombreVentes: 210,
    dateCreation: new Date("2026-06-15")
  },
  {
    id: 4,
    nom: "MacBook Pro M4",
    description: "Ordinateur portable professionnel.",
    prix: 1500000,
    quantite: 3,
    prixPromotion: 1450000,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    categorie: "Tech",
    estEnVedette: true,
    nombreVentes: 45,
    dateCreation: new Date("2026-04-12")
  },
  {
    id: 5,
    nom: "Montre Casio",
    description: "Montre classique et élégante.",
    prix: 80000,
    quantite: 20,
    imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800",
    categorie: "Accessoires",
    estEnVedette: false,
    nombreVentes: 60,
    dateCreation: new Date("2026-06-20")
  },
  {
    id: 6,
    nom: "Sac à dos Urban",
    description: "Sac polyvalent pour le quotidien.",
    prix: 25000,
    quantite: 25,
    prixPromotion: 20000,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    categorie: "Mode",
    estEnVedette: true,
    nombreVentes: 180,
    dateCreation: new Date("2026-06-22")
  }
];