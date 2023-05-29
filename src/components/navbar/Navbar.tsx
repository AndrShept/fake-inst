import React from 'react';
import './Navbar.scss';
import { UserBadge } from '../user-badge/UserBadge';
import { UserTypes } from '../../types/userTypes';
import { Link } from 'react-router-dom';



export const Navbar:React.FC<UserTypes> = ({ nickName, avatarUrl, userId }) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <Link to='/'>Shegram</Link>
        <UserBadge  nickName={nickName} avatarUrl={avatarUrl} userId={userId}/>
      </div>
    </div>
  );
};
