import React from 'react'
import './list.css'
import { FaFacebook ,FaTwitter,FaLinkedin,FaInstagramSquare} from "react-icons/fa";

const list = () => {
  return (
   <div className="list">
      <div className="sb_footer section_padding">

        <div className="sb_footer-links">
        <div className="sb_footer-links_div">
          <h4>Trợ giúp</h4>
              <a href="#">
                <p>Trung tâm trợ giúp</p>
              </a>
               <a href="#">
                <p>Câu hỏi thường gặp</p>
              </a>
               <a href="#">
                <p>Chính sách bảo mật</p>
              </a>
               <a href="#">
                <p>Chính sách về Cookie</p>
              </a>
               <a href="#">
                <p>Điều khoản sử dụng</p>
              </a>
               <a href="#">
                <p>Đạo luật dịch vụ số</p>
              </a>
       
              
        </div>
        <div className="sb_footer-links_div">
          <h4>Công ty</h4>
              <a href="#">
                <p>Về chúng tôi</p>
              </a>
               <a href="#">
                <p>Tuyển dụng</p>
              </a>
               <a href="#">
                <p>Báo chí</p>
              </a>
                <a href="#">
                <p>Nhật kí mạng</p>
              </a>
                <a href="#">
                <p>PointsMAX</p>
              </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>Điểm du lịch</h4>
              <a href="#">
                <p>Quốc giá</p>
              </a>
               <a href="#">
                <p>Mọi chặng bay</p>
              </a>
         
        </div>
           <div className="sb_footer-links_div">
          <h4>Đối tác của chúng tôi</h4>
              <a href="#">
                <p>Cổng thông tin đối tác YCS</p>
              </a>
               <a href="#">
                <p>Partner Hub</p>
              </a>
               <a href="#">
                <p>Quảng cáp trên Agoda</p>
              </a>
                <a href="#">
                <p>Đối tác liên kết</p>
              </a>
                <a href="#">
                <p>Tư liệu API Agoda</p>
              </a>
        </div>
         <div className="sb_footer-links_div">
          <h4>Tải ứng dụng</h4>
              <a href="#">
                <p>Ứng dụng IOS</p>
              </a>
               <a href="#">
                <p>Ứng dụng Android</p>
              </a>
              
        </div>
      </div>

    </div>
    </div>
  )
}

export default list
