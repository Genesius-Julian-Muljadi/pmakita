import noImages from "@/assets/noImage";
import { Product } from "@/interfaces/databaseTables";

const ProductSamples: Array<Product> = [
  {
    id: 1,
    image: noImages[1],
    nameID: "Sample_1",
    stock: 99,
    maxStock: 100,
    popular: true,
    fresh: true,
    unitID: "1 kg",
    location: "Jakarta",
    price: 12345,
    rating: 2,
    dateCreated: new Date("2023-01-11T09:18:14.000Z"),
    updated: new Date("2025-01-31T09:18:14.000Z"),
  },
  {
    id: 2,
    image: noImages[1],
    nameID: "Sample_2",
    stock: 94,
    maxStock: 100,
    popular: true,
    fresh: true,
    discount: 20,
    unitID: "1 kg",
    location: "Surabaya",
    price: 132874,
    rating: 3,
    dateCreated: new Date("2024-02-12T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 3,
    image: noImages[1],
    nameID: "Sample_3",
    stock: 42,
    maxStock: 100,
    popular: true,
    fresh: true,
    discount: 20,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 7777777,
    rating: 4,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 4,
    image: noImages[1],
    nameID: "Sample_4",
    stock: 57,
    maxStock: 100,
    popular: true,
    fresh: true,
    unitID: "1 kg / utuh",
    unitEN: "1 kg / whole",
    location: "literally anywhere else",
    price: 332000,
    rating: 4,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 5,
    image: noImages[1],
    nameID: "Sample_5",
    stock: 3,
    maxStock: 20,
    popular: false,
    fresh: true,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 771277,
    rating: 4,
    dateCreated: new Date("2024-07-17T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 6,
    image: noImages[1],
    nameID: "Sample_6",
    stock: 21,
    maxStock: 30,
    popular: true,
    fresh: false,
    discount: 30,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 777000,
    rating: 4,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 7,
    image: noImages[1],
    nameID: "Sample_7",
    stock: 42,
    maxStock: 100,
    popular: false,
    fresh: true,
    discount: 20,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 11000,
    rating: 3,
    dateCreated: new Date("2024-07-17T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 8,
    image: noImages[1],
    nameID: "Sample_8",
    stock: 421,
    maxStock: 500,
    popular: true,
    fresh: false,
    discount: 20,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 2000,
    rating: 1,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 9,
    image: noImages[1],
    nameID: "Sample_9",
    stock: 212,
    maxStock: 250,
    popular: true,
    fresh: true,
    discount: 30,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 79999,
    rating: 5,
    dateCreated: new Date("2024-07-17T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 10,
    image: noImages[1],
    nameID: "Sample_10",
    stock: 231,
    maxStock: 400,
    popular: true,
    fresh: true,
    discount: 10,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 412000,
    rating: 1,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 11,
    image: noImages[1],
    nameID: "Sample_11",
    stock: 27,
    maxStock: 50,
    popular: true,
    fresh: true,
    unitID: "1 tray",
    location: "literally anywhere else",
    price: 26000,
    rating: 2,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
  {
    id: 12,
    image: noImages[1],
    nameID: "Sample_12",
    stock: 2,
    maxStock: 50,
    popular: true,
    fresh: true,
    discount: 5,
    unitID: "1 kg",
    location: "literally anywhere else",
    price: 4000,
    rating: 4,
    dateCreated: new Date("2024-03-13T09:18:14.000Z"),
    updated: new Date("2025-02-07T09:18:14.000Z"),
  },
];

export { ProductSamples };
