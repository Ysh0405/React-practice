import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '오늘의 노래';
  let [제목, a] = useState(['제목', '장르', '코드']);
  let [좋아요, 변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...제목];
        copy[0] = '맛있다';
        a(제목);
      }}>b</button>

      <h4>{post}</h4>
      <div className='list'>
        <h4>{제목[0]} <span onClick={() => { 변경(좋아요 + 1) }}>❤️</span>{좋아요}</h4>
        <p>2월 12일 발매</p>
      </div>
      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>2월 12일 발매</p>
      </div>
      <div className='list'>
        <h4>{제목[2]}</h4>
        <p>2월 12일 발매</p>
      </div>
    </div>
  );
}

export default App;
