import React,  { Component } from 'react';
import '../css/Footer.css';
import img3 from '../imgs/img3.PNG';
import app1 from '../imgs/good_parents_app.png';
import app2 from '../imgs/hi_class_app.png';


class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="footer-topList">
          <div className="footer-container">
            <div className="imgWrap">
              <img src={img3} alt="logo"/>
            </div>
            <div className="footer-customerCenter">
              <div className="customerCenterTitle">
                <p>AI홈런 고객감동센터</p>
              </div>
              <div className="customerCenterWrap">
                <div className="customerCenterInfo">
                  <div className="centerNumber">
                    <p>체험 및 학습 문의</p>
                    <strong>1544-0910</strong>
                  </div>
                  <div className="centerInfo">
                    <ul>
                      <li>[평 일] 오전 10시 ~ 오후 10시</li>
                      <li>[토요일] 오전 10시 ~ 오후 5시</li>
                      <li>일요일/공휴일 : 휴무</li>
                    </ul>
                  </div>
                </div>
                <div className="customerCenterInfo">
                  <div className="centerNumber">
                    <p>학습기 및 A/S 문의</p>
                    <strong>1522-0910</strong>
                  </div>
                  <div className="centerInfo">
                    <ul>
                      <li>[평 일] 오후 1시 ~ 오후 10시</li>
                      <li>[토요일] 1544-0910 으로 문의</li>
                      <li>일요일/공휴일 : 휴무</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-link">
              <div className="squareTopList">
                <ul>
                  <li>
                    <div className="frontSquare">
                      <a href="#javascript/">
                        <img src={app1} alt="app"></img>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="behindSquare">
                      <a href="#javascript/">
                        <img src={app2} alt="app"></img>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="squareBottomList">
                <ul>
                  <li><a href="/javascript"></a></li>
                  <li><a href="/javascript"></a></li>
                  <li><a href="/javascript"></a></li>
                  <li><a href="/javascript"></a></li>
                  <li><a href="/javascript"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middleList">
          <div className="footer-container">
            <div className="footer-middleList-frontList">
              <ul>
                <li><a href="/javascript">회사소개</a></li>
                <li><a href="/javascript">이용약관</a></li>
                <li><a href="/javascript">개인정보처리방침</a></li>
                <li><a href="/javascript">사이트맵</a></li>
                <li><a href="/javascript">AI홈런 선생님</a></li>
                <li><a href="/javascript">공지사항</a></li>
              </ul>
            </div>
            <div className="familySite">
              <select name="sites">
                <option value="">Family site</option>
                <option value="a">아이스크림 에듀</option>
                <option value="b">아이스크림 AI 홈런 초등</option>
                <option value="c">아이스크림 AI 홈런 중등</option>
                <option value="d">아이스크림</option>
                <option value="e">아이스크림 몰</option>
                <option value="f">아이스크림 원격연수원</option>
                <option value="g">아이스크림 미디어</option>
                <option value="h">홈런 프렌즈</option>
                <option value="i">하이스토어</option>
                <option value="j">스마트학습센터</option>
                <option value="k">시공테크</option>
                <option value="l">시공문화</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer-bottomList">
          <div className="footer-container">
            <div className="footer-bottomText">
              <ul>
                <li>주소 : 서울특별시 강남구 테헤란로88길 15 (대치동944-23) ㈜ 아이스크림 에듀</li>
                <li>대표 : 조용상</li>
              </ul>
              <ul>
                <li>사업자 등록 번호 : 120-87-97004</li>
                <li>통신판매신고번호 : 제2013-서울강남-01379호</li>
                <li>전자출판물인증번호 : I410-ECN-0199-2013-001-002535352</li>
              </ul>
              <ul>
                <li>고객감동센터 : 1544-0910</li>
                <li>기술지원센터 : 1522-0910</li>
                <li>FAX : (02)3448-5262</li>
                <li>E-mail : homemaster@i-screamedu.co.kr</li>
              </ul>
            </div>
            <p>아이스크림 AI홈런은 한국콘텐츠진흥원에서 주관하는 '뉴미더어 연계 콘텐츠 지원사업' 대상으로 선정되어 사업비의 일부를 지원받았습니다.</p>
            <p>ⓒi-Scream edu Corporation all rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;