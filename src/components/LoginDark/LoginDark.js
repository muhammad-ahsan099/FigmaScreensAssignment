
import React, { useState } from 'react';
import './LoginDarkStyle';
import { styles } from './LoginDarkStyle';
import logo_white from '../../assets/logo_white.png';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';



function LoginDark() {


    return (
        <View style={styles.head}>
            <View style={styles.head1} >
                <Image
                    style={styles.logo_image}
                    source={logo_white}
                />
            </View>

            <View style={styles.head2} >
                <TextInput
                    style={styles.input1}

                />
                <TextInput
                    style={styles.input2}
                />
                <Text style={styles.text} >¿Olvidaste tu contraseña? </Text>
            </View>

            <View style={styles.head3} >
                <TouchableOpacity
                
                    style={styles.buttonn}
                >
                    <Text 
                    style={{
                    color: 'white' , 
                    fontSize: 20 , 
                    textAlign: 'center' ,
                    lineHeight: 55 ,

                     }} 
                     >
                          Login
                    </Text>
                    
                </TouchableOpacity>
            </View>




        </View>


    );
};


export default LoginDark;
