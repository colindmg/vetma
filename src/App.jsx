import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col z-50 sticky top-0" id="scrollBelowHeader">
        <div className="flex justify-center items-center bg-white h-[560px]">
          <h1 className="text-3xl font-bold">Hello World</h1>
        </div>
        <div className="flex justify-center items-center bg-red-500 h-[560px]"></div>
      </div>
    </>
  );
}

export default App;
