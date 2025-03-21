import { Agende } from '@/components/Agende'
import { Benefits } from '@/components/Benefits'
import ContactForm from '@/components/ContatoForm'
import { FeedbacksCarousel } from '@/components/FeedbacksCarousel'
import { FooterV2 } from '@/components/FooterV2'
import { Main2v } from '@/components/Main2v'
import { Mapa } from '@/components/Mapa'
import { Meaning } from '@/components/Meaning'
import { slugify } from '@/utils'
import { Container, Flex, useBreakpointValue } from '@chakra-ui/react'

export default function Home() {

  const isMobile = useBreakpointValue({ base: true, sm: false, md: false, lg: false, xl: false })

  const menuItems = ["QUEM SOU EU", "MEU PROPÓSITO", "COMO POSSO TE AJUDAR", "DEPOIMENTOS", "CONTATO"];

  return (
    <>
      <Container mx='auto' centerContent={true}>
        <Flex id={slugify(menuItems[0])} w='100%' alignItems={'center'} justifyContent={'center'} bgImage={'assets/v2/fundo-1.png'} bgPos={'bottom'} bgRepeat={'no-repeat'} bgSize={'cover'} bgColor={'oceanBg'}>
          <Main2v isMobile={isMobile} menuItems={menuItems} />
        </Flex>
        <Flex id={slugify(menuItems[1])} w='100%' alignItems={'center'} justifyContent={'center'} bgColor={'oceanBg'} flexDir={'column'} pb={[12, 12, 12, 40, 40]}>
          <Meaning />
        </Flex>
        <Flex w='100%' alignItems={'center'} justifyContent={'center'} bgColor={'oceanBg'} flexDir={'column'} bgImage='assets/waves.png' bgPos={'top right'} bgRepeat={'no-repeat'} bgSize={360} >
          <Agende isMobile={isMobile} menuItems={menuItems}/>
        </Flex>
        <Flex id={slugify(menuItems[2])} w='100%' alignItems={'center'} justifyContent={'center'} bgColor={'oceanBg'} flexDir={'column'} bgImage='assets/waves-cyan.png' bgPos={'top'} bgRepeat={'no-repeat'} bgSize={'cover'} >
          <Benefits menuItems={menuItems}/>
        </Flex>
        <Flex id={slugify(menuItems[3])} w='100%' alignItems={'center'} justifyContent={'center'} bgColor={'oceanBg'} flexDir={'column'} bgImage='assets/v2/fundo-2.png' bgPos={'top'} bgRepeat={'no-repeat'} bgSize={'cover'} >
          <FeedbacksCarousel />
          <Flex id={slugify(menuItems[4])} w='100%' alignItems={'center'} justifyContent={'center'} flexDir={'column'} bgImage='assets/v2/wave-sand.png' bgPos={'top'} bgRepeat={'no-repeat'} bgSize={'cover'} >
            <ContactForm />
          </Flex>
        </Flex>
        <Flex w='100%' alignItems={'center'} justifyContent={'center'} flexDir={'column'} >
          <Mapa />
        </Flex>
        <Flex w='100%' alignItems={'center'} justifyContent={'center'} flexDir={'column'} bgColor={'oceanBg'} color={'white'} >
          <FooterV2 />
        </Flex>
        {/* <Main /> */}
        {/* <Freedom /> */}
        {/* <Liberty /> */}
        {/* <WhatCanIHelp /> */}
        {/* <CanIHelp /> */}
        {/* <Psicotherapy /> */}
        {/* <About/> */}
        {/* <Supera/> */}
        {/* <CareerOrientation /> */}
        {/* <Curriculum /> */}
        {/* <Feedbacks /> */}
        {/* <PsicologiaClinica/> */}
        {/* <Where /> */}
        {/* <Footer /> */}
      </Container>
    </>
  )
}
