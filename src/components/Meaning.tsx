import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Signpost } from "phosphor-react";
import { MdSignpost } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";


export function Meaning() {

    const iconSize = useBreakpointValue({ base: 32, sm: 32, md: 32, lg: 48, xl: 48 })

    return (

        <Flex maxW={1080} w='100%' justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={[12]}>

            <Flex flexDir={'column'} gap={8} mt={16} justifyContent={'center'} alignItems={'center'}>

                <Flex fontSize={['3xl','3xl','3xl','4xl','4xl']} fontWeight={'medium'} display={'inline'} mx='auto' color={'ocyan'} textAlign={'center'} px={[4,4,4,0,0]}>
                    Meu
                    <Flex display={'inline'} fontWeight={'bold'}> próposito </Flex>  é ajudar as pessoas a viverem uma
                    <Flex display={'inline'} fontWeight={'bold'}> vida com significado </Flex>
                </Flex>

                <Flex fontSize={[14,14,14,'md','md']} px={[4,4,4,0,0]}>
                    <Flex textAlign={'center'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} color={'white'} gap={2}>
                        <Flex fontWeight={'medium'}>E o que seria uma Vida com Significado?</Flex>
                        <Flex>Uma vida vivida com liberdade! Uma vida vivida em base ao que mais importa!</Flex>
                        <Flex>Uma vida que nos permitimos saber e ser a nós mesmos apesar do que nos aconteceu.</Flex>
                    </Flex>
                </Flex>

                <Flex w='100%' justifyContent={'center'} gap={[2,2,2,8,8]} fontSize={['sm','sm','sm','lg','lg']}>
                    <Flex flexDir={'column'} alignItems={'center'} justifyContent={'end'} textAlign={'center'} color={'white'} gap={4} bgColor={'ocyan'} p={[1,1,1,10,10]} borderRadius={32} boxShadow={['2xl']}>
                        <MdSignpost size={iconSize} />
                        <Text> LIBERDADE DE <br></br> <b>ESCOLHA</b></Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'} justifyContent={'end'} textAlign={'center'} color={'white'} gap={4} bgColor={'ocyan'} p={[1,1,1,10,10]} borderRadius={32} boxShadow={['2xl']}>
                        <TfiTarget size={iconSize} />
                        <Text> LIBERDADE DE <br></br> <b>AÇÃO</b></Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'} justifyContent={'end'} textAlign={'center'} color={'white'} gap={4} bgColor={'ocyan'} p={[1,1,1,10,10]} borderRadius={32} boxShadow={['2xl']}>
                        <Image src={'assets/v2/n-icon.png'} maxW={[8,8,8,16,16]} />
                        <Text> LIBERDADE DE <br></br> <b>SER</b></Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}