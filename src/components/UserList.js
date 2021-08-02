import axios from 'axios';
import './UserList.css';
import { useEffect, useState } from 'react';
function UserList() {
    const [users, setUsers] = useState('')
    
    const availableUsers = users ? users.map((user) => 
      <div key="{user.id}"> {user.name} </div>
    ) : ''
    
   useEffect(() => {
     axios({
        method: 'get',
        url: 'http://localhost:3000/users'
      }).then(function (response) {
        console.log(response.data, 'response');
        setUsers(response.data)
        
      }).catch(function (e) {
        console.log(e, "user");
      })
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <div> {availableUsers} </div>
      </header>
    </div>
  );
}

export default UserList;
