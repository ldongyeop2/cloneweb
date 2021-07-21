import React, { Component } from 'react';
import img1 from '../imgs/img1.PNG';
import img2 from '../imgs/img2.PNG';
import '../css/Nav.css';


class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-logoBar">
            <img src={img2} alt="advertage" className="img1" />
            <h1><img src={img1} alt="logo" className="img2" /></h1>
            <ul className="nav-loginList">
              <li><a href="/javascript">로그인</a></li>
              <li><a href="/javascript">회원가입</a></li>
              <li><a href="/javascript">🔔이벤트</a></li>
              <li><a href="/javascript">👍고객감동센터</a></li>
              <li><a href="/javascript">홈런 찬스</a></li>
            </ul>
          </div>
        </div>
        <div className="nav-menuWrap">
          <div className="nav-container">
            <div className="nav-menuBar">
              <ul>
                <li>
                  <h2><a herf="javascript/">AI홈런 소개</a></h2>
                </li>
                <li>
                  <h2><a herf="javascript/">학습자료실</a></h2>
                </li>
                <li>
                  <h2><a herf="javascript/">AI생활기록부</a></h2>
                </li>
                <li>
                  <h2><a herf="javascript/">AI홈런 소식</a></h2>
                </li>
                <li>
                  <h2><a herf="javascript/">AI홈런 체험관</a></h2>
                </li>
                <li>
                  <h2><a herf="javascript/">AI홈런 신청</a></h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="hideMenu">
            <div className="nav-container">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;