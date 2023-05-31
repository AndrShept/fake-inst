/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { DetailCard } from '../../components/details-card/DetailCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPhotos } from '../../redux/actions/photos';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MainPage.scss';
import { ThreeDots, ColorRing } from 'react-loader-spinner';
import { fetchUsers } from '../../redux/actions/users';
import { fetchAuthorizedUsers } from '../../redux/actions/users';
import { Loader } from '../../components/loader/Loader';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { photos, isPhotoLoading, totalPhotos } = useAppSelector(
    (state) => state.photos
  );
  const  authorizedUser  = useAppSelector((state) => state.users.authorizedUser);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    dispatch(fetchPhotos(page));
    dispatch(fetchUsers());
    dispatch(fetchAuthorizedUsers());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const nextHandler = () => {
    setPage(page + 1);
  };

  return (
    <Layout
    firstName={authorizedUser.firstName}
    lastName={authorizedUser.lastName}

      nickName={authorizedUser.nickName}
      userId={authorizedUser.id}
      avatarUrl={authorizedUser.avatarUrl}
    >
      <div className='cnMainPageRoot'>
        <InfiniteScroll
          dataLength={photos.length}
          next={nextHandler}
          hasMore={photos.length < totalPhotos}
          loader={
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ThreeDots
                height='50'
                width='50'
                radius='9'
                color='grey'
                ariaLabel='three-dots-loading'
                visible={true}
              />
            </div>
          }
          endMessage={<p>Thats All</p>}
        >
          {isPhotoLoading ? (
<Loader/>
          ) : (
            photos.map(({ author, id, imgUrl, likes, comments }) => (
              <DetailCard
                key={id}
                id={id}
                userName={authorizedUser.nickName!}
                userId={authorizedUser.id!}
                imgUrl={imgUrl}
                avatarUrl={authorizedUser.avatarUrl!}
                likes={likes?.length}
                isLikedByYou={likes?.includes(authorizedUser.id!)}
                comments={comments}
                className='cnMainPageCard'
                author={author}
              />
            ))
          )}
        </InfiniteScroll>
      </div>
     
    </Layout>
  );
};
