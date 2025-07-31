import { Button, Form, Input, Card, message, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { loginUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/context/auth.context";
import Typography from "antd/es/typography";

const { Title, Link } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      form.setFieldsValue({
        email: rememberedEmail,
        password: rememberedPassword,
        remember: true,
      });
    }
  }, [form]);
  const onFinish = ({ email, password, remember }) => {
    loginUserAPI(email, password)
      .then((res) => {
        if (res.data) {
          message.success("Đăng nhập thành công");
          localStorage.setItem("access_token", res.data.access_token);

          if (remember) {
            localStorage.setItem("rememberedEmail", email);
            localStorage.setItem("rememberedPassword", password);
          } else {
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }

          setUser(res.data.user);
          navigate("/books");
        } else {
          message.error("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.");
        }
      })
      .catch(() => {
        message.error("Đã xảy ra lỗi khi đăng nhập.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>
        <Card
          style={{
            borderRadius: 16,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            border: "none",
          }}
        >
          <Title style={{ textAlign: "center", marginBottom: 32 }}>
            Đăng Nhập
          </Title>

          <Form form={form} layout="vertical" onFinish={onFinish} size="large">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#1890ff" }} />}
                placeholder="example@email.com"
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu tối thiểu 6 ký tự!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: "#1890ff" }} />}
                placeholder="••••••••"
                onKeyDown={(e) => e.key === "Enter" && form.submit()}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Ghi nhớ tôi</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  borderRadius: 8,
                  background: "#1677ff",
                  boxShadow: "0 2px 8px rgba(22, 119, 255, 0.2)",
                }}
              >
                Đăng Nhập
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              <span>Bạn chưa có tài khoản? </span>
              <Link onClick={() => navigate("/register")}>Đăng ký ngay</Link>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
