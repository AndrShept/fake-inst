import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { DetailCard } from '../../components/details-card/DetailCard';
import {  useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPhotos } from '../../redux/actions/photos';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MainPage.scss';
import { ColorRing,ThreeDots } from 'react-loader-spinner';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { photos, isPhotoLoading, totalPhotos } = useAppSelector((state) => state.photos);
  const [page, setPage] = React.useState(0)
console.log(totalPhotos)
  React.useEffect(() => {
    dispatch(fetchPhotos(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
const nextHandler = () =>{
  setPage(page + 1)
}
 
  return (
    <Layout nickName='Andr' id={1}>
      <div  className='cnMainPageRoot'>
        <InfiniteScroll
          dataLength={photos.length}
          next={nextHandler}
          hasMore={photos.length < totalPhotos}
          loader={<div style={{display: 'flex', justifyContent: 'center'}}><ThreeDots 
            height="50" 
            width="50" 
            radius="9"
            color="grey" 
            ariaLabel="three-dots-loading"
            visible={true}
             /></div>}
          endMessage={<p>Thats All</p>}
        >
          {isPhotoLoading
            ? <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
            : photos.map(({ author, id, imgUrl, likes, title, comments }) => (
                <DetailCard
                  key={id}
                  userName={author.nickName}
                  userId={author.id}
                  imgUrl={imgUrl}
                  avatarUrl={author.avatarUrl}
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
