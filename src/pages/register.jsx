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
import { useNavigate } from "react-router-dom";
import { registerUserAPI } from "../services/api.service";

const { Title, Link } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
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
          description: res.message || "Vui lòng thử lại sau.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Lỗi kết nối",
        description: error.message || "Đã xảy ra lỗi khi đăng ký.",
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
        padding: 24,
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card
          title={
            <Title level={2} style={{ textAlign: "center", margin: 0 }}>
              Đăng ký tài khoản
            </Title>
          }
          bordered={false}
          style={{
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
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
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ borderRadius: 6 }}
              >
                Đăng ký
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: 10 }}>
              <span>Bạn đã có tài khoản? </span>
              <Link onClick={() => navigate("/login")}>Đăng nhập</Link>
            </div>
          </Form>
        </Card>
      </Col>
    </div>
  );
};

export default RegisterPage;
