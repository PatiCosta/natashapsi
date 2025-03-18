import { scrollToSection, slugify } from "@/utils";
import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Signpost } from "phosphor-react";
import { MdSignpost } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";

interface AgendeProps {
    isMobile?: boolean
    menuItems: string[]
}

export function Agende({ isMobile, menuItems }: AgendeProps) {

    return (

        <Flex maxW={135 * 8} w='100%' justifyContent={'center'} alignItems={'center'} flexDir={'column'}>

            <Flex gap={4} p={4}>

                <Flex w='100%'>
                    <Flex textAlign={'start'} alignItems={'start'} justifyContent={'center'} flexDir={'column'} color={'white'} gap={4} fontWeight={'normal'} fontSize={['md', 'md', 'md', 18, 18]} lineHeight={2}>

                        <Flex display={'inline'}>
                            Desfrutar dessa liberdade pode ser complexo por
                            causa de acontecimentos da vida que não temos
                            controle e que podem causar traumas e dores
                            profundas. O processo de atravessar e conviver com
                            um trauma, um luto ou outras dores pode ser muito
                            difícil e afeta a nossa capacidade de escolha, de ação
                            e de sermos a nós mesmos.
                            <Flex display={'inline'} color={'ocyan'} fontWeight={'semibold'}>
                                {" "} Para que possamos viver
                                uma vida com significado é preciso olhar para o que
                                nos incomoda
                            </Flex>
                        </Flex>

                        <Flex>
                            Podemos aprender no amor, mas aprendemos muito
                            com as nossas dores. É desconfortável em alguma
                            medida, mas também é fonte riquíssima de
                            autoconhecimento.
                        </Flex>

                        <Flex>
                            <Image src='assets/a-vida.png' maxW={96} w='100%' />
                        </Flex>

                        <Flex display={'inline'}>
                            De amor, alegrias, incertezas, fracassos, realizações,
                            sofrimento, abundância, escassez, paz. Precisamos
                            entender e acomodar tudo o que nos acontece e achar
                            um significado na nossa vida apesar dos revezes. <Flex display={'inline'} fontStyle={'italic'}> Sei
                                que pode não ser fácil, mas vale a pena!</Flex>
                        </Flex>

                        <Button bgColor={'ocyan'} color={'white'} borderRadius={24} fontSize={'lg'} fontWeight={'bold'} p={6} _hover={{ bgColor: 'terra' }} onClick={() => scrollToSection(slugify(menuItems[4]))}>
                            Agende uma sessão
                        </Button>
                    </Flex>
                </Flex>

                {isMobile ?
                    '' :
                    < Flex w='100%' justifyContent={'center'}>
                        <Image src='assets/cel.png' objectFit={'contain'} objectPosition={'center'} maxW={360} />
                    </Flex>
                }

            </Flex>
        </Flex >
    )
}