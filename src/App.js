import {Routes, Route} from 'react-router-dom';
import './App.css';
import Field from './components/elements/Field.js';
import Leaderboard from './components/elements/Leaderboard.js';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {<>
            <Route path='*' element={<Field/>} />
            <Route path='/leaderboard' element={<Leaderboard />} />
          </>
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
