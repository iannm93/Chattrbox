import { useState } from 'react';
import axios from 'axios';

const projectID = '14530bfe-8c29-4e09-8c9a-dc073116e156';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // store our authroization params/headers ina const to use in get request
    const authorization = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
        // use axios to perform get request with const as params
      await axios.get('https://api.chatengine.io/chats', { headers: authorization });
    // set username and password in local storage for later logins
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">chattrbox</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>log in</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};





export default Modal;