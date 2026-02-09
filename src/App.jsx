import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0a0c10] min-h-screen text-white">
      <Loader loading={loading} progress={progress} />
      {!loading && <Home />}
    </div>
  );
}

export default App;
