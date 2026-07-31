import { useEffect, useState } from "react";
import axios from "axios";

function AdminChat() {
  const [visitors, setVisitors] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    loadVisitors();
  }, []);

  const loadVisitors = async () => {
    const res = await axios.get("http://127.0.0.1:8000/chat/visitors/");
    setVisitors(res.data);
  };

  const openChat = async (visitor) => {
    setSelectedVisitor(visitor);

    const res = await axios.get(
      `http://127.0.0.1:8000/chat/messages/${visitor.id}/`,
    );

    setMessages(res.data);
  };

  const sendReply = async () => {
    if (!selectedVisitor) return;

    await axios.post("http://127.0.0.1:8000/chat/reply/", {
      visitor_id: selectedVisitor.id,
      message: reply,
    });

    setReply("");

    openChat(selectedVisitor);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Panel */}
      <div
        style={{
          width: "320px",
          borderRight: "1px solid #ddd",
          overflowY: "auto",
        }}
      >
        <h2 style={{ padding: "15px" }}>Chats</h2>
        {visitors.map((v) => (
          <div key={v.id} onClick={() => openChat(v)} className="visitor-card">
            <h4>{v.name}</h4>
            <p>{v.email}</p>
          </div>
        ))}
      </div>

      <div className="chat-window">
        <h2>{selectedVisitor ? selectedVisitor.name : "Select Visitor"}</h2>

        <div>
          {messages.map((msg) => (
            <div key={msg.id}>
              <b>{msg.sender}</b>

              <p>{msg.message}</p>
            </div>
          ))}

          <div className="reply-box">
            <input
              type="text"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type reply..."
            />

            <button onClick={sendReply}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminChat;
