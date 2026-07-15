import { createContext } from "react";

export const orderContext = createContext();

const OrderProvider = ({ children }) => {
  return <orderContext.Provider value={{}}>{children}</orderContext.Provider>;
};
export default OrderProvider;
