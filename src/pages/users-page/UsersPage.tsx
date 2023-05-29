import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { useAppSelector } from '../../hooks/hooks';
import './UsersPage.scss';
import { UserBio } from '../../components/user-bio/UserBio';

export const UsersPage = () => {
  const  authorizedUser  = useAppSelector((state) => state.users.authorizedUser);
  return (
    <Layout
      nickName={authorizedUser.nickName}
      userId={authorizedUser.id}
      avatarUrl={authorizedUser.avatarUrl}
    >
      <div className='cnUserPageRoot'>
        <UserBio
          avatarUrl={authorizedUser.avatarUrl}
          nickName={authorizedUser.nickName}
          subscribed={authorizedUser.subscribed}
          subscribers={authorizedUser.subscribers}
        />
      </div>
    </Layout>
  );
};
