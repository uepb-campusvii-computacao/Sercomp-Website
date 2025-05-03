export interface Product {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartPopupProps {
  products: Product[];
  handleBuyClick: () => void;
}