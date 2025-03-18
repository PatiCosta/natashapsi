import { scrollToSection, slugify } from "@/utils";
import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Signpost } from "phosphor-react";
import { MdSignpost } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";


interface BenefitsProps {
    menuItems: string[]
}

export function Benefits({ menuItems }: BenefitsProps) {

    return (

        <Flex maxW={1080} w='100%' justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={12} p={[8, 8, 8, 0, 0]}>

            <Flex flexDir={'column'} mt={40} mb={20} gap={12}>

                <Flex>
                    <Image src='assets/pc.png' w='100%' />
                </Flex>

                <Flex fontSize={['3xl', '3xl', '3xl', '5xl', '5xl']} fontWeight={'medium'} display={'inline'} mx='auto' color={'ocean'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                    <Text> Psicoterapia individual</Text>
                    <Text fontWeight={'bold'}>para adultos</Text>
                </Flex>

                <Flex gap={[4, 4, 4, 40, 40]} mx='auto' flexDir={['column', 'column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'}>

                    <Flex gap={4} flexDir={['column', 'column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                        <Flex>
                            <Image src='assets/v2/note.png' maxW={24} />
                        </Flex>
                        <Flex flexDir={'column'}>
                            <Text fontWeight={'bold'}> ONLINE</Text>
                            <Text color={'white'} >
                                para todo o Brasil e fora do Brasil
                                <br></br>
                                (brasileiros residentes no exterior)
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex gap={4} flexDir={['column', 'column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                        <Flex>
                            <Image src='assets/v2/map.png' maxW={[20, 20, 20, 16, 16]} />
                        </Flex>
                        <Flex flexDir={'column'}>
                            <Text fontWeight={'bold'}> PRESENCIAL</Text>
                            <Text color={'white'}> Florianópolis-SC</Text>
                        </Flex>
                    </Flex>

                </Flex>

                <Flex
                    direction="column" // Organiza os itens verticalmente
                    align="start"    // Centraliza os itens horizontalmente
                    justify="center"  // Centraliza os itens verticalmente (opcional, dependendo do layout desejado)
                    maxW="container.md" // Largura máxima (ajuste conforme necessário)
                    mx="auto"       // Centraliza o container na página
                    textAlign={"start"} //Centraliza o texto
                    color={'white'}
                    fontSize={17}
                    fontWeight={'medium'}
                    gap={4}
                >
                    <Text fontSize={["3xl"]} fontWeight="bold" color={'ocean'} textAlign={'center'}>
                        Benefícios da Psicoterapia
                    </Text>


                    <Flex flexDir={'column'}>
                        <Text mb={2} fontWeight={'bold'}>
                            O processo de Psicoterapia ajuda a:
                        </Text>
                        <Text _before={{ content: '"•"', color: 'ocean', mr: '2', ml: '-4', fontSize: '24px' }}>Compreender as consequências da própria história no momento atual</Text>
                        <Text _before={{ content: '"•"', color: 'ocean', mr: '2', ml: '-4', fontSize: '24px' }}>Organizar pensamentos, sentimentos e crenças relacionados às situações difíceis na vida</Text>
                        <Text _before={{ content: '"•"', color: 'ocean', mr: '2', ml: '-4', fontSize: '24px' }}>Atravessar por todas as consequências decorrentes dos acontecimentos dolorosos</Text>
                        <Text _before={{ content: '"•"', color: 'ocean', mr: '2', ml: '-4', fontSize: '24px' }}>Planejar e viver a vida apesar dessas situações que causam dor.</Text>
                    </Flex>

                    <Text>
                        Trazer fluidez para a vida, reorganizar a forma de estar no mundo leva um tempo, mas traz
                        alívio, segurança, compreensão, crescimento, o que torna possível viver uma vida com
                        significado apesar das dificuldades.
                    </Text>


                    <Button bgColor={'ocean'} color={'white'} borderRadius={24} fontSize={'18'} fontWeight={'bold'} p={6} _hover={{ bgColor: 'terra' }} mx='auto' mt={8} onClick={() => scrollToSection(slugify(menuItems[4]))}>
                        Quero fazer psicoterapia individual
                    </Button>


                </Flex>
            </Flex>
        </Flex>
    )
}