import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainMessage } from "./components/main-message";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MessageList } from "./components/message-list";
import { AddMessage } from "./components/add-message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainMessage />} />
          <Route path="/messages" element={<MessageList />} />
          <Route path="/add-message" element={<AddMessage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
