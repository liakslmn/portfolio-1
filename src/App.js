import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Brands from "./components/Brands/Brands";
import Info from "./components/Info/Info";
import DisplayProduct from "./components/DisplayProduct/DisplayProduct";
import Testimonial from "./components/Testimonial/Testimonial";
import Showcase from "./components/Showcase/Showcase";
import Crew from "./components/Crew/Crew";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <DisplayProduct />
      <Showcase />
      <Brands />
      <Info />
      <Testimonial />
      <Crew />
      <Footer />
    </div>
  );
}

export default App;
