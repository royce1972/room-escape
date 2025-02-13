import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Vault1 from './components/Vault1';
import Vault2 from './components/Vault2';
import Vault3 from './components/Vault3';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/user');
      const data = await response.json();
      setUserData(data);

      // prompt를 통해 사용자 이름을 입력받습니다.
      const userName = prompt('Enter your name.');
      if (userName) {
        // 입력한 이름이 기존 데이터에 존재하는지 확인합니다.
        const existingUser = data.find(user => user.name === userName);
        if (existingUser) {
          alert('You are already subscribed!');
        } else {
          // 기존 데이터 중 가장 큰 id 값을 찾습니다.
          const maxId = data.reduce((max, user) => (user.id > max ? user.id : max), 0);
          const newUserData = { id: maxId + 1, name: userName, stage: 1 }; // 새로운 id 값 설정

          const postResponse = await fetch('http://localhost:3001/user', { // POST 요청 사용
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserData)
          });

          if (!postResponse.ok) {
            throw new Error('Network response was not ok');
          }

          const updatedData = await postResponse.json();
          setNewUser(updatedData);
          alert('Oh, You\'re new user!')
        }
      }
    };

    fetchData().catch(error => console.error('Fetch error:', error));
  }, []); 
  
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/Vault1">
      <div style={
        {
          width: "100px",
          height: "50px",
          alignContent: "center",
          padding: "15px",
          border: "3px solid black",
          backgroundColor: "red",
          // top: "100px",
          // left: "100px",
        }
      }>Vault-1</div>
      </Link>
      <Link to="/Vault2">
      <div style={
        {
          width: "100px",
          height: "50px",
          alignContent: "center",
          padding: "15px",
          border: "3px solid black",
          backgroundColor: "red",
          // top: "100px",
          // left: "200px",
        }
      }>Vault-2</div>
      </Link>
      <Link to="/Vault3">
      <div style={
        {
          width: "100px",
          height: "50px",
          alignContent: "center",
          padding: "15px",
          border: "3px solid black",
          backgroundColor: "red",
          // top: "100px",
          // left: "200px",
        }
      }>Vault-3</div>
      </Link>
      <Routes>
        <Route path='/Vault1' element={<Vault1 first={1} second={2} third={3} fourth={4} />} />
        <Route path='/Vault2' element={<Vault2 passWd={"123"} />} />
        <Route path='/Vault3' element={<Vault3 passWd={"0123"} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
