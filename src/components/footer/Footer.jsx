import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../image/logo.png";

export default function Footer() {
  return (
    <div className="footer-bot mb-5">
        <Container className="border-top mb-5"></Container>
    <Container>
      <Row>
        <Col lg={3}>
        <div className="botLeft">
          <img 
            className="logo" 
            src={logo}
            alt="logo"
            width="110"
          />
        </div>
        </Col>
        <Col lg={6}>
          <div className="botCenter">
            <p className="font-bold">© 2021 - Bản quyền của PaynetVN</p>
            <p className="desc-footer">CÔNG TY CỔ PHẦN MẠNG THANH TOÁN PAYNET VIỆT NAM<br/>Địa chỉ: 233 Quan Hoa, phường Quan Hoa, quận Cầu Giấy, thành phố Hà Nội.<br/>Giấy chứng nhận đăng ký kinh doanh số: 0108232599, đăng ký thay đổi lần thứ 6, ngày 10 tháng 11 năm 2021 do Sở kế hoạch và đầu tư Thành phố Hà Nội cấp.
            </p> 
          </div>
        </Col>
        <Col lg={3}>
          <div className="botRight">
              <h3 className="title-footer">Hỗ trợ khách hàng</h3>
            <ul className="botList">
              <li className="botListItem">
                <a href="tel:0346108989" className="link-contact">Hotline: 034.610.8989</a>
              </li>
              <li className="botListItem">
                <a href="mailto:paynet@info.com.vn" className="link-contact">Mail: paynet@info.com.vn </a>
              </li>
              <li className="botListItem">
                <a href="paynetvn.com.vn" className="link-contact">Website: paynetvn.com.vn </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}