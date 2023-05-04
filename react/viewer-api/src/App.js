import { useCallback, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import NewsList from './components/NewsList';


function App() {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList />
    </div>
  );
}

export default App;
