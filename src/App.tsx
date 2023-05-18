import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { UsersPage } from './pages/users-page/UsersPage';
import { AuthRoutes } from './components/routes/AuthRoutes';

function App() {
  return (
    <>
      <AuthRoutes />
      <Routes>
        <Route path='*' element={<div>404 ERROR</div>} />
      </Routes>
    </>
  );
}

export default App;
