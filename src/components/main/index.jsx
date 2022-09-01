import React from 'react'
import {
    Container,
    Flex,
    Box,
    Image,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Spacer
} from '@chakra-ui/react'
import { FiSearch, FiPlusSquare, FiShoppingCart, FiMaximize } from 'react-icons/fi';
import Cards from './cards';
import pic from '../../assets/pic.png'

const Main = () => {
    return (
        <Box mt={10} ml={10} mr={10} fontFamily='Roboto, sans-serif'>
            <Flex mb={50} >
                <Box>
                    <Text as='b' color='white' fontSize={25} >Dashboard</Text>
                    <Text color='#FFFFFF' fontSize={12}>See your account information in here!</Text>
                </Box>
                <Spacer />
                <Box>
                    <InputGroup width={300} bg='#2E323C' color='white' borderColor='transparent' rounded='md'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FiSearch color='gray.300' />}
                        />
                        <Input type='text' color='white' placeholder="Can't find something, search here" />
                    </InputGroup>
                </Box>
                <Spacer />
                <Box>
                    <Button leftIcon={<FiPlusSquare color='white' />} color='white' bg='linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%)' variant='solid'>
                        Make a new product
                    </Button>
                </Box>
            </Flex>

            <Box h={320} w='100%' bg='linear-gradient(95.71deg, #232731 -14.7%, #394359 123.09%)' rounded='3xl' boxShadow='md'>
                <Flex>
                    <Box mt={10} ml={10} width='60%'>
                        <Text as='b' color='white' fontSize={25}>Special premium account!</Text>
                        <Text color='white' fontSize={15} mt={8}>
                            With a special premium account, you can do very interesting things!<br></br>
                            By purchasing this account, special features will be activated for you that
                            you will be amazed to see!
                        </Text>
                        <Flex mt={10} gap={10}>
                            <Button rightIcon={<FiShoppingCart color='white' />} color='white' bg='linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%)' variant='solid' boxShadow='md'>
                                Account purchase
                            </Button>
                            <Button rightIcon={<FiMaximize color='white' />} color='white' bg='linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%)' variant='solid' boxShadow='md'>
                                View features
                            </Button>
                        </Flex>
                    </Box>
                    <Image src={pic} ml={8} mt={5} />
                </Flex>
            </Box>
            <Cards />
        </Box>
    )
}

export default Main