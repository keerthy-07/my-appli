import Login from "./page/login/login";
import Home from "./page/home/home";
import { Route, Routes } from "react-router-dom";
// import Chat from "./components/chat/chat";
// import AdminChat from "./page/adminchat";
// import ChatPage from "./page/chatpage/chatpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/chat" element={<Chat />} />
        <Route path="/adminchat" element={<AdminChat />} />
        <Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
