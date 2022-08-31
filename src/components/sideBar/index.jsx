import React from 'react'
import {
    Container,
    Flex,
    Spacer,
    Box,
    Center,
    Text,
    Heading,
    Avatar
    // Square
} from '@chakra-ui/react'
import { FiGrid, FiBarChart2, FiTrendingUp, FiPieChart, FiInbox, FiSettings, FiChevronDown } from 'react-icons/fi';

const SideBar = () => {
    return (
        <Container>
            <Box mt={10}>
                <Heading as='h3' size='lg' color='#80D0C7'>
                    Meri UI
                </Heading>
                <Text color='white'>Black theme</Text>
            </Box>
            <Flex direction='column' pt={50} gap={7}>
                <Box w={140} h={43} color='white' bg='linear-gradient(95.71deg, #394359 -14.7%, #232731 123.09%)' rounded='md' boxShadow='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiGrid />
                                <Spacer />
                                <Text ml={2}>Dashboard</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
                <Box w={140} h={43} color='#8B8C91' bg='transparent' rounded='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiBarChart2 />
                                <Spacer />
                                <Text ml={2}>Campaigns</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
                <Box w={140} h={43} color='#8B8C91' bg='transparent' rounded='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiTrendingUp />
                                <Spacer />
                                <Text ml={2}>Reports</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
                <Box w={140} h={43} color='#8B8C91' bg='transparent' rounded='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiPieChart />
                                <Spacer />
                                <Text ml={2}>Analytics</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
                <Box w={140} h={43} color='#8B8C91' bg='transparent' rounded='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiInbox />
                                <Spacer />
                                <Text ml={2}>Inbox</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
                <Box w={140} h={43} color='#8B8C91' bg='transparent' rounded='md'>
                    <Center mt={2}>
                        <Flex>
                            <Center>
                                <FiSettings />
                                <Spacer />
                                <Text ml={2}>Setting</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Flex>
            <Box mt={10} h={50} w={150} rounded='md' bg='linear-gradient(95.71deg, #394359 -14.7%, #232731 123.09%)'>
                <Center>
                    <Flex mt={2}>
                        <Center gap={4}>
                            <Avatar size='sm' name='Proc' src='https://avatars.githubusercontent.com/u/72831371?v=4' />
                            <Text color='white' size='md'>Proc</Text>
                            <FiChevronDown color='white' />
                        </Center>
                    </Flex>
                </Center>
            </Box>
        </Container>
    )
}

export default SideBar