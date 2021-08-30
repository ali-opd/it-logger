import { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </>
  );
}

export default App;
