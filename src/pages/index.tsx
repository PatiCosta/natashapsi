import { About } from '@/components/About'
import { CanIHelp } from '@/components/CanIHelp'
import { Feedbacks } from '@/components/Feedbacks'
import { Footer } from '@/components/Footer'
import { Liberty } from '@/components/Liberty'
import { Main } from '@/components/Main'
import { PsicologiaClinica } from '@/components/PsicologiaClinica'
import { Psicotherapy } from '@/components/Psicotherapy'
import { Supera } from '@/components/Supera'
import { Where } from '@/components/Where'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Container  maxW={'1366px'} mx='auto'>
        <Main />
        {/* <Freedom /> */}
        <Liberty />
        {/* <WhatCanIHelp /> */}
        <CanIHelp />
        <Psicotherapy />
        <About/>
        <Supera/>
        {/* <CareerOrientation /> */}
        {/* <Curriculum /> */}
        <Feedbacks />
        <PsicologiaClinica/>
        <Where />
        <Footer />
      </Container>
    </>
  )
}
