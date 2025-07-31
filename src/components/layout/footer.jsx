import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>📚 BookStore</h3>
          <p>
            BookStore là hệ thống bán sách trực tuyến với hàng ngàn đầu sách
            phong phú, phục vụ mọi nhu cầu học tập và giải trí.
          </p>
        </div>

        <div className="footer-column">
          <h4>Liên kết</h4>
          <ul>
            <li>
              <a href="/about">Giới thiệu</a>
            </li>
            <li>
              <a href="/terms">Điều khoản</a>
            </li>
            <li>
              <a href="/privacy">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>
              <MailOutlined style={{ marginRight: 8 }} /> support@bookstore.vn
            </li>
            <li>
              <PhoneOutlined style={{ marginRight: 8 }} /> 0123 456 789
            </li>
            <li>Thứ 2 - Thứ 7: 8:00 - 17:00</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Kết nối với chúng tôi</h4>
          <div className="social-icons">
            <a href="#">
              <FacebookOutlined />
            </a>
            <a href="#">
              <TwitterOutlined />
            </a>
            <a href="#">
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookStore. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
