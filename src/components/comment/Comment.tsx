import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { CommentsTypes } from '../../types/photoTypes';
import './Comment.scss'

export const Comment: React.FC<CommentsTypes> = ({
  nickName,
  text,
  userId,
  avatarUrl,
}) => {
  return (
    <div className='cnCommentRoot'>
      <UserBadge nickName={nickName} userId={userId} avatarUrl={avatarUrl} />
      {/* <span className='cnCommentName'>{nickName}</span> */}

      <div >
        <p className='cnCommentText'>{text}</p>
      </div>
    </div>
  );
};
