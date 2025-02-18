import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UseFindUser(userName) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      if (userName) {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3001/user');
          const data = await response.json();
  
          const existingUser = data.find(user => user.name === userName);
          if (existingUser) {
            navigate(`/stage${existingUser.stage}`);
            setUser(existingUser);
          } else {
            const maxId = data.reduce((max, user) => (user.id > max ? user.id : max), 0);
            const newUserData = { id: maxId + 1, name: userName, stage: 1 };
  
            const postResponse = await fetch('http://localhost:3001/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newUserData)
            });
  
            if (!postResponse.ok) {
              throw new Error('Network response was not ok');
            }
  
            setUser(newUserData);
            navigate('/stage1');
          }
        };
  
        fetchData().catch(error => console.error('Fetch error:', error));
      }
    }, [userName, navigate]);
  
    return user;
}