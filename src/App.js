import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPeople } from "./redux/peopleRedux";
import Footer from "./components/views/Footer/Footer";
import Header from './components/views/Header/Header'
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import CharacterList from "./components/pages/CharactersList/CharactersList";
import Contact from "./components/pages/Contact/Contact";
import Favorite from "./components/pages/Favorite/Favorite";
import NotFound from "./components/pages/NotFound/NotFound";
import Character from "./components/pages/Character/Character";
import { fetchPlanets } from "./redux/planetsRedux";
import { fetchFilms } from "./redux/filmsRedux";
import { fetchStarships } from "./redux/starshipsRedux";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();

  const [peoplePage, setPeoplePage] = useState(1)
  const [planetPage, setPlanetPage] = useState(1)
  const [starchipsPage, setStarchipsPage] = useState(1)



  useEffect(() => dispatch(fetchPeople(peoplePage, setPeoplePage)), [peoplePage, dispatch]);
  useEffect(() => dispatch(fetchPlanets(planetPage, setPlanetPage)), [planetPage, dispatch]);
  useEffect(() => dispatch(fetchStarships(starchipsPage, setStarchipsPage)), [starchipsPage, dispatch]);
  useEffect(() => dispatch(fetchFilms()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
