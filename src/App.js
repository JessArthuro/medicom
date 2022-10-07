import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FormDating from "./components/FormDating/FormDating";
import Departments from "./components/Departments/Departments";
import Banner from "./components/Banner/Banner";
import Doctors from "./components/Doctors/Doctors";
import Facilities from "./components/Facilities/Facilities";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FormDating />
        <Departments />
        <Banner />
        <Doctors />
        <Blog />
        <Facilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
