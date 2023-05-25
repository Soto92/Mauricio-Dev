import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Stacks from "./components/Stacks";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="Body-container">
        <AboutMe />
        <Stacks />
      </body>
    </div>
  );
}

export default App;
