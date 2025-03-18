import { slugify } from "@/utils";
import { IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { List } from "phosphor-react";

interface MobileNavBarProps {
    menuItems: string[]
    scrollToSection: (id: string) => void; // Adiciona a prop

}
export function MobileNavBar({ menuItems, scrollToSection }: MobileNavBarProps) {

    return (
        <Menu >
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<List />}
                variant='outline'
                border={'1px solid #00000011'}
                boxShadow={'md'}
                bgColor='dirtBg'
            />
            <MenuList w='100vw' border='1px solid #00000011' boxShadow={'md'} p={2} mt={4} bgColor='dirtBg'>
                {menuItems.map((item, idx) => {
                    const itemId = slugify(item); // Gera o ID a partir do texto
                    return (

                        <MenuItem key={item + idx} w='100%' p={2} justifyContent={'center'} onClick={() => scrollToSection(itemId)} cursor="pointer"  _hover={{color:'ocyan', borderBottom:'1px solid #87c0c255', transition:'300ms'}}>
                            <Text borderBottom='1px solid #00000011'> {item}</Text>
                        </MenuItem>
                    )
                })}
            </MenuList>

        </Menu>
    )
}