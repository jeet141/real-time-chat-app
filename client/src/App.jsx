import { useEffect, useState } from "react";
import io from "socket.io-client";

import Login from "./components/Login";
import Chat from "./components/Chat";

import "./App.css";

const socket = io("http://localhost:5000");

function App() {

  const [username, setUsername] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket.on("receive_message", (data) => {

      setMessages((prev) => [...prev, data]);

    });

    return () => socket.off("receive_message");

  }, []);

  const sendMessage = () => {

    if (!message.trim()) return;

    const msg = {

      author: username,

      message,

      time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      }),
    };

    socket.emit("send_message", msg);

    setMessage("");

  };

  return loggedIn ? (
    <Chat
      username={username}
      messages={messages}
      message={message}
      setMessage={setMessage}
      sendMessage={sendMessage}
      setLoggedIn={setLoggedIn}
    />
  ) : (
    <Login
      username={username}
      setUsername={setUsername}
      setLoggedIn={setLoggedIn}
    />
  );
}

export default App;