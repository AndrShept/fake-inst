import React from 'react';
import './Navbar.scss';
import { UserBadge } from '../user-badge/UserBadge';
import { UserProps } from '../../types/UserTypes';



export const Navbar:React.FC<UserProps> = ({ nickName, avatarUrl, id }) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <span>Shegram</span>
        <UserBadge  nickName={nickName} avatarUrl={avatarUrl} id={id}/>
      </div>
    </div>
  );
};
