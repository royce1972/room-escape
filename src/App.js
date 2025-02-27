import { BrowserRouter as Router, Navigate, Route, Routes,} from 'react-router-dom';
import Vault1 from './components/Vault1';
import Vault2 from './components/Vault2';
import Vault3 from './components/Vault3';
import Home from './components/Home'
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Vault1' element={<Vault1 first={1} second={2} third={3} fourth={4} />} />
        <Route path='/Vault2' element={<Vault2 passWd={"123"} />} />
        <Route path='/Vault3' element={<Vault3 passWd={"0123"} />} />
        <Route path='/Stage1' element={<Stage1 />} />
        <Route path='/Stage2' element={<Stage2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </Router>
  );
}


export default App;
