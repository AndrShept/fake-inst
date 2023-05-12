import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { DetailCard } from '../../components/details-card/DetailCard';

const comments = [
  {
    text: 'dasdsadasdsadasd',
    nickName: 'Andr',
  },
  {
    text: 'dasdsadsdsdasfsadsadsaasdsadasd',
    nickName: 'Olga',
  },
  {
    text: 'asdasdsadsadsadsadsadsadsadsa',
    nickName: 'Vital',
  },
  {
    text: 'asdasdsadsadsadsadsadsadsadsa',
    nickName: 'Xrustya',
  },
  {
    text: 'asdasdsadsadsadsadsadsadsadsa',
    nickName: 'Djon',
  },
];

export const MainPage = () => {
  return (
    <Layout nickName='Andr' id={1}>
      <div>MainPage</div>
      <DetailCard
        comments={comments}
        likes={10}
        userId={1}
        userName='Andr'
        isLikedByYou={true}
        imgUrl='https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'
      />
    </Layout>
  );
};
