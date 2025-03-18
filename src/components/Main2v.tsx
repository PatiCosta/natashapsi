import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import { List } from "phosphor-react";
import { Main2vNavBar } from "./Main2vNavBar";
import { About } from "./About";
import { scrollToSection } from "@/utils";


interface Main2v {
    isMobile?: boolean
    menuItems:string[]
}
export function Main2v({ isMobile, menuItems }: Main2v) {

    return (
        <Flex maxW={1080} w='100%' justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
            <Main2vNavBar isMobile={isMobile} scrollToSection={scrollToSection} menuItems={menuItems}/>
            <About isMobile={isMobile} />
            <Flex h={[40, 40, 40, 72, 72]} />

        </Flex>
    )
}

