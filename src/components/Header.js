import React,  { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render(){
    return(
        <header>
          <div className="header-lists">
            <ul className="header-frontList">
              <li><a href="/javascript">아이스크림 AI홈런 초등</a></li>
              <li><a href="/javascript">아이스크림 AI홈런 중등</a></li>
              <li><a href="/javascript">하이스토어</a></li>
              <li><a href="/javascript">스마트 학습센터</a></li>
            </ul>
            <ul className="header-behindList">
              <li><a href="/javascript">홈런좋은부모 학부모 앱</a></li>
              <li><a href="/javascript">하이클래스</a></li>
            </ul>
          </div>
        </header>
    );
  }
}

export default Header;