import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import './DetailCard.scss';
import { Comment } from '../comment/Comment';

interface DetailCardProps {
  userName?: string;
  avatarUrl?: string;
  userId?: number;
  imgUrl?: string;
  likes?: number;
  isLikedByYou?: boolean;
  comments: { text: string; nickName: string }[];
}

export const DetailCard: React.FC<DetailCardProps> = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
}) => {
  const [isShowComments, setIsShowComments] = React.useState(true);
  const handleShowComments = () => {
    setIsShowComments(!isShowComments);
  };
  const renderComments = () => {
    if (comments.length > 2 && isShowComments) {
      const sliceComments = comments.slice(
        comments.length - 2,
        comments.length
      );

      return (
        <>
          {sliceComments.map((comment, i) => (
            <Comment {...comment} key={i} />
          ))}
          <p>
            {' '}
            <span
              onClick={handleShowComments}
              className='cnShowButtonOpenComments'
            >
              Показати ще
            </span>
            {` ${comments.length - sliceComments.length} коментарі`}
          </p>
        </>
      );
    }

    return (
      <>
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
        <span onClick={handleShowComments} className='cnShowButtonHideComments'>
          Сховати
        </span>
      </>
    );
  };

  return (
    <div className='cnDetailCardRoot'>
      <div className='cnDetailCardHeader'>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt='imgUrl' className='cnDetailCardImg' />
      </div>
      <div className='cnDetailCardButtons'>
        {isLikedByYou ? (
          <AiFillHeart className='cnDetailCardLikeIcon' />
        ) : (
          <AiOutlineHeart className='cnDetailCardLikeIcon' />
        )}
        <FaRegComment className='cnDetailCardCommentsIcon' />
      </div>
      <div className='cnDetailCardLikes'>{`like ${likes} user`}</div>
      <div className='cnDetailCardComments'>{renderComments()}</div>
      <textarea
        name=''
        id=''
        cols={30}
        rows={10}
        className='cnDetailCardTextArea'
      ></textarea>
    </div>
  );
};
