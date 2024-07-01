import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login () {
  const [email, setEmail] = useState('');// ovde u zagradi je bilo "" ali ja sam ih izbrisala msm da ne trebaju
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {email, password}) //ovde je stavio umesto register login ali nama radi ovako
    .then(result => {
      console.log(result)
      if (result.data === "Uspesno ste se ulogovali!"){
        navigate('/Home.jsx') //ovde upisem rutu koju ce da otvara
      }
    })
    .catch(err=> console.log(err))
  }


  return (
    <div className="bg-black-gradient h-screen flex items-center justify-center">
      <div className="bg-blue-gradient w-72 h-156 rounded-lg p-8 box-shadow text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Prijavi se sada!</h1>
      <form onSubmit={handleSubmit}>

        <label>Email:</label>
        <input 
        className="text-lg mb-2 p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}  
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
          >Prijavi se!
        </button>
      </form>
      <div className="mt-4 text-center">
          <Link to="/register">Registruj se ovde!</Link>
        </div>
    </div>
    </div>
  );
};

export default Login;




/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate();  

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + jwtToken,
        },
        body: JSON.stringify({
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

      if (data.success) {  // Promenjeno sa exist na success
        console.log('Login success');
        setJwtToken(data.token);
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Error occurred while logging in');
      console.error(error);
    }
  };

  return (
    <div className="login bg-black-gradient h-screen flex items-center justify-center">
      <div className="bg-blue-gradient w-72 h-96 rounded-lg p-8 box-shadow text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={submit}>
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
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/register">Novi ste? Registruj se!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/