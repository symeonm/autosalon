import { ChatButton } from "../Buttons/ChatButton/ChatButton";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
