/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { UserBio } from '../../components/user-bio/UserBio';
import { Card } from '../../components/Card/Card';
import { fetchPostsByUser } from '../../redux/actions/postsByUser';
import { fetchAuthorizedUsers, fetchUsers } from '../../redux/actions/users';
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
  const user = useAppSelector((state) => state.users.user);
  const postsByUser = useAppSelector((state) => state.users.user.postsByUser);
  const isUserLoading = useAppSelector((state) => state.users.isUserLoading);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchAuthorizedUsers());
    dispatch(fetchUsers(id??0));
  }, [page, id]);

  console.log(user, 'users');

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
          firstName={user.firstName}
          lastName={user.lastName}
          avatarUrl={user.avatarUrl}
          nickName={user.nickName}
          subscribed={user.subscribed}
          subscribers={user.subscribers}
          description={user.description}
          url={user.url}
        />

        <InfiniteScroll
          dataLength={10}
          next={nextHandler}
          hasMore={true}
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
            {isUserLoading ? (
              <Loader />
            ) : (
              postsByUser?.length &&
              postsByUser.map((post) => (
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
