import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';

interface SplashScreenProProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}


const SplashScreenPro: React.FC<SplashScreenProProps> = ({ navigation }) => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {


        setTimeout(() => {
            navigation.navigate('homeScreen')
        }, 4000);



    },);

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={Icons.chatSplash}
                    style={styles.viewImg}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewImg: {
        height: 200,
        width: 200,
    },
});

export default SplashScreenPro;
