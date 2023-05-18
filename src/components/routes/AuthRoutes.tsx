import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/MainPage';
import { UserBadge } from '../user-badge/UserBadge';
import { NonAccessPage } from '../../pages/non-access-page/NonAccessPage';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Routes } from 'react-router-dom';
import nextId from 'react-id-generator';
import { fetchAuthUsers } from '../../redux/actions/users';

const authRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '/:id', element: <UserBadge /> },
];

export const AuthRoutes: React.FC = () => {
  const userAuth = useAppSelector((state) => state.users.userAuth);
  const dispatch = useAppDispatch()

  React.useEffect(()=> {
    dispatch(fetchAuthUsers())
  }, [])
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
