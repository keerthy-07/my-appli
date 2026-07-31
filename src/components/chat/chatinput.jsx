import "./chat.css";

function ChatInput({ message, setMessage, sendMessage }) {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>➤</button>
    </div>
  );
}

export default ChatInput;
