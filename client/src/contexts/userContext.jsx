import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isPublicPath = ["/login", "/signup"].includes(pathname);

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    navigate("/");
  };
  const logout = () => {
    setUser();
    setToken();
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUser = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/me`,
        { headers: { Authorization: token } },
      );
      setUser(res.data.user);
    } catch (err) {
      console.log("error occured", err);
      if (err.status === 401) {
        logout();
      } else {
        alert(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (token && !user) {
      // auto login
      getUser();
    } else if (!token && !isPublicPath) {
      // route protection
      navigate("/login");
    } else if (token && isPublicPath) {
      navigate("/");
    }
  }, [token, user, isPublicPath]);

  return (
    <userContext.Provider
      value={{ user, setUser, token, setToken, login, logout }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserProvider;
