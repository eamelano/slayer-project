import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/navbar/SiteNav";

function App() {
  return (
    <div className="Global d-flex min-vh-100">
      <Routes>
        <Route path="/*" element={<SiteNav />} />
      </Routes>
    </div>
  );
}

export default App;
