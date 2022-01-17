import './homepage.css';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import background from '../../image/background-paynet.jpg';
import paynet1 from '../../image/paynet-1.png';
import paynet2 from '../../image/paynet-2.png';


export default function HomePage() {
  return (
    <div className="mb-5">
      <Container>
          <h1 className="title-head text-center">Giải pháp thanh toán đa dạng</h1>
          <p className="text-center desc-head">Phù hợp với nhiều loại hình doanh nghiệp</p>
          <div className="img-bg" style = {{ backgroundImage : `url(${background})`}}>
            <img src={background}/>
          </div>
          <h1 className="title-head text-center have-border">Các giải pháp thanh toán PaynetVN</h1>
          <Row>
            <Col lg={6}>
              <div className="wrap-gptt">
              <img src={paynet1}/>
              <h2 className="title-text">Thanh toán tại quầy (QR Code)</h2>
              <p className="desc-text">Dành cho doanh nghiệp có cửa hàng bán hàng/dịch vụ offline (Khách hàng scan QR của Doanh nghiệp).</p>
              <p className="desc">Mỗi doanh nghiệp sau khi đăng ký sẽ được PaynetVN cung cấp một mã QR động/tĩnh để đặt tại quầy thanh toán. Khách hàng sẽ dùng Ví PaynetVN của mình quét mã QR của Doanh nghiệp tại quầy, sau đó nhập số tiền cần thanh toán tương ứng để hoàn tất giao dịch.</p>
              </div> 
            </Col>
            <Col lg={6}>
            <div className="wrap-gptt">
              <img src={paynet2}/>
              <h2 className="title-text">Cổng thanh toán PaynetVN</h2>
              <p className="desc-text">Dành cho doanh nghiệp có Web hoặc Mobile web bán hàng/dịch vụ trực tuyến và hỗ trợ thanh toán bằng thẻ.</p>
              <p className="desc">Sau khi khách hàng lựa chọn sản phẩm/ dịch vụ tại website của Doanh nghiệp và chọn thanh toán bằng thẻ ATM hoặc quốc tế. Hệ thống sẽ hỗ trợ khách hàng nhập thông tin thẻ an toàn, bảo mật trên PaynetVN Gateway và thực hiện thanh toán, hoàn tất giao dịch.</p>
              </div> 
            </Col>
            <Col lg={12} className="wrap-dktkkd">
              <h1 className="title-head text-center">Đăng ký tài khoản kinh doanh - Trải nghiệm giải pháp</h1>
              <p className="text-center">Đăng ký ngay hôm nay để sử dụng các giải pháp thanh toán nhanh chóng<br/>
                  và tiện lợi nhất mà ZaloPay cung cấp cho doanh nghiệp của bạn</p>
              <div className="wrap-btn text-center">
                <a href="http://202.134.18.27:2004/" className="btn btn-dkn">Đăng ký ngay</a>
                <Link className="btn btn-hddk" to="/register#top">Hướng dẫn đăng ký</Link>
              </div>
            </Col>
          </Row>
      </Container>
          
    </div>
  );
}
