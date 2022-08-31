import React from 'react'
import {
    Box,
    Flex,
    Spacer,
    Avatar,
    Text,
    Center,
    Button
} from '@chakra-ui/react'
import { FiUsers, FiTrendingDown } from 'react-icons/fi';

const Cards = () => {
    return (
        <Box mt={8}>
            <Flex>
                <Box w={260} h={150} bg='linear-gradient(119.15deg, #2E374B -13.54%, #292F3C 118.09%)' rounded='3xl'>
                    <Flex m={5} direction='column'>
                        <Flex w='100%' mb={5}>
                            <Avatar size='sm' bg='teal.500' icon={<FiUsers fontSize='1.2rem' />} />
                            <Spacer />
                            <Flex direction='column'>
                                <Center>
                                    <FiTrendingDown color='red' height={15} />
                                    <Text ml={3} as='b' color='white' >1.2%</Text>
                                </Center>
                                <Text color='#B6B7BC' fontSize={12}>This month</Text>
                            </Flex>
                        </Flex>
                        <Flex w='100%'>
                            <Flex direction='column'>
                                <Text color='#B6B7BC' fontSize={12}>Total</Text>
                                <Text as='b' color='white' >1000</Text>
                            </Flex>
                            <Spacer />
                            <Center>
                                <Button colorScheme='teal' size='sm'>
                                    See info
                                </Button>
                            </Center>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Box>Hey</Box>
                <Spacer />
                <Box>Hey</Box>
            </Flex>
        </Box>
    )
}

export default Cards