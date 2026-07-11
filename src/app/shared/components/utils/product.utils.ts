import { Product } from "../../../models/product.model"; 
 import { ProductBadge } from "../../../models/product-badge.model"; 

export class ProductUtils {

  /**
   * Le produit est-il en promotion ?
   */
  static hasPromotion(product: Product): boolean {
    return product.prixPromotion != null;
  }

  /**
   * Prix à afficher.
   */
  static displayedPrice(product: Product): number {
    return product.prixPromotion ?? product.prix;
  }

  /**
   * Pourcentage de réduction.
   */
  static reduction(product: Product): number {

    if (!this.hasPromotion(product) || !product.prixPromotion) {
      return 0;
    }

    return Math.round(
      ((product.prix - product.prixPromotion) / product.prix) * 100
    );

  }

  /**
   * Produit récent (30 jours).
   */
  static isNew(product: Product): boolean {

    const difference =
      Date.now() - product.dateCreation.getTime();

    const days =
      difference / (1000 * 60 * 60 * 24);

    return days <= 30;

  }

  /**
   * Produit en vedette.
   */
  static isFeatured(product: Product): boolean {
    return product.estEnVedette;
  }

 

static getBadges(product: Product): ProductBadge[] {

    const badges: ProductBadge[] = [];

    if (this.hasPromotion(product)) {

        badges.push({

            label: `-${this.reduction(product)}%`,

            className: 'bg-red-500 text-white'

        });

    }

    if (this.isNew(product)) {

        badges.push({

            label: 'Nouveau',

            className: 'bg-emerald-500 text-white'

        });

    }

    if (this.isFeatured(product)) {

        badges.push({

            label: 'Vedette',

            className: 'bg-amber-500 text-white'

        });

    }

    return badges;

}

}