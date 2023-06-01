/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { UserBio } from '../../components/user-bio/UserBio';
import { Card } from '../../components/Card/Card';
import { fetchPosts } from '../../redux/actions/postsByUser';
import { fetchAuthorizedUsers } from '../../redux/actions/users';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ThreeDots } from 'react-loader-spinner';
import './UsersPage.scss';
import { useParams } from 'react-router-dom';
import nextId from 'react-id-generator';
import { Loader } from '../../components/loader/Loader';

export const UsersPage = () => {
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const authorizedUser = useAppSelector((state) => state.users.authorizedUser);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchPosts(page));
    dispatch(fetchAuthorizedUsers());
  }, [page]);
  const { posts, totalPosts, isPostsLoading } = useAppSelector(
    (state) => state.postsByUser
  );
  const nextHandler = () => {
    setPage(page + 1);
  };

  return (
    <Layout
      nickName={authorizedUser.nickName}
      userId={authorizedUser.id}
      avatarUrl={authorizedUser.avatarUrl}
    >
      <div className='cnUserPageRoot'>
        <UserBio
          firstName={authorizedUser.firstName}
          lastName={authorizedUser.lastName}
          avatarUrl={authorizedUser.avatarUrl}
          nickName={authorizedUser.nickName}
          subscribed={authorizedUser.subscribed}
          subscribers={authorizedUser.subscribers}
          description={authorizedUser.description}
          url={authorizedUser.url}
        />

        <InfiniteScroll
          dataLength={posts.length}
          next={nextHandler}
          hasMore={posts.length < totalPosts}
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
          <div className='cnUserPageRootContent'>
            {isPostsLoading ? (
              <Loader />
            ) : (
              posts.map((post) => (
                <Card
                  postId={post.id}
                  author={post.author}
                  key={nextId()}
                  imgUrl={post.imgUrl}
                  className='cnUserPageCard'
                  likes={post.likes.length}
                  comments={post.comments.length}
                  isLikedByYou={post.likes.includes(post.author.id ?? 0)}
                />
              ))
            )}
          </div>
        </InfiniteScroll>
      </div>
    </Layout>
  );
};
