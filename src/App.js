import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import React, {Component} from 'react';

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/200/300?random=1',
  'name': '홍길동',
  'birthday': '020504',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'image': 'https://picsum.photos/200/300?random=2',
  'name': '나훈아',
  'birthday': '020504',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 3,
  'image': 'https://picsum.photos/200/300?random=3',
  'name': '안난아',
  'birthday': '020504',
  'gender': '남자',
  'job': '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div> 
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job} 
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
