import { useEffect, useRef } from "react";
import "./chat.css";

function ChatMessage({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-body">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            msg.sender === "visitor" ? "message visitor" : "message admin"
          }
        >
          <p>{msg.message}</p>

          <span className="time">
            {new Date(msg.created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="time">
            {new Date(msg.created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}

            {msg.sender === "visitor" && (
              <>
                {!msg.is_delivered && " ✓"}
                {msg.is_delivered && !msg.is_read && " ✓✓"}
                {msg.is_read && <span className="blue"> ✓✓</span>}
              </>
            )}
          </span>
        </div>
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatMessage;
