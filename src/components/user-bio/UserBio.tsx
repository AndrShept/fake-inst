import React from 'react';
import './UserBio.scss';
import { UserCounter } from '../user-counter/UserCounter';
import { UserTypes } from '../../types/userTypes';

export const UserBio: React.FC<UserTypes> = ({
  avatarUrl,
  nickName,
  subscribed,
  subscribers,
  firstName,
  lastName,
  description,
  url,
}) => {
  return (
    <div className='cnUserBioRoot'>
      <div>
        <img className='cnUserBioAvatar' src={avatarUrl} alt='avatar' />
      </div>

      <div className='cnUserBioInfo'>
        <span className='cnUserBioNickName'>{nickName}</span>
        <div className='cnUserBioRow'>
          <UserCounter text='Публікацій:' count={3} className='sss' />
          <UserCounter
            text='Підписників:'
            count={subscribed?.length ?? 0}
            className='sss'
          />
          <UserCounter
            text='Підписок:'
            count={subscribers?.length ?? 0}
            className='sss'
          />
        </div>
        <span className='cnUserBioFirsLastName'>
          {firstName} {lastName}
        </span>
        <p className='cnUserBioDescription'>{description}</p>
        <a href={url}>{url}</a>
      </div>
   
    </div>
  );
};
