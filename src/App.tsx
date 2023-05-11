import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { UsersPage } from './pages/users-page/UsersPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:id' element={<UsersPage />} />
        <Route path='*' element={<div>404 ERROR</div>} />
      </Routes>
    </>
  );
}

export default App;
