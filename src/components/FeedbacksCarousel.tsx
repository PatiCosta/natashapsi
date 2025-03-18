


import React, { useState } from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';
import { PiStarFill } from 'react-icons/pi';
import { IoMdStar } from 'react-icons/io';
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
interface CarouselItem {  // Interface para CADA item (depoimento)
    initials: string;
    testimonial: string;
    stars: number; // Número de estrelas (1 a 5)
}

interface CarouselProps {
    items: CarouselItem[];
}

const testimonials = [
    {
        initials: 'A.C',
        testimonial: "1 Psicóloga excepcional, dedicada, demonstra amar o que faz. Me ajudou em momentos importantes na vida pessoal e profissional, mostrando a importância de valorizarmos diariamente, todo o aprendizado que os desafios nos proporcionam.",
        stars: 5,
    },
    {
        initials: 'A.C',
        testimonial: "2 Psicóloga excepcional, dedicada, demonstra amar o que faz. Me ajudou em momentos importantes na vida pessoal e profissional, mostrando a importância de valorizarmos diariamente, todo o aprendizado que os desafios nos proporcionam.",
        stars: 5,
    },
    // ... adicione mais depoimentos ...
];

export function FeedbacksCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    if (testimonials.length === 0) {
        return <div>Nenhum depoimento para exibir.</div>; // Ou um placeholder
    }

    const currentItem = testimonials[currentIndex];

    return (
        <Flex flexDir={'column'} my={40}>
            <Flex justifyContent={'center'} alignItems={'center'} overflow="hidden" gap={[2,2,2,24,24]}>
                {/* Container centralizado com cantos arredondados e sombra */}
                <Flex>
                    <IconButton
                        aria-label="Anterior"
                        _hover={{ color: 'white' }}
                        icon={<CaretCircleLeft weight="fill" />}
                        onClick={prevSlide}
                        zIndex={2}
                        fontSize={50}
                        variant="ghost"
                        color="#18424e"
                        isDisabled={testimonials.length <= 1} // Desabilita se houver apenas um item
                    />
                </Flex>

                <Flex
                    direction="column"
                    align="center"
                    justifyContent={'center'}
                    maxW={["100%","100%","100%","2xl","2xl"]} // Largura máxima (ajuste conforme necessário)
                    mx="auto" // Centraliza horizontalmente
                    p={[2,2,2,6,6]} // Padding
                    bg="white" // Fundo branco (ajuste conforme necessário)
                    borderRadius={40} // Bordas arredondadas
                    boxShadow="lg" // Sombra suave
                    position="relative" // Para posicionar as setas
                    mt={10}
                    mb={10}
                >
                    {/* Iniciais */}
                    <Text fontSize="2xl" fontWeight="medium">
                        {currentItem.initials}
                    </Text>

                    {/* Depoimento */}
                    <Text fontSize={["sm","sm","sm","md","md"]} mb={4} textAlign="center" fontStyle={'italic'} p={8} lineHeight={1.8}>
                        "{currentItem.testimonial}"
                    </Text>

                    {/* Estrelas */}
                    <Flex mb={4}>
                        {Array.from({ length: currentItem.stars }).map((_, index) => (
                            <IoMdStar key={index} color="#18424e" size={24} /> // Cor das estrelas (exemplo) aa
                        ))}
                    </Flex>
                </Flex>

                <Flex>
                    <IconButton
                        aria-label="Anterior"
                        _hover={{ color: 'white' }}
                        icon={<CaretCircleRight weight="fill" />}
                        onClick={nextSlide}
                        zIndex={2}
                        fontSize={50}
                        variant="ghost"
                        color="#18424e"
                        isDisabled={testimonials.length <= 1} // Desabilita se houver apenas um item
                    />
                </Flex>
            </Flex>
            <Flex w='100%' alignItems={'center'} justifyContent={'center'}>
                <Text fontWeight={'medium'} color={'ocean'} letterSpacing={2} fontSize={'lg'}>
                    VIVA COM SIGNIFICADO
                </Text>
            </Flex>
        </Flex>
    );
}
