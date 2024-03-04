import { NavBar } from "./components/NavBar";
import { Header } from "./sections/Header";
import { HorizontalSection } from "./sections/HorizontalSection";

function App() {
  return (
    <div className="overflow-clip">
      <NavBar />
      <Header />
      <HorizontalSection />
    </div>
  );
}

export default App;
