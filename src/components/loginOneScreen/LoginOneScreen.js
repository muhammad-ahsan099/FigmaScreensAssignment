




import React, { useState } from 'react';
import './LoginOneScreenStyle';
import { styles } from './LoginOneScreenStyle';
import back_img from '../../assets/back_img.png';
import intro_logo from '../../assets/intro_logo.png';
import signup_screen_image from '../../assets/signup_screen_image.png'

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
    KeyboardAvoidingView

} from 'react-native';



function LoginOneScreen() {

    const add= ()=>{
        var a = 2;
        var b = 2 ;
        var c = a + b;
        alert("Sum of 2 number:     " + c)
    }


    return (

        <View style={styles.container}>

            <ImageBackground source={back_img} style={styles.back_img}>

                <View style={styles.head1}>
                    <Image
                        style={styles.login_logo}
                        source={intro_logo}
                    />
                </View>


                <View style={styles.head2}>

                    <View
                        style={{ backgroundColor: 'white', borderRadius: 40  , height: '100%'}}
                    >
                        <Text style={styles.text1} > Iniciar Sesion</Text>
                        
                        <View>
                            <Text style={styles.text2} >
                                Email
                                <Text style={styles.text_astaric}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input1}
                                placeholder={'Email'}
                            />
                            <Text style={styles.text2} >
                                Contrasena
                                <Text style={styles.text_astaric} >*</Text>
                            </Text>
                            <TextInput
                                style={styles.input1}
                                placeholder={'Contrasena'}
                            />
                              <Text style={styles.line} >¿Olvidaste tu contraseña? </Text>
                            
                            <TouchableOpacity

                                style={styles.buttonn2}
                                onPress={add}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        textAlign: 'center',
                                        lineHeight: 55,

                                    }}
                                >
                                    Iniciar Sesion
                                </Text>

                            </TouchableOpacity>

                        </View>




                    </View>

                </View>




            </ImageBackground>
        </View>

    );
};



export default LoginOneScreen;


