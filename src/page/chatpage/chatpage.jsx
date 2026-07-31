import ChatHeader from "../../components/chat/chatheader";
import ChatMessages from "../../components/chat/chatmessage";
import ChatInput from "../../components/chat/chatinput";

function ChatPage() {
  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}

export default ChatPage;