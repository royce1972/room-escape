import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Vault1 from './components/Vault1';
import Vault2 from './components/Vault2';
import Vault3 from './components/Vault3';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/Vault1">
      <button style={
        {
          width: "100px",
          height: "50px",
          top: "100px",
          left: "100px",
        }
      }>Vault-1</button>
      </Link>
      <Link to="/Vault2">
      <button style={
        {
          width: "100px",
          height: "50px",
          top: "100px",
          left: "200px",
        }
      }>Vault-2</button>
      </Link>
      <Link to="/Vault3">
      <button style={
        {
          width: "100px",
          height: "50px",
          top: "100px",
          left: "200px",
        }
      }>Vault-3</button>
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
