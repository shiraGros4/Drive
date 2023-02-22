import './Style/globalStyle.css';
import './App.css'
import Layout from './components/Layout/index'
import { useState } from 'react';
import FileContext from './context/fileContext';

function App() {
  const [ filesDisplay, setFilesDisplay] = useState([])
  const [ foldersDisplay, setFoldersDisplay] = useState([])
  const [files, setFiles] = useState([])
  return (
    <div className="App">
      <header className='App-header'>
        My Drive
      </header>
      <body className='body'>
        <FileContext.Provider value={{filesDisplay, setFilesDisplay, foldersDisplay, setFoldersDisplay}}>
          <Layout/>
        </FileContext.Provider>
      </body>
    </div>
  );
}

export default App;
