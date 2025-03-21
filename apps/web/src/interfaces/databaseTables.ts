interface Product {
  id: number;
  image: string;
  name: string;
  stock: number;
  location: string;
  price: number;
  rating: number;
  dateCreated: Date;
  updated: Date;
  // Fill in the rest according to database
}

export type { Product };
