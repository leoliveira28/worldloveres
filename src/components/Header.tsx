import { Flex, Grid, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Flex as='header'
            w='100%'
            h={['50px', '100px']}
            mx='auto'
            px='1rem'
            marginX='auto'
            justify='center'
            align='center'
        >
            <Grid
                h='100%'
                mx='auto'
                w={["81px", "184px"]}
                maxW='1160px'
                alignItems='center'
                templateColumns='repeat(3, 1fr)'
                justifyContent='center'
            >
                   <Image src='./static/Logo.png' alt='logo' w={['81px', '184px']}
                    justifySelf='center' gridColumn='2' />
            </Grid>


        </Flex>
    );
}