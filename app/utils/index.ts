import { cartType } from "./cartContext";

const getCollectionId = (id: string) => {
  const split = id.split("/");
  const newId = split[split.length - 1];
  return newId;
};

const calculateTotalFee = (cart: cartType[]): string => {
  return `${cart?.reduce((total, i) => {
    return total + (Number(i.product.price.amount) * i.quantity);
  }, 0)}.0`;
}

export { getCollectionId, calculateTotalFee }