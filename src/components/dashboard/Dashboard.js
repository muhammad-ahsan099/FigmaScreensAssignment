






import React, { useState } from 'react';
import './DashboardStyle';
import { styles } from './DashboardStyle';
import NavbarClick from '../../assets/dashboardAsset/NavbarClick.png';
import Dashboard_one from '../../assets/dashboardAsset/Dashboard_one.png';
import Dashboard_two from '../../assets/dashboardAsset/Dashboard_two.png' ;
import bottomNavbar from '../../assets/dashboardAsset/bottomNavbar.png';

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



function Dashborad() {


    return (

        <View style={styles.container}>

            <View style={styles.head1} >
                <Image
                    style={{ resizeMode: 'contain' }}
                    source={NavbarClick}
                />
                <Text style={styles.text1} >Invertir</Text>
                <Text style={styles.textHide} >ahsan</Text>

            </View>

            <View style={styles.head2}  >

                <Text style={styles.text2} >Oportunidades de Inversión</Text>

                <Image

                    style={{ height: '40%' , width: '92%'  , marginLeft: 'auto' , marginRight: 'auto' ,marginTop: '4%'  , borderRadius: 20 , resizeMode: 'contain' }}
                    source={Dashboard_two}
                />
                
                <Image

                    style={{ height: '40%' , width: '92%'  , marginLeft: 'auto' , marginRight: 'auto', marginTop: '2%'  , borderRadius: 20  , resizeMode: 'contain'}}
                    source={Dashboard_two}
                />

                <Image
                style={{ width: '100%' , resizeMode: 'contain' , marginBottom: 0 , marginTop: '4%'}}
                source={bottomNavbar}
                />
            </View>

        </View>

    );
};



export default Dashborad;


