import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Text, PopoverCloseButton, PopoverBody  } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";


export default function Infos() {
    return(
        <Flex align="center"
        justify="space-between"
        >
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">50</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">Paises</Text>
            </Flex>
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">60</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">linguas</Text>
            </Flex>
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">50</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">cidades +100
                <Popover>
                    <PopoverTrigger>
                        <span>
                            <Icon cursor="pinter" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]}
                            h={["10px", "16px"]}></Icon>
                        </span>
                        </PopoverTrigger>
                        <PopoverContent bg="gray.700" color="yellow.400">
                            <PopoverArrow bg="gray.700" />
                            <PopoverCloseButton />
                            <PopoverBody fontWeight="400" fontSize="lg">
                                Paris, Europa, Chile, Canadá, China
                            </PopoverBody>
                        </PopoverContent>
                        </Popover>
                        </Text>
            </Flex>
        </Flex>
    )
}