import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/MainPage';
import { NonAccessPage } from '../../pages/non-access-page/NonAccessPage';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Routes } from 'react-router-dom';
import nextId from 'react-id-generator';
import { setAuthUsers } from '../../redux/actions/users';
import { UsersPage } from '../../pages/users-page/UsersPage';

const authRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '/users/:id', element: <UsersPage /> },
];

export const AuthRoutes: React.FC = () => {
  const {userAuth} = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setAuthUsers(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Routes>
        {userAuth ? (
          authRoutes.map((item) => <Route {...item} key={nextId()} />)
        ) : (
          <Route path='/' element={<NonAccessPage />} />
        )}
      </Routes>
    </div>
  );
};
