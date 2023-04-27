import React, { useState } from 'react';
import AddUser from './compos/Users/AddUser';
import UsersList from './compos/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
