import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesFile from "./core/Routes";
import { LoadingContext } from "./contexts/LoadingContext";
import { useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Router>
        <LoadingContext.Provider value={{setIsLoading}}>
        <Loading isLoading={isLoading}/>
          <RoutesFile />
        </LoadingContext.Provider>
      </Router>
    </div>
  );
}

export default App;
