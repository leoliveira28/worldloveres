import { Box, Flex, HStack } from '@chakra-ui/react'
import { Banner } from '../components/Banner';
import { Caracteristicas } from '../components/Caracteristicas';
import { Header } from '../components/Header'
import { Separador } from '../components/Separador';

export default function Home(){
  return (
    <>
    <Flex direction="column">
    <Header />
    <Banner />
    <Caracteristicas />
    <Separador />
    </Flex>
    
        </>
  );
}

