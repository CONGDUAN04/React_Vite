import { Button, Col, Form, Input, Typography, Card, message } from "antd";
import { loginUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(">>>check value:", values);
    const res = await loginUserAPI(values.email, values.password);
    if (res.data) {
      message.success("Đăng nhập thành công");
      navigate("/books");
    } else {
      message.error(
        "Đăng nhập thất bại, vui lòng kiểm tra lại thông tin đăng nhập"
      );
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        title={
          <Typography.Title
            level={2}
            style={{ textAlign: "center", margin: 0 }}
          >
            Đăng Nhập
          </Typography.Title>
        }
        bordered={false}
        style={{
          width: "100%",
          maxWidth: 500,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password placeholder="••••••" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Đăng Nhập
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center", marginTop: 10 }}>
            <span>Bạn chưa có tài khoản? </span>
            <a
              onClick={() => navigate("/register")}
              style={{ color: "#1890ff" }}
            >
              Đăng Ký
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default LoginPage;
