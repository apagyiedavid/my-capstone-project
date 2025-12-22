import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ThreeCards from "./pages/ThreeCards";
import CommentCard from "./components/CommentCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ThreeCards />
      <CommentCard />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
