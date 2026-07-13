function Login({ username, setUsername, setLoggedIn }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>💬 Chat App</h1>

        <p className="subtitle">
          Real-time Chat Application using React & Socket.IO
        </p>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={() => {
            if (username.trim()) setLoggedIn(true);
          }}
        >
          Join Chat
        </button>
      </div>
    </div>
  );
}

export default Login;