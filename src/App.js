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
import { fetchFilms } from "./redux/filmsRedus";
import { fetchStarships } from "./redux/starshipsRedux";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPeople()), [dispatch]);
  useEffect(() => dispatch(fetchPlanets()), [dispatch]);
  useEffect(() => dispatch(fetchFilms()), [dispatch]);
  useEffect(() => dispatch(fetchStarships()), [dispatch]);

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
