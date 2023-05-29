import React from 'react';
import cn from 'classnames';
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import './Card.scss';

interface CardProps {
  imgUrl: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ imgUrl, className }) => {
  
  const [isLikedByYou, setSsLikedByYou] = React.useState(false)
  const handleLike = ()=> {
    setSsLikedByYou(!isLikedByYou)
  }
  return (
    <div className={cn('cnCardRoot', className)}>
      <img className='cnCardImage' src={imgUrl} alt='image' />
      <div className='cnCardHover'></div>
      <div className='cnCardIcons'>

      {isLikedByYou ? (
          <AiFillHeart
            onClick={handleLike}
            size={40}
            className='cnDetailCardLikeIconFull'
          />
        ) : (
          <AiOutlineHeart
            onClick={handleLike}
            size={40}
            className='cnDetailCardLikeIcon'
          />
        )}

      </div>
    </div>
  );
};
