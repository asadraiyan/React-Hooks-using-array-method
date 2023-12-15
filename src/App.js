import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import CryptoGallery from "./components/Crypto/CryptoGallery";
// import Counter1 from "./components/CustomHook/Counter1";
// import Counter2 from "./components/CustomHook/Counter2";
// import StopWatch from "./components/StopWatch";
// import CompA from './components/CompA';
// import Reactlifecyclemethod from './Reactlifecyclemethod';
// import AgeCalculator from "./components/AgeCalculator";
// import CodingChallenge from "./components/CodingChallenge";
// import Debouncing from "./components/Debouncing";
// import LifecycleMethod from "./components/LifecycleMethod";
// import PasswordGen from "./components/PasswordGen";
// import Table from "./components/Table";
// import Counter from "./components/Counter";
// import Inputdisplay from "./components/Inputdisplay";
// import Todofy from "./components/Todofy";
// import QuoteGen from "./components/QuoteGen"
// import UseCallback from "./components/UseCallback";
// import Usememohook from "./components/Usememohook";
// import Userefhook from "./components/Userefhook";
// import Home from "./components/Home";
// import Search from "./components/Search";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import HooksUseState from './components/HooksUseState';
// import './components/Miniproject.css'
// import Miniproject from './components/Miniproject';
// import Practise from './components/Practise';
// import UsestateObject from './components/UsestateObject';
// import Assignment from "./components/Assignment"
// import LandingPage from "./LandingPage"
// import InputForm from "./components/InputForm";
// import NoteApp from "./components/NoteApp"
// import Axios from "./components/Axios";
// import UseContext from "./components/ContextHook/UseContext";
// import UseEffecthook from "./components/UseEffecthook";
// import MovieCard from "./components/NetflixMovies/MovieCard";
// import ImageSlider from "./components/ImageSlider/ImageSlider";

import AppData from "./components/CRUD/AppData";
import Create from "./components/CRUD/Create";

// const name = "Asad Raiyan";
// const role = "Web Developer";
const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <div>
          <Routes>
            {/* <Route
              exact
              path="/"
              element={<Home name="Asad Raiyan" role="Web Developer" />}
            /> */}
            <Route exact path="/" element={<AppData />} />
            <Route exact path="/create" element={<Create />} />
            {/* <Route exact path="/Contact" element={<Contact />} /> */}
            {/* <Practise img = "https://picsum.photos/400"/> */}
            {/* <Miniproject/> */}
            {/* <HooksUseState/> */}
            {/* <UsestateObject /> */}
            {/* <CompA /> */}
            {/* <Reactlifecyclemethod /> */}
            {/* <Userefhook /> */}
            {/* <UseEffecthook /> */}
            {/* <Usememohook /> */}
            {/* <UseCallback /> */}
            {/* <UseContext /> */}
            {/* <Counter /> */}
            {/* <Todofy /> */}
            {/* <NoteApp /> */}
            {/* <LandingPage /> */}
            {/* <InputForm /> */}
            {/* <Axios /> */}
            {/* <Inputdisplay /> */}
            {/* <QuoteGen /> */}
            {/* <Assignment /> */}
            {/* <Table /> */}
            {/* <AgeCalculator /> */}
            {/* <CodingChallenge /> */}
            {/* <StopWatch /> */}
            {/* {/* <Counter1 /> */}
            {/* <Counter2 /> */}
            {/* <CryptoGallery /> */}
            {/* <ImageSlider /> */}
            {/* <PasswordGen /> */}
            {/* <LifecycleMethod /> */}
            {/* <Debouncing /> */}
            {/* <MovieCard /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
// export { name, role };
