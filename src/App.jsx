import { Header } from "./sections/Header";
import { Merchandising } from "./sections/Merchandising";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col z-50 sticky top-0" id="scrollBelowHeader">
        <Merchandising />
        <div className="flex justify-center items-center bg-gray-100 h-[560px]"></div>
      </div>
    </>
  );
}

export default App;
