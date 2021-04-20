import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import MyNavbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <MyNavbar />
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
