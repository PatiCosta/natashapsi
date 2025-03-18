import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { InstagramLogo, MapPin, Phone, WhatsappLogo } from 'phosphor-react';
import { MdEmail } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { mapsLink, whatsappLink } from '@/utils';
import { useForm, FormProvider } from 'react-hook-form';

//Você pode usar outros ícones, se preferir.

// Interface para os dados do formulário (opcional, mas recomendado)
interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  cityState: string;
  message: string;
}

export function ContactForm() {

  const labelColor = useColorModeValue("white", "gray.400"); // Cor para os rótulos

  const methods = useForm<ContactFormValues>();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;

  // Função para lidar com o envio do formulário (substitua pela sua lógica real)
  const onSubmit = (data: ContactFormValues) => {
    console.log('onsubmite')
    const message = `Contato via Formulário do Site:

    Nome: ${data.name}
    Telefone: ${data.phone}
    E-mail: ${data.email}
    Cidade/Estado: ${data.cityState}
    Mensagem: ${data.message}
    `;

    const encodedMessage = encodeURIComponent(message); // Codifica a mensagem!
    const link = whatsappLink(encodedMessage);     // Chama a função com a mensagem.
    window.open(link, '_blank');              // Abre em uma nova aba.
  };

  return (
    <Flex
      // direction={{ base: 'column', md: 'column' }} // Coluna em telas pequenas, linha em telas médias/grandes
      align="start" // Alinha os itens no topo
      justifyContent="space-between" // Espaço entre as colunas
      color={'white'}
      w='100%'
      my={[32, 32, 32, 40, 40]}
    >
      <Flex mx='auto' w='100%' px={[4, 4, 4, 40, 40]} gap={[4, 4, 4, 12, 12]} flexDir={['column', 'column', 'column', 'row', 'row']}>
        {/* Coluna de Contato (Esquerda) */}
        <Flex flexDir={'column'} mb={{ base: 8, md: 0 }} pr={{ md: 8 }} w='100%' > {/* Margem inferior em telas pequenas */}
          <Text fontSize="5xl" mb={4}>
            CONTATO
          </Text>
          <VStack align="start" spacing={2} color='white'> {/* Cor do texto mais clara */}
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
            <Link href={mapsLink} isExternal>
              <Flex alignItems={'center'} gap={2}>
                <PiMapPinAreaFill />
                <Text>Avenida Professor Othon Gama Deça, 677 - Sala 904</Text>
              </Flex>
            </Link>
            <Text>Centro - Florianópolis SC</Text>

          </VStack>
        </Flex>

        {/* Coluna do Formulário (Direita) */}
        <Flex flexDir={'column'} as="form" onSubmit={handleSubmit(onSubmit)} w='100%' alignItems={'start'} textAlign={'start'} justifyContent={'start'}>
          <Flex flexDir={'column'} gap={4} w='100%'>
            <FormControl isRequired>
              <FormLabel color={labelColor}>Nome</FormLabel>
              <Input {...register("name")} bgColor={'terraBg'} color='white' _placeholder={{ color: 'whiteAlpha.600' }} borderBottom={'1px solid #FFFFFFbb'} type="text" name="name" placeholder="Seu nome" w='100%' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={labelColor}>Telefone</FormLabel>
              <Input {...register("phone")} bgColor={'terraBg'} color='white' _placeholder={{ color: 'whiteAlpha.600' }} borderBottom={'1px solid #FFFFFFbb'} type="tel" name="phone" placeholder="(XX) X XXXX-XXXX" w='100%' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={labelColor}>E-mail</FormLabel>
              <Input {...register("email")} bgColor={'terraBg'} color='white' _placeholder={{ color: 'whiteAlpha.600' }} borderBottom={'1px solid #FFFFFFbb'} type="email" name="email" placeholder="Seu e-mail" w='100%' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={labelColor}>Cidade/Estado</FormLabel>
              <Input {...register("cityState")} bgColor={'terraBg'} color='white' _placeholder={{ color: 'whiteAlpha.600' }} borderBottom={'1px solid #FFFFFFbb'} type="text" name="cityState" placeholder="Ex: Florianópolis/SC" w='100%' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={labelColor}>Mensagem</FormLabel>
              <Textarea {...register("message")} bgColor={'terraBg'} color='white' _placeholder={{ color: 'whiteAlpha.600' }} borderBottom={'1px solid #FFFFFFbb'} name="message" placeholder="Sua mensagem" rows={2} w='100%' />
            </FormControl>

            <Button type="submit" color='terra' bgColor={'white'} fontSize={'xl'} borderRadius={40} w={32} isLoading={isSubmitting}>
              Enviar
            </Button>
          </Flex>
        </Flex>
      </Flex>

    </Flex>
  );
};

export default ContactForm;