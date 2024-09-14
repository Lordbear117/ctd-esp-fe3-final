import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useGlobalContext } from './Components/utils/global.context';
import "./App.css";

function App() {

  const { state } = useGlobalContext();

  return (
    <div className={`app ${state.theme}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
