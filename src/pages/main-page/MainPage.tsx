import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { DetailCard } from '../../components/details-card/DetailCard'

export const MainPage = () => {
  return (
    <Layout nickName='Andr' id={1}>
    <div>MainPage</div>
    <DetailCard/>

    </Layout >
  )
}
