import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register  from "./pages/Register";
import ThreeCards from "./pages/ThreeCards";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <ThreeCards />
        <Card />
        <Register />
      {/* your Routes go here */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
