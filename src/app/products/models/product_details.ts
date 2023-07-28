export interface ProductDetails {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  amount?: number;
  rating: {
    rate: number;
    count: number;
  };
}
