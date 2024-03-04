import { NavBar } from "./components/NavBar";
import { Header } from "./sections/Header";
import { HorizontalSection } from "./sections/HorizontalSection";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <HorizontalSection />
      <div className="relative z-[100] w-full h-screen bg-red-500"></div>
    </div>
  );
}

export default App;
