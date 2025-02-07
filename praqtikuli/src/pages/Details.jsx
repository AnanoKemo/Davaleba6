// src/pages/Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the API
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]); // Run again if `id` changes

  if (!user) return <div>Loading...</div>;

  return (
    <div className="details">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}

export default Details;
