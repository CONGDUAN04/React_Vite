import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { use } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>; // Render the child components if user is authenticated
  }

  //   return <Navigate to="/login" replace />; // Redirect to login if user is not authenticated
  return (
    <Result
      status="403"
      title="Unauthorized Access"
      subTitle={"Bạn cần đăng nhập để truy cập trang này"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back To Home Page</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;
