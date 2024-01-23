import { useEffect, useRef } from "react";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    document.addEventListener("mousemove", moveGradient);
    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [appRef]);

  return (
    <div className="app" id="app" ref={appRef} data-scroll-container>
      <div className="justify-center flex align-center text-white">V3TMA</div>
    </div>
  );
}

export default App;
