import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Slider() {
    return (
        <Flex w="100%" maxW="1248px" mx="auto" mb={["5", "10"]} h={["256px", "450px"]}>
            <Swiper slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{clickable: true}}
            autoplay={{delay: 4000}}
            style={{width: "100%", flex: "1"}}>
            <SwiperSlide>
                <Flex
                w="100%"
                h="100%"
                justify="center"
                direction="column"
                bgImage="url(https://assistentedeviagem.com.br/blog/wp-content/uploads/2021/01/3-roteiros-europa-prontos.jpg)"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                bgPosition="center">
                    <Link href="/continent/europe">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo</Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                w="100%"
                h="100%"
                justify="center"
                direction="column"
                bgImage="url(https://s2.glbimg.com/kChpmqDhAD8w2kOlbjd45FQnfPs=/e.glbimg.com/og/ed/f/original/2020/12/07/1280px-civic_centre_at_night_lagos_nigeria.jpg)"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                bgPosition="center">
                    <Link href="/continent/europe">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo</Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
        </Swiper>
        </Flex>
    )
}