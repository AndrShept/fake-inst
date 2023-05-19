import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './components/routes/AuthRoutes';

function App() {
  return (
    <>
      <AuthRoutes  />
      <Routes>
      {/* <Route path='*' element={<div>404 ERROR</div> } /> */}
      </Routes>
    </>
  );
}

export default App;
