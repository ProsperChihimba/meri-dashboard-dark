import React from 'react'
import {
    Box,
    Flex,
    Center,
    Text,
    Spacer,
    Image,
    Button,
    FormControl,
    Input,
    Divider,
    Highlight 
} from '@chakra-ui/react'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi';
import logpic from '../../assets/login.png'

const Login = () => {
    return (
        <Box m={50} fontFamily='Roboto, sans-serif'>
            <Flex>
                <Flex direction='column' mt={40} ml={20} mr={10} >
                    <Flex direction='column'>
                        <Text color='white' as='b' fontSize={40}>Sign In to</Text>
                        <Text color='white' as='b' fontSize={40}>Recharge Direct</Text>
                    </Flex>
                    <Flex direction='column' mt={5}>
                        <Text color='white' fontSize={15}>If you don’t an account</Text>
                        <Text color='white' fontSize={15}>
                            you can Register here!
                        </Text>
                    </Flex>
                    <Box h={200} w={200} bg='#DDA82A' filter='blur(157px)'></Box>
                </Flex>
                <Center >
                    <Image src={logpic} w='80%' />
                </Center>
                <Spacer />
                <Box mt={40} mr={10} >
                    <Center>
                        <FormControl>
                            <Flex direction='column'>
                                <Input type='email' placeholder='Enter Email' bg='#EAF0F7' w={300} h={35} mb={5} fontSize={12} />
                                <Input type='password' placeholder='Password' bg='#EAF0F7' w={300} h={35} fontSize={12} />
                                <Text textAlign='right' color='#C7C7C7' fontSize={12} mt={2}>Forget password?</Text>
                                <Button colorScheme='teal' size='sm' mt={8} mb={8}>
                                    Sign in
                                </Button>
                                <Divider />
                                <Flex mt={5}>
                                    <Button bg='white' leftIcon={<FiFacebook color='#1778F2' />} />
                                    <Spacer />
                                    <Button bg='white' leftIcon={<FiGithub color='black' />} />
                                    <Spacer />
                                    <Button bg='white' leftIcon={<FiTwitter color='#1778F2' />}/>
                                </Flex>
                            </Flex>
                        </FormControl>
                    </Center>
                </Box>
            </Flex>
        </Box>
    )
}

export default Login