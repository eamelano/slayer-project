import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/navbar/SiteNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SiteNav />} />
      </Routes>
      <Container fluid className="d-flex min-vh-100 bg-dark"></Container>
    </>
  );
}

export default App;
