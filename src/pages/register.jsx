import {
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Typography,
  Card,
} from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(">>>check value:", values);
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Đăng ký thành công",
        description: "Tài khoản đã được tạo!",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Lỗi đăng ký",
        description: JSON.stringify(res.message),
      });
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
            Đăng ký tài khoản
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
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Nguyễn Văn A" />
          </Form.Item>

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

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern: /^\d{10,11}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input placeholder="0123456789" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Đăng ký
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center", marginTop: 10 }}>
            <span>Bạn đã có tài khoản? </span>
            <a onClick={() => navigate("/login")} style={{ color: "#1890ff" }}>
              Đăng nhập
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
