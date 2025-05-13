import PropTypes from "prop-types";
import { createContext, useEffect, useState, ReactNode } from "react";
import { Product } from "../types/CartPopupProps";

const MarketContext = createContext<{
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  reset: () => void;
}>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  reset: () => {},
});

export const MarketProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]); // Tipando o estado como Product[]

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProduct = (product: Product) => {
    const existingProductIndex = products.findIndex(
      (p) => p.productId === product.productId
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity++;
      setProducts(updatedProducts);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((p) =>
          p.productId === productId
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const reset = () => {
    setProducts([]);
    localStorage.removeItem("products");
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <MarketContext.Provider
      value={{ products, addProduct, removeProduct, reset }}
    >
      {children}
    </MarketContext.Provider>
  );
};

MarketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MarketContext;