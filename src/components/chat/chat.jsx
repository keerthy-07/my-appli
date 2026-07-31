import { useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import ChatHeader from "./chatheader";
import ChatMessage from "./chatmessage";
import ChatInput from "./chatinput";

function Chat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("session_id"),
  );

  // Page load
  useEffect(() => {
    if (sessionId) {
      loadMessages(sessionId);
    }
  }, [sessionId]);

 
  const createVisitor = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/chat/visitor/", {
        name,
        email,
      });

      localStorage.setItem("session_id", res.data.session_id);
      setSessionId(res.data.session_id);

      alert("Chat Started ✅");
    } catch (err) {
      console.log(err.response?.data);
    }
  };


  const loadMessages = async (id) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/chat/messages/?session_id=${id}`,
      );

      setMessages(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const sendMessage = async () => {
    if (!message) return;

    try {
      await axios.post("http://127.0.0.1:8000/chat/send/", {
        session_id: sessionId,
        message: message,
      });

      setMessage("");

      loadMessages(sessionId);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  useEffect(() => {
  if (!sessionId) return;

  const interval = setInterval(() => {
    loadMessages(sessionId);
  }, 2000);

  return () => clearInterval(interval);
}, [sessionId]);

  return (
    <div style={{ padding: "20px", maxWidth: "450px", margin: "auto" }}>
      <h2>Chat with Keerthy</h2>

      {!sessionId && (
        <>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <button onClick={createVisitor}>Start Chat</button>

          <hr />
        </>
      )}

      {sessionId && (
        <>
          <ChatHeader />

          <ChatMessage messages={messages} />

          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </>
      )}
    </div>
  );
}

export default Chat;
