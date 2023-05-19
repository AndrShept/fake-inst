import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import './DetailCard.scss';
import { Comment } from '../comment/Comment';
import cn from 'classnames';
import nextId from "react-id-generator";
import { useAppDispatch } from '../../hooks/hooks';
import { setLikes } from '../../redux/actions/users';

interface DetailCardProps {
  userName?: string;
  avatarUrl?: string;
  userId?: number;
  imgUrl?: string;
  likes?: number;
  isLikedByYou?: boolean;
  comments: { text: string; nickName: string }[];
  className: string;
}

export const DetailCard: React.FC<DetailCardProps> = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
  className,
}) => {
  const dispatch = useAppDispatch()
  const [isShowComments, setIsShowComments] = React.useState(true);
  const handleShowComments = () => {
    setIsShowComments(false);
  };
  const renderComments = () => {
    if (comments.length > 2 && isShowComments) {
      const sliceComments = comments.slice(
        comments.length - 2,
        comments.length
      );

      return (
        <>
          {sliceComments.map((comment) => (
            <Comment {...comment} key={nextId()} />
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
          <Comment {...comment} key={nextId()} />
        ))}
        <span onClick={()=> setIsShowComments(true)} className='cnShowButtonHideComments'>
          {!isShowComments ? "cховати": ''}
        </span>
      </>
    );
  };

  return (
    <div className={cn(className, 'cnDetailCardRoot')}>
      <div className='cnDetailCardHeader'>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt='imgUrl' className='cnDetailCardImg' />
      </div>
      <div className='cnDetailCardButtons'>
        {isLikedByYou ? (
          <AiFillHeart onClick={ () => dispatch(setLikes())} className='cnDetailCardLikeIcon' />
        ) : (
          <AiOutlineHeart onClick={ () => dispatch(setLikes())} className='cnDetailCardLikeIcon' />
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
