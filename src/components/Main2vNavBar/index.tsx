import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import { List } from "phosphor-react";
import { MobileNavBar } from "./MobileNavBar";
import { slugify } from "@/utils";


interface Main2vNavBarProps {
    isMobile?: boolean
    scrollToSection: (id: string) => void; // Adiciona a prop
    menuItems:string[]
}
export function Main2vNavBar({ isMobile, scrollToSection, menuItems }: Main2vNavBarProps) {


    return (
        <Flex py={8} w='100%' px={[8, 8, 8, 0, 0]} bgColor={'dirtBg'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} w='100%'>

                <Flex>
                    <Image src={"assets/v2/logo.png"} maxW={[28, 28, 28, 36, 36]} />
                </Flex>

                {isMobile ?
                    <MobileNavBar menuItems={menuItems} scrollToSection={scrollToSection} />
                    :

                    <Flex gap={8}>
                        {menuItems.map((item, idx) => {
                            const itemId = slugify(item); // Gera o ID a partir do texto
                            return (

                                <Flex key={item + idx} letterSpacing={1.5} onClick={() => scrollToSection(itemId)} cursor="pointer">
                                    <Text fontSize={12} fontWeight={'medium'}  _hover={{color:'ocyan', borderBottom:'1px solid #87c0c255', transition:'300ms'}}>{item}</Text>
                                </Flex>
                            )
                        })}
                    </Flex>
                }
            </Flex>
        </Flex>
    )
}