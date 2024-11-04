import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Items from "./components/Items";
import SectionTitle from "./components/SectionTitle";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Items></Items>
      <BookingForm></BookingForm>
      <Testimonial></Testimonial>
      <Footer></Footer>

      {/* <SectionTitle></SectionTitle> */}
    </>
  );
}

export default App;
