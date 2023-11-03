import React from 'react'
import { View, Text } from 'react-native'

export default function headerCustom({userName, route, navigation}) {
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
}
