import { createContext, useContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isShop, setIsShop] = useState(false);
  const [product, setProduct] = useState([]);
  const preData = useRef();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const login = (userData) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem("isLoggedIn");
    if (storedLoggedInState) {
      setIsLoggedIn(JSON.parse(storedLoggedInState));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isShop,
        setIsShop,
        product,
        setProduct,
        preData,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
