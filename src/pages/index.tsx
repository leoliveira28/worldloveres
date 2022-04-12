import { Box, Flex, HStack } from '@chakra-ui/react'
import { Banner } from '../components/Banner';
import { Header } from '../components/Header'

export default function Home(){
  return (
    <>
    <Flex direction="column">
    <Header />
    </Flex>
    <Banner />
        </>
  );
}

