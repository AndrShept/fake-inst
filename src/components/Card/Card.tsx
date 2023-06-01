/* eslint-disable no-constant-condition */
import React from 'react';
import cn from 'classnames';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaComment, FaRegComment } from 'react-icons/fa';
import './Card.scss';
import { AuthorTypes } from '../../types/photoTypes';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleLikeByPost } from '../../redux/actions/postsByUser';

interface CardProps {
  imgUrl: string;
  className?: string;
  isLikedByYou?: boolean;
  likes?: number;
  comments?: number;
  postId: number;
  author: AuthorTypes;
}

export const Card: React.FC<CardProps> = ({
  imgUrl,
  className,
  isLikedByYou,
  likes,
  comments,
  postId,
  author,
}) => {
  const dispatch = useAppDispatch();
  const handleLike = () => {
    dispatch(toggleLikeByPost(author.id, postId));
  };
  return (
    <div className={cn('cnCardRoot', className)}>
      <img className='cnCardImage' src={imgUrl} alt='image' />
      <div className='cnCardHover'></div>
      <div className='cnCardIcons'>
        {isLikedByYou ? (
          <AiFillHeart onClick={handleLike} size={30} className='cnCardIcon' />
        ) : (
          <AiOutlineHeart
            onClick={handleLike}
            size={30}
            className='cnCardIcon'
          />
        )}
        <span className='cnCardNumber'>{likes}</span>
        {false ? (
          <FaComment onClick={null} className='cnCardIcon' size={30} />
        ) : (
          <FaRegComment onClick={null} className='cnCardIcon' size={30} />
        )}
        <span className='cnCardNumber'>{comments}</span>
      </div>
    </div>
  );
};
