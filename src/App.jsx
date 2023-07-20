import { useSelector } from "react-redux";
import Section from "./components/Section";
import Aside from "./components/favoriteList/Aside";
import "./app.css";

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <main className="main" id={theme ? "Dark": "Light"}>
      <Section />
      <Aside />
    </main>
  );
}

export default App;
