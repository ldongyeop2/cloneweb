import React, { Component } from 'react';
import "../css/Quickmenu.css";
import quickimg1 from "../imgs/free.png"
import quickimg2 from "../imgs/hand-shake.png"
import quickimg3 from "../imgs/presentation.png"
import quickimg4 from "../imgs/hand.png"

class Quickmenu extends Component{
  render() {
    return(
      <div className="quickMenu">
        <ul>
          <li><a href="javascript"><img src={quickimg1} alt="free"></img><p>무료 체험 <br></br>신청</p></a></li>
          <li><a href="javascript"><img src={quickimg4} alt="free"></img><p>유료 학습 <br></br>신청</p></a></li>
          <li><a href="javascript"><img src={quickimg2} alt="free"></img><p>AI홈런<br></br>제휴ㆍ단체문의</p></a></li>
          <li><a href="javascript"><img src={quickimg3} alt="free"></img><p>AI홈런 선생님 모집</p></a></li>
        </ul>
      </div>
    );
  }
}

export default Quickmenu;