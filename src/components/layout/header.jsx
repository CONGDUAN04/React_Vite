import { Link, useNavigate } from "react-router-dom";
import { Menu, message, notification } from "antd";
import { useContext, useState } from "react";
import {
  UsergroupAddOutlined,
  AuditOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const { user, setUser, logout } = useContext(AuthContext); // Assuming `logout` is available

  const onClick = (e) => {
    setCurrent(e.key);
    if (e.key === "logout") {
      logout(); // Gọi hàm logout nếu người dùng click
    }
  };
  const handLogout = async () => {
    const res = await logoutAPI();
    if (res.data) {
      // clear user data and token
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Đăng xuất thành công");
      //redirect to home
      navigate("/");
    }
  };

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <AuditOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
            style: { marginLeft: "auto" },
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "welcome",
            style: { marginLeft: "auto", cursor: "default" },
          },
          {
            label: <span onClick={() => handLogout()}> Đăng xuất</span>,
            key: "logout",
          },
        ]
      : []),
  ];

  return (
    <div
      style={{
        background: "#f5f5f5",
        borderBottom: "1px solid #e0e0e0",
        padding: "0 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1890ff",
            }}
          >
            📚 BookStore
          </span>
        </Link>

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            background: "transparent",
            color: "#333",
            fontWeight: 500,
            fontSize: "16px",
            borderBottom: "none",
            flex: 1,
            padding: "0 10px",
          }}
          theme="light"
        />
      </div>
    </div>
  );
};

export default Header;
