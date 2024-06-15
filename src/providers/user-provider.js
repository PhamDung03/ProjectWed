import { createContext, useContext, useRef, useState } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isShop, setIsShop] = useState(false);
  const [product, setProduct] = useState([]);
  const preData = useRef();
  return (
    <UserContext.Provider
      value={{ user, setUser, isShop, setIsShop, product, setProduct, preData }}
    >
      {children}
    </UserContext.Provider>
  );
};
