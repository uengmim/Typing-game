//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import {
  Link,
  Route,
  /*Switch*/ BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import Game from "./Game/Game";
import AllRank from "./AllRank/AllRank";
import DifficultyRank from "./Rank2/DifficultyRank";
import Settings from "./Settings/Settings";

function App() {
  const [settingsValue, setSettingsValue] = useState();
  const updateSettingsValue = (key, value) => {
    let modifiedSettings = JSON.parse(JSON.stringify(settingsValue));
    modifiedSettings[key] = value;
    setSettingsValue(modifiedSettings);
  };
  return (
    <Router>
      <header>
        <Link to="/">
          <button>홈</button>
        </Link>
        <Link to="/game">
          <button>게임</button>
        </Link>
        <Link to="/allRank">
          <button>전체랭킹</button>
        </Link>
        <Link to="/diffcultyRank">
          <button>난이도별랭킹</button>
        </Link>
        <Link to="/option">
          <button>환경설정</button>
        </Link>
      </header>
      <hr />

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/allRank" component={AllRank} />
        <Route path="/diffcultyRank" component={DifficultyRank} />
        <Route
          path="/option"
          element={
            <Settings
              settingsValue={settingsValue}
              updateSettingsValue={(key, value) =>
                updateSettingsValue(key, value)
              }
            />
          }
        />
      </main>
    </Router>
  );
}

export default App;
