import React from 'react'
import Offers from './Offers';
import SignUpForm from './SignUpForm';
import Header from './Header';
import MainSection from './MainSection';
import EndSection from './EndSection';
export default function Home() {
  return (
    <>
      <Header/>
      <MainSection/>
      <Offers/>
      <SignUpForm/>
      <EndSection/>
    </>
  )
}
