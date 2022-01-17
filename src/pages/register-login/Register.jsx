import './register.css';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import imgtab1 from '../../image/paynet-1.png';
import imgtab2 from '../../image/paynet-2.png';
import image1 from "../../image/docs-img.png";
import image2 from "../../image/fees-img.png";
import image3 from "../../image/process-img.png";

export default function Register() {
    return (
      <div>
          <Container>
            <Row >
              <Col lg={12} className="wrap-tab">
                  <Tabs defaultActiveKey="kdoff" id="tab-controller" className="mb-3">
                    <Tab eventKey="kdoff" title="Kinh doanh Offline">
                      <Row className="ttdk">
                        <Col lg={6}>
                          <h3 className="title-tab">Doanh nghiệp kinh doanh Offline</h3>
                          <p className="desc-tab">Áp dụng cho tất cả Doanh nghiệp có cửa hàng bán hàng/dịch vụ offline với địa chỉ kinh doanh cụ thể: siêu thị, cửa hàng tiện lợi, quán ăn, cà phê, cửa hàng thời trang, trang sức, v.v…<br/>Sau khi đăng ký tài khoản kinh doanh với PaynetVN, Doanh nghiệp sẽ có thể nhanh chóng sử dụng/ tích hợp các giải pháp thanh toán bằng QR tĩnh/ QR động/ QuickPay để tiến hành thanh toán giao dịch tại quầy.</p>
                          <a className="btn btn-dkkd" href="http://202.134.18.27:2004/">Đăng ký tài khoản kinh doanh</a>
                        </Col>
                        <Col lg={6}>
                          <img src={imgtab1}/>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="kdon" title="Kinh doanh Online">
                      <Row className="ttdk">
                        <Col lg={6}>
                          <h3 className="title-tab">Doanh nghiệp kinh doanh Online</h3>
                          <p className="desc-tab">Áp dụng cho tất cả Doanh nghiệp có Website/ Mobile Web/ Ứng dụng di động (Mobile App) để bán hàng/ dịch vụ trực tuyến.<br/>Sau khi đăng ký tài khoản kinh doanh với ZaloPay, Doanh nghiệp sẽ có thể nhanh chóng sử dụng/ tích hợp các giải pháp thanh toán web-to-app, mobile web-to-app, app-to-app, cổng PaynetVN để tiến hành thanh toán tại website/ mobile web/ app của Doanh nghiệp.</p>
                          <a className="btn btn-dkkd" href="http://202.134.18.27:2004/">Đăng ký tài khoản kinh doanh</a>
                        </Col>
                        <Col lg={6}>
                          <img src={imgtab2}/>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
              </Col>
            </Row>
            <Row className="ttdk mb-5 mt-5">
              <Col lg={6}>
                <img src={image1}/>
              </Col>
              <Col lg={6}>
                <h3 className="title-cs">Tài liệu cần thiết khi đăng ký</h3>
                <p>1. Giấy chứng nhận đăng ký doanh nghiệp</p>
                <p>2. Giấy phép ngành nghề kinh doanh có điều kiện</p>
                <p>3. Giấy đăng ký chi nhánh, địa điểm kinh doanh của các cửa hàng</p>
                <p>4. Chứng minh nhân dân, Căn cước công dân của người đại diện doanh nghiệp, hộ kinh doanh, cá nhân kinh doanh</p>
                <p>5. Hình ảnh chụp địa điểm kinh doanh, hình ảnh chụp cá nhân kinh doanh, đại diện hộ kinh doanh kinh doanh</p>
                <p>6. Chứng từ chứng minh Đơn vị chấp nhận thanh toán sở hữu website/ ứng dụng</p>
                <p>7. Chứng từ chứng minh đã thông báo, đăng ký với Bộ công Thương</p>
                <p>8. Giấy ủy quyền của người ký</p>
              </Col>
            </Row>
            <Row className="ttdk mb-5 mt-5">
              <Col lg={6}>
                <h3 className="title-cs">Chi phí đăng ký</h3>
                <p>Không thu bất kỳ khoản phí nào trong quá trình Doanh nghiệp đăng ký tài khoản và tích hợp giải pháp thanh toán PaynetVN.</p>
                <p>Bắt đầu thu phí giao dịch theo mức phí quy định khi Doanh nghiệp tiến hành giao dịch, mức phí theo quy định của PaynetVN.</p>
                <p>Mức phí và chu kỳ đối soát dựa trên ngành nghề tương ứng của doanh nghiệp.</p>
              </Col>
              <Col lg={6}>
                <img src={image2}/>
              </Col>
            </Row>
            <Row className="ttdk mb-5 mt-5">
              <Col lg={6}>
                <img src={image3}/>
              </Col>
              <Col lg={6}>
                <h3 className="title-cs">Quy trình đăng ký</h3>
                <h6><span>BƯỚC 1</span> - ĐĂNG KÝ TÀI KHOẢN</h6>
                <p>Đăng ký tài khoản kinh doanh với các thông tin doanh nghiệp cơ bản. Đồng ý với điều khoản hợp đồng PaynetVN thể hiện khi đăng ký tài khoản.</p>
                <h6><span>BƯỚC 2</span> - CẬP NHẬT CHỨNG TỪ</h6>
                <p>Tải lên và cập nhật các chứng từ cần thiết: giấy chứng nhận đăng ký doanh nghiệp, mã số thuế, v.v...</p>
                <h6><span>BƯỚC 3</span> - IN QR / NGHIỆM THU</h6>
                <ul>
                  <li>Với giải pháp QR Tĩnh: Sau khi đăng ký thành công, hệ thống sẽ kiểm tra tính hợp lý của hồ sơ đăng ký và cung cấp QR Tĩnh sau 2 giờ làm việc (giờ hành chính).</li>
                  <li>Với giải pháp QR Động hoặc QuickPay: Doanh nghiệp cần tiến hành tích hợp kỹ thuật, PaynetVN sẽ hỗ trợ nghiệm thu sau khi tích hợp thành công.</li>
                  <li>Sau khi in QR/Nghiệm thu, Doanh nghiệp có thể triển khai thanh toán bằng nguồn Ví (trong khi chờ thẩm định).</li>
                </ul>
                <h6><span>BƯỚC 4</span> - PAYNETVN THẨM ĐỊNH</h6>
                <p>Doanh nghiệp in và ký bản Hợp đồng sử dụng dịch vụ, sau đó gửi bản cứng về cho PaynetVN trong vòng 5 ngày làm việc. Sau khi nhận hợp đồng, bộ phận pháp chế của PaynetVN sẽ tiến hành thẩm định hồ sơ doanh nghiệp trong 2 ngày làm việc. Nếu hồ sơ đủ điều kiện, doanh nghiệp sẽ được chấp nhận thanh toán bằng tất cả các kênh thanh toán và hạn mức thanh toán chung của PaynetVN.</p>
              </Col>
            </Row>
            <div className="wrap-dknhn justify-content-center">
            <h1 className="title-head text-center">Đăng ký ngay hôm nay, tiện lợi cho tương lai</h1>
            <a href="http://202.134.18.27:2004/" className="btn btn-dknhn text-center">Đăng ký ngay tài khoản kinh doanh</a>
            </div>
          </Container>
      </div>
    );
  }
  