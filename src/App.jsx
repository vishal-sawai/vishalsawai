import './App.css';
import './index.css';
import Main from './components/Main';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProjectInfo from './components/ProjectInfo';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })

  return (

    <>{isLoading ? (
      <Loader />
    ) : (
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/projectinfopage/:PName' element={<ProjectInfo />} />
      </Routes>
    )}
    </>
  );
}

export default App;
