import { useEffect, useRef } from "react";
import Message from "./Message";

function Chat({
  username,
  messages,
  message,
  setMessage,
  sendMessage,
  setLoggedIn,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">

      <div className="header">
        <div className="header-content">
          <div>
            <h2>💬 Chat App</h2>
            <p>Welcome, {username}</p>
          </div>

          <button
            className="logout-btn"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message
            key={index}
            msg={msg}
            username={username}
          />
        ))}

        <div ref={bottomRef}></div>
      </div>

      <div className="input-area">
        <input
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}

export default Chat;