import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './Layout.scss'

type LayoutProps = {
    
  nickName?: string;
  avatarUrl?: string;
  id?: number;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps > = ({
  nickName,
  avatarUrl,
  id,
  children,
}) => {
  return (
    <div className='cnLayoutRoot'>
      <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id}/>
      <div className='cnLayoutBody'>{children}</div>
    </div>
  );
};
