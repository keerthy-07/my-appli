
import "./chat.css";

function ChatHeader() {
  return (
    <div className="chat-header">

      <div className="profile">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
        />

        <div>
          <h3>Keerthy Vasan</h3>
          <p className="online">🟢 Online</p>
        </div>
      </div>

      <div className="icons">
        <span>📞</span>
        <span>📹</span>
        <span>⋮</span>
      </div>

    </div>
  );
}

export default ChatHeader;