import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './Layout.scss';
import { UserTypes } from '../../types/userTypes';

interface LayoutProps extends UserTypes {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  nickName,
  avatarUrl,
  userId,
  children,

}) => {
  return (
    <div className='cnLayoutRoot'>
      <Navbar   nickName={nickName} avatarUrl={avatarUrl} userId={userId} />
      <div className='cnLayoutBody'>{children}</div>
    </div>
  );
};
