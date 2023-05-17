import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { DetailCard } from '../../components/details-card/DetailCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPhotos } from '../../redux/actions/photos';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { photos, isPhotoLoading } = useAppSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(photos);
  return (
    <Layout nickName='Andr' id={1}>
      <div className='cnMainPageRoot'>
        <InfiniteScroll
          dataLength={photos.length}
          next={() => console.log('next')}
          hasMore={true}
          loader={'Loading...'}
          endMessage={<p>Thats All</p>}
        >
          {isPhotoLoading
            ? 'loading...'
            : photos.map(({ author, id, imgUrl, likes, title, comments }) => (
                <DetailCard
                  key={id}
                  userName={author.nickName}
                  userId={author.id}
                  imgUrl={imgUrl}
                  likes={likes.length}
                  isLikedByYou={true}
                  comments={comments}
                  className='cnMainPageCard'
                />
              ))}
        </InfiniteScroll>
      </div>
      <div>MainPage</div>
    </Layout>
  );
};
