import React from 'react';
import { UserTypes } from '../../types/userTypes';
import { useNavigate } from 'react-router-dom';
import './UserBadge.scss';

export const UserBadge: React.FC<UserTypes> = ({ nickName, avatarUrl, userId }) => {
  const navigate = useNavigate();
  const onUserBadgeClick = () => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className='cnBadgeRoot' onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl}  alt='logo' className='cnUserBadgeAvatar' />
      ) : (
        <div className='cnBadgePlaceHolder' />
      )}
      <span className='cnUserBadgeName'>{nickName}</span>
    </div>
  );
};
