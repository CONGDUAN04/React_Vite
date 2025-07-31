import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  });
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAppLoading, setIsAppLoading }}
    >
      {props.children}
      {/* <RouterProvider router = {router}}/> */}
    </AuthContext.Provider>
  );
};
