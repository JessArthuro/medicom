import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FormDating from "./components/FormDating/FormDating";
import Departments from "./components/Departments/Departments";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Facilities from "./components/Facilities/Facilities";
import Doctors from "./components/Doctors/Doctors";

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
        <Facilities />
        <Blog />
      </main>
    </div>
  );
}

export default App;
