interface Product {
  id: number;
  image: string;
  nameID: string;
  nameEN?: string;
  stock: number;
  maxStock: number;
  popular?: boolean;
  fresh?: boolean;
  discount?: number;
  unitID: string;
  unitEN?: string;
  location: string;
  price: number;
  rating: number;
  dateCreated: Date;
  updated: Date;
  // Fill in the rest according to database
}

export type { Product };
