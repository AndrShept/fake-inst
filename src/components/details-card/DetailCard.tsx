import React from 'react';
import { UserBadge } from '../user-badge/UserBadge';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment, FaComment } from 'react-icons/fa';
import './DetailCard.scss';
import { Comment } from '../comment/Comment';
import cn from 'classnames';
import nextId from 'react-id-generator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setComment, toggleLike } from '../../redux/actions/photos';
import { CommentsTypes, AuthorTypes } from '../../types/photoTypes';

interface DetailCardProps {
  userName: string;
  avatarUrl: string;
  userId: number ;
  imgUrl: string;
  likes: number;
  isLikedByYou: boolean;
  comments: CommentsTypes[];
  className: string;
  id: number;
  author: AuthorTypes;
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
  id,
  author,
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const [isToggleSetComment, setIsToggleSetComment] = React.useState(false);
  const [textComment, setTextComment] = React.useState('');
  const [isShowComments, setIsShowComments] = React.useState(true);
  const { isMutateLoading } = useAppSelector((state) => state.photos);
  const dispatch = useAppDispatch();
  const sendComment = () => {
    if (textComment.trim()) {
      dispatch(setComment(id, userName, textComment, userId, avatarUrl));
      setTextComment('');
    } else {
      return <p>Ведіть якісь дані</p>;
    }
  };
  const hadleClickCommentIcon = () => {
    setIsToggleSetComment(!isToggleSetComment);
    setTimeout(() => ref?.current?.focus(), 100);
  };
  const handleLike = () => {
    dispatch(toggleLike(userId, id));
  };
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
            <div key={nextId()}>
              <Comment {...comment} />
            </div>
          ))}
          <p style={{ marginTop: '15px' }}>
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
        <span
          onClick={() => setIsShowComments(true)}
          className='cnShowButtonHideComments'
        >
          {!isShowComments ? 'cховати' : ''}
        </span>
      </>
    );
  };

  return (
    <div className={cn(className, 'cnDetailCardRoot')}>
      <div className='cnDetailCardHeader'>
        <UserBadge
          nickName={author.nickName}
          avatarUrl={author.avatarUrl}
          userId={author.id}
        />
      </div>
      <div>
        <img src={imgUrl} alt='imgUrl' className='cnDetailCardImg' />
      </div>
      <div className='cnDetailCardButtons'>
        {isLikedByYou ? (
          <AiFillHeart
            onClick={handleLike}
            size={20}
            className='cnDetailCardLikeIconFull'
          />
        ) : (
          <AiOutlineHeart
            onClick={handleLike}
            size={20}
            className='cnDetailCardLikeIcon'
          />
        )}
        {isToggleSetComment ? (
          <FaComment
            onClick={hadleClickCommentIcon}
            className='cnDetailCardCommentsIcon'
            size={20}
          />
        ) : (
          <FaRegComment
            onClick={hadleClickCommentIcon}
            className='cnDetailCardCommentsIcon'
            size={20}
          />
        )}
      </div>
      <div className='cnDetailCardLikes'>{`like ${likes} user`}</div>
      <div className='cnDetailCardComments'>{renderComments()}</div>
      {isToggleSetComment && (
        <div className='cnDetailCardTextAreaWrapper'>
          <textarea
            ref={ref}
            value={textComment}
            onChange={(e) => setTextComment(e.target.value)}
            name=''
            id=''
            // cols={30}
            // rows={10}
            placeholder='Коментарій...'
            className='cnDetailCardTextArea'
          ></textarea>
          <button onClick={sendComment} className='cnDetailCardTextAreaButton'>
            Відправити
          </button>
        </div>
      )}
    </div>
  );
};
