import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Tournament from "./components/tournament/Tournament";
import Logs from "./components/history/History";
import Gallery from "./components/gallery/Gallery";
import Stats from "./components/stats/Stats"




function App() {
  return (
    <div className="app">
      <Switch>

        <Route path="/home"><NavBar /><Home /></Route>

        <Route path="/tournament"><NavBar /><Tournament /></Route>

        <Route path="/gallery"><NavBar /><Gallery /></Route>

		<Route path="/stats"><NavBar /><Stats /></Route>

        <Route path="/history"><NavBar /><Logs /></Route>

        <Route path="/"><LandingPage /></Route>
		
      </Switch>
    </div>
  );
}

export default App;
