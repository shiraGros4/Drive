import './Style/globalStyle.css';
import './App.css'
import Layout from './components/Layout/index'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        My Drive
      </header>
      <body className='body'>
        File
        <Layout/>
      </body>
    </div>
  );
}

export default App;
