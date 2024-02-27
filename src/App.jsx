import { Header } from "./sections/Header";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="flex flex-col z-50 sticky top-0" id="scrollBelowHeader">
        <div className="h-screen bg-white">TEST</div>
      </div>
    </>
  );
}

export default App;
