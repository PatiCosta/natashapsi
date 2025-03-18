import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"


interface AboutProps {
    isMobile?: boolean
}

export function About({ isMobile }: AboutProps) {


    return (
        <Flex flexDir={'column'} gap={[12, 12, 12, 24, 24]} w='100%' p={[6, 6, 6, 0, 0]}>

            <Flex w='100%' flexDir={['column', 'column', 'row', 'row', 'row']} gap={[8, 8, 8, 0, 0]}>
                <Flex w='100%' alignItems={'center'} justifyContent={'center'}>
                    <Image src={"assets/v2/main.png"} objectFit={'contain'} w={'100%'} pr={[0, 0, 0, 32, 32]} />
                </Flex>
                <Flex w='100%' flexDir={'column'} gap={8}>
                    <Image src={"assets/v2/logo-2.png"} objectFit={'contain'} />
                    <MainText />
                </Flex>
            </Flex>

            <Flex w='100%' flexDir={['column', 'column', 'row', 'row', 'row']}>
                <Flex w='100%' flexDir={'column'} gap={[4,4,4,8,8]} alignItems={'end'} >
                    <Flex bgColor={'bourbon'} color={'white'} px={4} py={2} fontSize={['md','md','md','2xl','2xl']} fontWeight={'medium'} borderRadius={12} textAlign={'end'}> Combinando esses conhecimentos..</Flex>
                    <MainText2 />
                </Flex>

                {isMobile ?
                    ''
                    :
                    <Flex w='100%'>
                        <Image src={"assets/v2/main-2.png"} objectFit={'contain'} w='100%' pl={[0, 0, 0, 32, 32]} />
                    </Flex>
                }
            </Flex>

        </Flex>
    )
}



function MainText() {

    return (
        <Flex fontWeight={'medium'} lineHeight={['', '', '', 1.8, 1.8]} display={'inline'} fontSize={['md', 'md', 'md', 17, 17]}>
            Sou <Flex display={'inline'} fontWeight={'bold'} color={'bourbon'}> Psicóloga Clínica</Flex>, com Pós-Graduação em Avaliação Psicológica e Análise Comportamental Clínica. Minha jornada profissional sempre foi guiada pelo propósito de ajudar as pessoas a encontrarem significado em suas vidas, mesmo diante da dor.
            <br></br> <br></br>
            Ser Psicóloga Clínica é algo que me traz imensa satisfação! É, ao mesmo tempo, um grande desafio e uma responsabilidade, mas também uma fonte de alegria e privilégio. Minha atuação como Analista do Comportamento foca em trauma e luto, utilizando abordagens das terapias contextuais, como a FAP (Psicoterapia Analítica Funcional) e a ACT (Terapia de Aceitação e Compromisso).
        </Flex>
    )
}
function MainText2() {

    return (
        <Flex fontWeight={'medium'} lineHeight={['', '', '', 1.8, 1.8]} display={'inline'} fontSize={['md', 'md', 'md', 17, 17]} textAlign={'end'}>
            Com base na minha experiência prática como psicoterapeuta e na minha própria trajetória, ofereço um trabalho profundo e personalizado.
            <Flex display={'inline'} fontWeight={'bold'} color={'bourbon'}> Meu objetivo é compreender a sua história de vida</Flex>, identificando como ela influencia sua realidade atual e sua forma de perceber e lidar com o mundo ao seu redor. A partir dessa compreensão, trabalhamos juntos para entender o seu funcionamento, descobrir o que realmente importa para você e desenvolver novas habilidades que permitam construir uma vida com propósito e significado em todas as áreas importantes para você.
        </Flex>
    )
}