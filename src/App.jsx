import { Header } from "./sections/Header";
import { Merchandising } from "./sections/Merchandising";
import { BookSection } from "./sections/BookSection";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col z-50 sticky top-0" id="scrollBelowHeader">
        <Merchandising />
        <div className="bg-gray-300 h-[1px]"></div>
        <BookSection />
      </div>
    </>
  );
}

export default App;
