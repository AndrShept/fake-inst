import React from 'react';
import './Navbar.scss';
import { UserBadge } from '../user-badge/UserBadge';
import { UserTypes } from '../../types/userTypes';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Navbar: React.FC<UserTypes> = ({
  nickName,
  avatarUrl,
  userId,
}) => {
  return (
    <header className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <Link className='cnNavbarLink'  to='/'>
          <img className='cnNavbarLogo' src={logo} alt='logo' />
          <span className='cnNavbarLogoText'>SHIPAGRAM</span>
        </Link>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} userId={userId} />
      </div>
    </header>
  );
};
