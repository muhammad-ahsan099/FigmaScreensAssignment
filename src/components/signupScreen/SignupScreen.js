




import React, { useState } from 'react';
import './SignupScreenStyle';
import { styles } from './SignupScreenStyle';
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



function SignupScreen() {


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
                        <Text style={styles.text1} > Ingresa to Nombre</Text>
                        <Image
                            style={styles.signup_screen_image}
                            source={signup_screen_image}
                        />

                        <View>
                            <Text style={styles.text2} >
                                Nombre(s)
                                <Text style={styles.text_astaric}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input1}
                                placeholder={'Nombre(s)'}
                            />
                            <Text style={styles.text2} >
                                Apellido Peterno
                                <Text style={styles.text_astaric} >*</Text>
                            </Text>
                            <TextInput
                                style={styles.input1}
                                placeholder={'Apellido Peterno'}
                            />
                            <Text style={styles.text2} >
                                Apellido Peterno
                                <Text style={styles.text_astaric}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input1}
                                placeholder={'Apellido Peterno'}

                            />
                            <TouchableOpacity

                                style={styles.buttonn2}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        textAlign: 'center',
                                        lineHeight: 55,

                                    }}
                                >
                                    Continuar
                                </Text>

                            </TouchableOpacity>

                        </View>




                    </View>

                </View>




            </ImageBackground>
        </View>

    );
};



export default SignupScreen;


