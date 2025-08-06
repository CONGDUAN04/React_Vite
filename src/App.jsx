import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";
const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext); // Assuming `logout` is available
  useEffect(() => {
    // Fetch user information when the app loads
    fetchUserInfo();
  }, []);
  // const delay = (milSeconds) => {
  //   return new Promise((resolve, reject) => setTimeout(resolve, milSeconds));
  // };
  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    //await delay(3000); // Simulate loading delay
    if (res.data) {
      //success
      setUser(res.data.user);
    }
    setIsAppLoading(false); // Set loading to false after fetching user info
  };
  return (
    <>
      {isAppLoading == true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
