import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HorizontalSection } from "./sections/HorizontalSection";
import { Loader } from "./sections/Loader";
import { PhotosSection } from "./sections/PhotosSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isLoading
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onAnimationEnd={() => setIsLoading(false)} />}
      <NavBar />
      <Header />
      <HorizontalSection />
      <PhotosSection />
      <Footer />
    </>
  );
}

export default App;
