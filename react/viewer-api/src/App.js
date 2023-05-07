// import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Categories from './components/Categories';
// import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';


function App() {
  // const [category, setCategory] = useState('all')
  // const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div>
      <Routes>
        <Route path='/:category?' component={NewsPage} />
        {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      </Routes>
    </div>
  );
}

export default App;
