/* eslint-disable no-unused-vars */
export enum ActionTypes {
  getCategories = "GET_CATEGORIES",
  getProducts = "GET_PRODUCTS",
  filterProducts = "FILTER_PRODUCTS",
  addOrRemoveProductToCart = "ADD_ROMOVE_TO_CART",
  incrementCartProduct = "INCREMENT_CART_PRODUCT",
  decrementCartProduct = "DECREMENT_CART_PRODUCT",
  updateCartProductPrice = "UPDATE_CART_PRODUCT_PRICE",
  updatePaymentType = "UPDATE_PAYMENT_TYPE",
  updateParcel = "UPDATE_PARCEL",
  clearCart = "CLEAR_CART",
  resetOrder = "RESET_ORDER",
}

export type Product = {
  id: string;
  name: string;
  price: number;
  slug: string;
  quantity: number;
  sellPrice: number;
  qtd: number;
  checked?: boolean;
};
export type Cart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sellPrice: number;
  qtd: number;
  slug: string;
  tax?: number;
  total?: number;
  profit?: number;
};

export type Category = {
  id: string;
  name: string;
};

interface State {
  products?: Product[];
  categories?: Category[];
  cart: Cart[];
  isLoading: boolean;
  paymentType: string;
  parcel: number;
}

export const initialState: State = {
  products: [],
  categories: [],
  cart: [],
  isLoading: false,
  paymentType: "Dinheiro",
  parcel: 1,
};

type Action =
  | { type: ActionTypes.resetOrder; payload?: string }
  | { type: ActionTypes.updatePaymentType; payload?: string }
  | { type: ActionTypes.updateParcel; payload: number }
  | { type: ActionTypes.getCategories; payload: Category[] | undefined }
  | { type: ActionTypes.getProducts; payload: Product[] | undefined }
  | { type: ActionTypes.filterProducts; payload: Product[] }
  | { type: ActionTypes.addOrRemoveProductToCart; payload: Cart[] }
  | { type: ActionTypes.incrementCartProduct; payload: Product[] }
  | { type: ActionTypes.decrementCartProduct; payload: Product[] }
  | { type: ActionTypes.updateCartProductPrice; payload: Cart[] }
  | { type: ActionTypes.clearCart; payload: Cart[] };

export const orderReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "RESET_ORDER":
      return {
        ...state,
        initialState,
      };
    case "UPDATE_PARCEL": {
      return { ...state, parcel: payload };
    }
    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: payload,
      };
    }
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "ADD_ROMOVE_TO_CART":
      return {
        ...state,
        cart: payload,
      };
    case "INCREMENT_CART_PRODUCT":
      return {
        ...state,
        cart: payload,
      };
    case "DECREMENT_CART_PRODUCT":
      return {
        ...state,
        cart: payload,
      };
    case "UPDATE_CART_PRODUCT_PRICE":
      return {
        ...state,
        cart: payload,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};
