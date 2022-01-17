import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import "./Header.css";
import logo from "../../image/logo.png";

export default function Header() {
  return (
    <div className="header-top" id="top">
    <Container>
      <Row>
        <Col lg={3}>
        <div className="topLeft">
          <img 
            className="logo" 
            src={logo}
            alt="logo"
            width="110px"
          />
        </div>
        </Col>
        <Col lg={6}>
          <div className="topCenter">
            <ul className="nav justify-content-center topList">
              <li className="nav-item topListItem">
                <Link className="link active nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item topListItem">
              <Link className="link nav-link" to="/register">
                  Hướng dẫn đăng ký
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={3}>
          <div className="topRight">
            <a className="btn btn-login" href="http://202.134.18.27:2004/">
                Đăng nhập
            </a>
            <a className="btn btn-register" href="http://202.134.18.27:2004/">
                Đăng ký
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}