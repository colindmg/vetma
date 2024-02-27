import { Header } from "./sections/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col z-50 sticky top-0" id="scrollBelowHeader">
        <div className="h-screen bg-white">TEST</div>
      </div>
    </>
  );
}

export default App;
