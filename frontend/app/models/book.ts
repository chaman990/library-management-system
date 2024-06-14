export interface Book {
  id?: string | number;
  name: string;
  author: string;
  available: boolean;
  price: number | string;
  image: string;
  description: string;
}
