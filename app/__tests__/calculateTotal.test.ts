import { calculateTotalFee } from '@/utils';
import { cartType } from '@/utils/cartContext';
import { describe, it, expect } from 'vitest';

const cart: cartType[] = [
  {
    product: {
      id: 1,
      title: "Sweatpants",
      description: "Soft and comfortable sweatpants in stylish shades. They are perfect for lounging with their cozy stretch fabric that offers just the right amount of warmth. Enjoy the ultimate relaxation experience!",
      featuredImage: {
        id: "idshjdbsuwq7qew",
        url: "https://via.placeholder.com/150",
      },
      price: {
        amount: "10.0",
        currencyCode: "CAD",
      },
    },
    quantity: 2,
  },
  {
    product: {
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
    quantity: 3,
  },
  {
    product: {
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
    quantity: 1,
  },
];

describe('calculateTotalFee', () => {
  // Verify the total cost of the basket is calculated correctly
  it('calculates the total fee correctly for multiple items', () => {
    const totalFee = calculateTotalFee(cart);
    expect(totalFee).toBe("55.0");
  });

  // Verify total cost return 0 when basket is empty
  it('returns 0 for an empty basket', () => {
    const totalFee = calculateTotalFee([]);
    expect(totalFee).toBe("0.0");
  });
});