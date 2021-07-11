


import React, { useState } from 'react';
import './LoginScreenStyle';
import { styles } from './LoginScreenStyle';
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



function LoginScreen() {


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
                    <View  style={{backgroundColor: 'white'}} >

                    <Text style={styles.text1} > Abrir Cuenta</Text>

                    <View>
                        <Text style={styles.text2} >
                            Email
                            <Text style={styles.text_astaric}>*</Text>
                        </Text>
                        <TextInput
                            style={styles.input1}
                            placeholder={'Nombre(s)'}
                        />
                        <Text style={styles.text2} >
                            Contraseña
                            <Text style={styles.text_astaric} >*</Text>
                        </Text>
                        <TextInput
                            style={styles.input1}
                            placeholder={'Apellido Peterno'}
                        />
                        <Text style={styles.text2} >
                            Repetir contraseña
                            <Text style={styles.text_astaric}>*</Text>
                        </Text>
                        <TextInput
                            style={styles.input1}
                            placeholder={'Apellido Peterno'}

                        />

                    </View>


                </View>
                    <View style={styles.head3}>

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
                            Abrir Cuenta
                        </Text>

                    </TouchableOpacity>
                    </View>


                </View>

              


            </ImageBackground>
        </View>

    );
};



export default LoginScreen;


