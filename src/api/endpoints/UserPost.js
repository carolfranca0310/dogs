import React from 'react'

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
    <div>
       <input 
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}/>
    </div>
  )
}

export default UserPost;