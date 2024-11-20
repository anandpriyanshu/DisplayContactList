import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    ; (async () => {
      try {
        const response = await fetch('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }

    })()
  }, []);

  return (

    <>
      <div className="container">
        <h1>Contact List</h1>
        <table className="contact-list">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td><img src={contact.avatar} alt="Avatar" /></td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.company}</td>
                <td>{contact.job_title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
