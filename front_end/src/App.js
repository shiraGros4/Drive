import style from './style.module.css'
import Layout from './components/Layout/index'
import Header from './components/Header';
import { useState } from 'react';
import FileContext from './context/fileContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [ filesDisplay, setFilesDisplay] = useState([])
  const [ foldersDisplay, setFoldersDisplay] = useState([])
  const [ popupInfoDisplay, setPopupInfoDisplay] = useState(false)
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <Header/>
      </header>
      <div className={style.body}>
        <FileContext.Provider value={{filesDisplay, setFilesDisplay, foldersDisplay,
           setFoldersDisplay, popupInfoDisplay, setPopupInfoDisplay}}>
          <BrowserRouter>
             <Layout/>
          </BrowserRouter>
        </FileContext.Provider>
      </div>
    </div>
  );
}

export default App;
