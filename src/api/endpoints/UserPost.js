import React from 'react'

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

function handleSubmit(event){
  // preventDefault para não recarregar a página
    event.preventDefault();
    fetch('https://dpgsapi.origamid.dev/json/api/user',{
      method:'POST',
      headers:{
        'Content-Type':'aplciation/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then(response => {
      console.log(response);
      return response.json();
      
    }).then(json => {
      console.log(json);
      return json;
    });
}

  return (
    // onSubmit = evento de quando envio formulário
    <form onSubmit={handleSubmit}>
       <input 
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        />
        <input 
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        />
        <input 
        type="text"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
    </form>
  )
}

export default UserPost;