import { useState } from 'react';
import UseFindUser from '../hooks/useFindUser';

function Home() {
  const [userName, setUserName] = useState(null);
  const user = UseFindUser(userName);

  const handleClick = () => {
    const name = prompt('Enter your name.');
    if (name) {
      setUserName(name);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Check</button>
    </div>
  );
}

export default Home;