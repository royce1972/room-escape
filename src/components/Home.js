import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseFindUser from '../hooks/useFindUser';
import Header from '../components/Header';

function Home() {
  const [userName, setUserName] = useState(null);
  UseFindUser(userName);

  const handleClick = () => {
    const name = prompt('Enter your name.');
    if (name) {
      setUserName(name);
    }
  };

  return (
    <div>
       <Header />
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
      <button onClick={handleClick} style={
        {
          position: "relative",
          top: "60px",
          left: "-400px",
        }
      }>Check</button>
    </div>
  );
}

export default Home;