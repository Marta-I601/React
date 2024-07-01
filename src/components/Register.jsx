import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register () {
  const [name, setName] = useState();// ovde u zagradi je bilo "" ali ja sam ih izbrisala msm da ne trebaju
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err=> console.log(err))
  }


  return (
    <div className="bg-black-gradient h-screen flex items-center justify-center">
      <div className="bg-blue-gradient w-72 h-156 rounded-lg p-8 box-shadow text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Registruj se sada!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}  
        />

        <label>Email:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} required 
        />

        <label>Sifra:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} required 
        />

          <button
            type="submit"
            className="bg-blue-gradient text-white rounded-full py-2 px-4 hover:bg-white hover:text-black transition duration-300"
          >Registruj se!
        </button>
      </form>
      <div className="mt-4 text-center">
          <Link to="/login">Prijavi se ovde!</Link>
        </div>
    </div>
    </div>
  );
};

export default Register;


/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate(); 

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + jwtToken,
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        const errorText = await response.text();
        console.error(`Error details: ${errorText}`);
       }

      const data = await response.json();

      if (data.message === 'exist') {
        alert('User already exists');
      } else if (data.message === 'success') {
        console.log('Registration success');
        navigate('/');
      }
    } catch (error) {
      alert('Error occurred while registering');
      console.error(error);
    }
  };

  return (
    <div className="bg-black-gradient h-screen flex items-center justify-center">
      <div className="bg-blue-gradient w-72 h-156 rounded-lg p-8 box-shadow text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={submit}>
        <label>Username:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} required 
        />

        <label>Email:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} required 
        />

        <label>Sifra:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} required 
        />

          <button
            type="submit"
            className="bg-blue-gradient text-white rounded-full py-2 px-4 hover:bg-white hover:text-black transition duration-300"
          >Register
        </button>
      </form>
      <div className="mt-4 text-center">
          <Link to="/login">Prijavi se ovde!</Link>
        </div>
    </div>
    </div>
  );
};

export default Register;
*/
