import { NavBar } from "./components/NavBar";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HorizontalSection } from "./sections/HorizontalSection";
import { PhotosSection } from "./sections/PhotosSection";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <HorizontalSection />
      <PhotosSection />
      <Footer />
    </div>
  );
}

export default App;
