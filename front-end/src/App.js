import "./App.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import CardHolder from "./components/CardHolder/CardHolder";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <CardHolder />
      <Footer />
    </div>
  );
}

export default App;
