import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FormDating from "./components/FormDating/FormDating";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Departments from "./components/Departments/Departments";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Facilities from "./components/Facilities/Facilities";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <FormDating />
        <SectionTitle text="departamentos médicos" navigation={true} />
        <Departments />
        <Banner />
        <SectionTitle text="lo último del blog" />
        <Blog />
        <SectionTitle text="nuestras instalaciones ofrecen" />
        <Facilities />
      </main>
    </div>
  );
}

export default App;
