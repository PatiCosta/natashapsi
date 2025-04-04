import {
  Button as ChakraButton,
  Text,
  ButtonProps as ChakraButtonProps,
  Link,
} from '@chakra-ui/react'
import { CaretRight } from 'phosphor-react'

interface ButtonProps extends ChakraButtonProps {
  variant: 'light' | 'dark'
  text: string
  prevText?: string
}

export function Button({ variant, text, prevText, ...rest }: ButtonProps) {

  const href = `https://wa.me/4899985535?text=${prevText}`

  return (
    <ChakraButton
      bgColor={variant === 'light' ? 'whiskey' : 'bitter'}
      py={{ base: 2, lg: 6 }}
      px={{ base: 3, lg: 8 }}
      _hover={{ bgColor: variant === 'light' ? 'brass' : 'siam' }}
      display="flex"
      alignItems="center"
      gap={2}
      borderRadius="lg"
      borderBottomLeftRadius="sm"
      fontWeight="light"
      as={Link}
      href={href}
      target="_blank"
      w="fit-content"
      {...rest}
    >
      <Text
        size={{ base: 'sm', lg: 'lg' }}
        color="alabaster"
        lineHeight={{ base: 'sm', lg: 'lg' }}
      >
        {text}
      </Text>
      <CaretRight size={18} color="#fbfbfb" weight="light" />
    </ChakraButton>
  )
}
