// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="home">
      <h1>Users</h1>
      <div className="user-cards">
        {users.map(user => (
          <Link key={user.id} to={`/user/${user.id}`} className="user-card">
            <div className="card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
