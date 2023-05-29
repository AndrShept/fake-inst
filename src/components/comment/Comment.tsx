import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { CommentsTypes } from '../../types/photoTypes';
import './Comment.scss'
import {motion} from 'framer-motion'

export const Comment: React.FC<CommentsTypes> = ({
  nickName,
  text,
  userId,
  avatarUrl,
}) => {
  return (
   
    <div   className='cnCommentRoot'>
      <UserBadge nickName={nickName} userId={userId} avatarUrl={avatarUrl} />

      <div >
        <p className='cnCommentText'>{text}</p>
      </div>
    </div>
    
  );
};
