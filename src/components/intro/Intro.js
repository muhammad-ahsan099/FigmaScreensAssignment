

import React, { useState } from 'react';
import './IntroStyle';
import { styles } from './IntroStyle';
import back_img from '../../assets/back_img.png';
import intro_logo from '../../assets/intro_logo.png';

import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    
} from 'react-native';



function Intro() {


    return (

        <View style={styles.container}>
            <ImageBackground source={back_img} style={styles.back_img}>

                <View style={styles.head1}>
                <Image
                    style={styles.intro_logo}
                    source={intro_logo}
                />
                </View>

                <View style={styles.head2}>
                      <Text style={styles.text}>CROWDFUNDING INMOBILIARIO</Text>
                </View>

                <View style={styles.head3}>
                <TouchableOpacity
                
                style={styles.buttonn1}
                >
                <Text 
                style={{
                color: 'white' , 
                fontSize: 20 , 
                textAlign: 'center' ,
                lineHeight: 55 ,

                 }} 
                 >
                      Iniciar sesion
                </Text>
                
                </TouchableOpacity>

                <TouchableOpacity
                
                style={styles.buttonn2}
                >
                <Text 
                style={{
                color: 'white' , 
                fontSize: 20 , 
                textAlign: 'center' ,
                lineHeight: 55 ,

                 }} 
                 >
                      Crear cuenta 
                </Text>
                
            </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>

    );
};



export default Intro;

