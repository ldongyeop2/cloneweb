import React, { Component } from 'react';
import '../css/Main.css';
import Contents from './Contents';
import Cimg1 from "../imgs/Cimg1.jpg";
import Cimg2 from "../imgs/Cimg2.jpg";
import Cimg3 from "../imgs/Cimg3.jpg";
import Cimg4 from "../imgs/Cimg4.jpg";
import Cimg5 from "../imgs/Cimg5.jpg";
import Cimg6 from "../imgs/Cimg6.jpg";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-container">
          <div className="main-title"><h3>에듀테크</h3></div>
        </div>
        <div className="main-subTitle">
          <ul className="main-subTitle-list">
            <li className="select"><a href="/javascript">3D 콘텐츠</a></li>
            <li><a href="/javascript">VR(가상현실)</a></li>
            <li><a href="/javascript">AR(증강현실)</a></li>
            <li><a href="/javascript">코딩교육</a></li>
            <li><a href="/javascript">미래직업</a></li>
          </ul>
        </div>
        <div className="main-contents">
          <div className="main-contents-length"><p>전체: 6건</p></div>
          <div className="main-contents-list">
            <ul>
              <li><Contents img={Cimg1} name="개미" info="개미의 몸의 구조, 수명,개미의 종류를 분류하는 방법을 쉽게 소개"></Contents></li>
              <li><Contents img={Cimg2} name="고추" info="우리나라에서 많이 사용되는 음식의 재료로 고추가 익어가는 과정을 생동감있게 표현"></Contents></li>
              <li><Contents img={Cimg3} name="달팽이" info="주위에서 쉽게 볼 수 있는 동물 중 하나로 달팽이를 이루고 있는 주요 기관을 설명"></Contents></li>
              <li><Contents img={Cimg4} name="한옥" info="우리나라 전통 가옥인 한옥의 구조를 공간별로 나누어 자세하게 설명"></Contents></li>
              <li><Contents img={Cimg5} name="전기장" info="전자석의 원리를 전지를 활용하여 실제 실험을 하는 느낌을 전달"></Contents></li>
              <li><Contents img={Cimg6} name="화산" info="화산의 생성원리를 단계별로 나누어 자세하게 안내"></Contents></li>
            </ul>
          </div>
          <div className="main-contents-PageMove">
            <ul>
              <li><a href="javascript/">⏪</a></li>
              <li><a href="javascript/">◀</a></li>
              <li><a href="javascript/">1</a></li>
              <li><a href="javascript/">2</a></li>
              <li><a href="javascript/">▶</a></li>
              <li><a href="javascript/">⏩</a></li>
            </ul>
          </div>
          <div className="main-contents-footer">
            <input type="text" placeholder="검색어 입력"/>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;