import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/64/64?random=1',
    name: '홍길동',
    birthday: '020504',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://picsum.photos/64/64?random=2',
    name: '나훈아',
    birthday: '051214',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'https://picsum.photos/64/64?random=3',
    name: '안난아',
    birthday: '010408',
    gender: '여자',
    job: '디자이너'
  }
];

class App extends Component {
  render() {
    return (
      <Paper sx={{ width: '100%', overflowX: 'auto', mt: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
