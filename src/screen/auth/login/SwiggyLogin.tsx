import React from 'react'
import { Box, AspectRatio, Center, Text, Stack, Heading, HStack, Image, View, Input, Button } from "native-base";
import { background } from 'native-base/lib/typescript/theme/styled-system';
import Swiggy from "../../../public/logo/Swiggy.png"
import Burg from "../../../public/logo/Burg.jpg";
import { StyleSheet } from 'react-native';
import { CusButton } from '../../../component/Button';

export const SwiggyLogin = () => {
    return (
        <View>
            {/* first App logo */}
            <Center backgroundColor="white">
                <View marginTop={7}>
                    <Image source={Swiggy} width={150} height={10} />
                </View>
            </Center>

            {/* Secong logo with text */}
            <View margin={10}>
                <HStack space={3} alignItems="center">
                    <Image source={Burg} width={100} height={90} />
                    <View flex={1}>
                        <Text fontSize="30px" bold>Restaurants</Text>
                        <Text fontSize="20px">in your pocket</Text>
                    </View>
                </HStack>
            </View>

            {/* input for register form */}
            <View>
                <Stack space={7} w="90%" maxW="350px" mx="auto">
                    <Input variant="outline" size="2xl" placeholder="Name" />
                    <Input variant="outline" size="2xl" placeholder="Email" />
                    <Input variant="outline" size="2xl" placeholder="Password" />
                </Stack>

                <CusButton text={"Create Account"} color={"#F4801B"} marginTop={40} />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    btnStyle: {
        marginTop: 30
    }
})