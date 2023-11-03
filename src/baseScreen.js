// create base screen for test out flow app

import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const baseScreen = ({route, navigation}) => {
    const userName = "nhatlinh"
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <View
                        style={{
                            flexDirection : 'row'
                        }}
                    >
                        <Image
                            source={require('../assets/avt.jpg')}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius : 50
                            }}
                        />
                        <View>
                            <Text style={{fontSize : 17, fontWeight : 750, paddingLeft : 10}}>Hi {userName}</Text>
                            <Text style={{fontSize : 15, fontWeight : 600}}>Have agreate day a head</Text>
                        </View>
                    </View>
                </View>
            ),
        });
    }, [userName, navigation]);

    return (
        <View>
            <Text>haloo</Text>
            <Image
                source={require('../assets/headerSample.png')}
                style={{
                    width : '100%',
                    height: 200
                }}
            />
        </View>
    )
}

export default baseScreen

const styles = StyleSheet.create({})
