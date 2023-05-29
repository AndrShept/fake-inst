import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { useAppSelector } from '../../hooks/hooks';
import './UsersPage.scss';
import { UserBio } from '../../components/user-bio/UserBio';
import { Card } from '../../components/Card/Card';

export const UsersPage = () => {
  const authorizedUser = useAppSelector((state) => state.users.authorizedUser);
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
        <div className='cnUserPageRootContent'>
          <Card imgUrl='dasdasd' className='cnUserPageCard' />
          <Card imgUrl='dasdasd' className='cnUserPageCard'/>
          <Card imgUrl='dasdasd' className='cnUserPageCard'/>
        </div>
      </div>
    </Layout>
  );
};
