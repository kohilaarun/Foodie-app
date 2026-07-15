import { createContext } from "react";

export const dishContext = createContext();

const DishProvider = ({ children }) => {
  return <dishContext.Provider value={{}}>{children}</dishContext.Provider>;
};
export default DishProvider;
