import './App.css';
import Header from './compo/Header';
import Main from './compo/Main';
import Place from './compo/Place';
import NotFound from './compo/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/place/*" element={<Place />} />
          {/* 상단에 위치하는 라우트들과 일치하는 경로가 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

