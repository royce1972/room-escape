import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Vault1 from './components/Vault1';
import Vault2 from './components/Vault2';
import Vault3 from './components/Vault3';
import Home from './components/Home'

function App() {
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
        <Route path="/" element={<Home />} />
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
