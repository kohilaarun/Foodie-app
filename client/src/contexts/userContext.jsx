import { createContext } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};
export default UserProvider;
