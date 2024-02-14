
import "./App.css";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// каждая страница будет лежать в своей папке, откуда будет импротироваться сюда
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { Majaneb } from "./pages/majanebpart/majaneb";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Majaneb />
      </header>
    </div>
  );
}

export default App;
