function Message({ msg, username }) {
  const ownMessage = msg.author === username;

  return (
    <div className={ownMessage ? "my-message" : "other-message"}>
      <div className="bubble">
        <strong>{msg.author}</strong>

        <p>{msg.message}</p>

        <small>{msg.time}</small>
      </div>
    </div>
  );
}

export default Message;