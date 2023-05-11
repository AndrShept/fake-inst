import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

type DetailCardProps = {
  userName?: string;
  avatarUrl?: string;
  userId?: number;
  imgUrl?: string;
  likes?: string;
  isLikedByYou?: boolean;
  comments?: string;
};

export const DetailCard: React.FC<DetailCardProps> = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
}) => {
  return (
    <div className='cnDetailCardRoot'>
      <div className='cnDetailCardHeader'>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src='' alt='' className='cnDetailCardImg' />
      </div>
      <div className='cnDetailCardButtons'>
        {isLikedByYou ? <AiFillHeart /> : <AiOutlineHeart />}
        <FaRegComment />
      </div>
      <div className='cnDetailCardLikes'>
        {`like ${likes} user`}
        </div>
      <div className='cnDetailCardComments'>comment 
      comment 
      comment
      </div>
      <textarea name='' id='' cols={30} rows={10} className='cnDetailCardTextArea'></textarea>
    </div>
  );
};
