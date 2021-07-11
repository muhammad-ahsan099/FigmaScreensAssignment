

import React, { useState } from 'react';
import './CuentaStyle';
import { styles } from './CuentaStyle';
import NavbarClick from '../../assets/dashboardAsset/NavbarClick.png';
import Group79 from '../../assets/Group79.png';

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



function Cuenta() {


    return (

        <View style={styles.container}>

            <View style={styles.head1} >
                <Image
                    
                    source={NavbarClick}
                />
                <Text style={styles.text1} >Cuenta</Text>
                <Text style={styles.textHide} >ahsan</Text>

            </View>


            <View style={styles.head2} >

            <View style={styles.head2_inner1}>

                
                    <Text 
                    style={{paddingLeft: '23%',fontFamily:  'open sans' , paddingRight: '8%' , fontSize: 16 , color: 'black' ,fontWeight: 'bold' }} 
                    > 
                    Resumen 
                    </Text>
                    
                    <Text
                    style={{fontSize: 16  , fontFamily:  'open sans'}}
                    >
                    Transacciones
                    </Text>
                    
            </View>
            </View>


            <View style={styles.head3}>
                <Image   
                style={{marginLeft: 'auto' , marginRight: 'auto'  }}
                source={Group79}
                />
            </View>

            <View  style={styles.head4} >

                    <Text 
                    style={{
                        fontFamily:  'open sans' , paddingRight: '8%' , fontSize: 18 , color: 'black' ,fontWeight: 'bold'
                        , borderTopColor: 'grey' ,
                                                borderBottomColor: 'grey',
                paddingTop:10 ,
                paddingBottom: 8 ,
                borderBottomWidth: 1 ,
                borderTopWidth: 1 ,
                opacity: 0.5 ,
                marginLeft: '5%' ,
                marginRight: '5%' ,
                }} 
                    > 
                    Portafolio
                    </Text>
            </View>




            </View>


            
    );
};



export default Cuenta;


