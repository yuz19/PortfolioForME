import './App.css';

import StartMenu from './components/StartMenu';
import {Route,Routes} from "react-router-dom"
import StoryMode from './components/StoryMode';
function App() {
  return (
    <div className="App">
      
      <Routes>
            <Route path="/" element={<StartMenu/>}/>
            <Route path="/StoryMode" element={<StoryMode/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
