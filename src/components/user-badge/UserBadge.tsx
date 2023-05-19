import React from 'react';
import { UserProps } from '../../types/UserTypes';
import { useNavigate } from 'react-router-dom';
import './UserBadge.scss';

export const UserBadge: React.FC<UserProps> = ({ nickName, avatarUrl, id }) => {
  const navigate = useNavigate();
  const onUserBadgeClick = () => {
    navigate(`users/${id}`);
  };

  return (
    <div className='cnBadgeRoot' onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt='logo' className='cnUserBadgeAvatar' />
      ) : (
        <div className='cnBadgePlaceHolder' />
      )}
      <span className='cnUserBadgeName'>{nickName}</span>
    </div>
  );
};
