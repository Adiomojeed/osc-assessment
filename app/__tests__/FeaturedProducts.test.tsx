import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Product } from "@/api/api";
import { describe, expect, it, vi } from "vitest";
import FeaturedProducts from "@/components/home/FeaturedProducts";

// ProductCard is mocked here to avoid lazy-loading issues
vi.mock("@/components/ProductCard", () => ({
  default: ({ product }: { product: Product }) => (
    <div data-testid="product-card">{product.title}</div>
  ),
}));

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Sweatpants",
    description:
      "Soft and comfortable sweatpants in stylish shades. They are perfect for lounging with their cozy stretch fabric that offers just the right amount of warmth. Enjoy the ultimate relaxation experience!",
    featuredImage: {
      id: "idshjdbsuwq7qew",
      url: "https://via.placeholder.com/150",
    },
    price: {
      amount: "10.0",
      currencyCode: "CAD",
    },
  },
  {
    id: 2,
    title: "T-shirt",
    description: "A comfortable and stylish T-shirt.",
    featuredImage: {
      id: "idshjdbsuwq7qew",
      url: "https://via.placeholder.com/150",
    },
    price: {
      amount: "5.0",
      currencyCode: "CAD",
    },
  },
  {
    id: 3,
    title: "Jacket",
    description: "A warm and cozy jacket.",
    featuredImage: {
      id: "idshjdbsuwq7qew",
      url: "https://via.placeholder.com/150",
    },
    price: {
      amount: "20.0",
      currencyCode: "CAD",
    },
  },
];

describe("FeaturedProducts Component", () => {
  // Verify the FeaturedProducts component is rendered successfully
  it("renders the Featured Products section", async () => {
    render(
      <MemoryRouter>
        <FeaturedProducts products={mockProducts} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();
    });
  });

  // Verify all products are listed
  it("renders a list of all products", () => {
    render(
      <MemoryRouter>
        <FeaturedProducts products={mockProducts} />
      </MemoryRouter>
    );

    expect(screen.getByText("Sweatpants")).toBeInTheDocument();
    expect(screen.getByText("Jacket")).toBeInTheDocument();
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(mockProducts.length);
  });

  // Verify the View all product button link works fine
  it("renders the 'View All Products' button with correct link", () => {
    render(
      <MemoryRouter>
        <FeaturedProducts products={mockProducts} />
      </MemoryRouter>
    );

    expect(screen.getByText("Sweatpants")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /go to products page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/products");
  });
});
