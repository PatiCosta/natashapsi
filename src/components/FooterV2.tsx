import { whatsappLink } from "@/utils";
import { Flex, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import { InstagramLogo, List, WhatsappLogo } from "phosphor-react";
import { MdEmail } from "react-icons/md";


interface Main2vNavBarProps {
    isMobile?: boolean
}
export function FooterV2({ isMobile }: Main2vNavBarProps) {

    const menuItems = ["QUEM SOU EU", "MEU PROPÓSITO", "COMO POSSO TE AJUDAR", "DEPOIMENTOS", "CONTATO"];

    return (
        <Flex maxW={1080} w='100%' justifyContent={'center'} alignItems={'center'} flexDir={'column'} >
            <Flex py={8} w='100%'>
                <Flex alignItems={'center'} justifyContent={'space-between'} w='100%' flexDir={['column', 'column', 'column', 'row', 'row']} gap={8}>

                    <Flex>
                        <Image src={"assets/v2/footer-logo.svg"} maxW={80} />
                    </Flex>

                    <Flex gap={[2, 2, 2, 8, 8]} flexDir={['column', 'column', 'column', 'row', 'row']}>
                        <Link href={whatsappLink()} isExternal>
                            <Flex alignItems={'center'} gap={2}>
                                <WhatsappLogo weight="fill" />
                                <Text>48 9 9998.5535</Text>
                            </Flex>
                        </Link>
                        <Flex alignItems={'center'} gap={2}>
                            <InstagramLogo weight="fill" />
                            <Link href="https://www.instagram.com/natashamacedopsi/" isExternal>
                                natashamacedopsi
                            </Link>
                        </Flex>
                        <Flex alignItems={'center'} gap={2}>
                            <Icon as={MdEmail} />
                            <Link href="mailto:natashamacedopsicologia@gmail.com">
                                natashamacedopsicologia@gmail.com
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}