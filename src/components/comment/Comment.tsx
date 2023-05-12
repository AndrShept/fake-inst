import React from 'react';

type CommentProps = {
  nickName: string;
  text: string;
};

export const Comment:React.FC<CommentProps> = ({ nickName, text }) => {
  return (
    <div className='cnCommentRoot'>
      <span className='cnCommentName'>{nickName}</span>
      <span>{text}</span>
    </div>
  );
};
