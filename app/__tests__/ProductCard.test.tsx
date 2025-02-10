import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "@/utils/cartContext";
import ProductCard from "@/components/ProductCard";

const mockProduct = {
  id: 1,
  title: "Sweatpants",
  description:
    "Soft and comfortable sweatpants in stylish shades. They are perfect for lounging with their cozy stretch fabric that offers just the right amount of warmth. Enjoy the ultimate relaxation experience!",
  featuredImage: {
    id: "idshjdbsuwq7qew",
    url: "https://via.placeholder.com/150",
  },
  price: {
    amount: "35.0",
    currencyCode: "CAD",
  },
};

describe("ProductCard", () => {
  // Verify the ProductCard is rendered properly
  it("renders product details", () => {
    render(
      <Router>
        <CartContextProvider>
          <ProductCard product={mockProduct} />
        </CartContextProvider>
      </Router>
    );

    expect(screen.getByAltText("product-image")).toBeInTheDocument();
    expect(screen.getByText("Sweatpants")).toBeInTheDocument();
  });

  // Verify product are added and removed from basket successfully
  it("adds and removes product from basket", () => {
    const { getByText } = render(
      <Router>
        <CartContextProvider>
          <ProductCard product={mockProduct} />
        </CartContextProvider>
      </Router>
    );

    const button = getByText(/Add to Basket/i);
    fireEvent.click(button);
    expect(button.textContent).toBe("Remove from Basket");

    fireEvent.click(button);
    expect(button.textContent).toBe("Add to Basket");
  });
});
