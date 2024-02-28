import { Header } from "./sections/Header";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div
        className="flex flex-col z-50 sticky top-0 h-screen bg-white"
        id="scrollBelowHeader"
      >
        TEST
      </div>
    </div>
  );
}

export default App;
