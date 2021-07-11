


import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    head1: {
        flex: 1,
    },
    back_img: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#000000',
        opacity: 0.8,
        borderRadius: 40,
    },
    login_logo: {
        position: 'absolute',
        width: 298,
        height: 72,
        left: 25,
        top: 60,
        opacity: 1,

    },
    head2: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderRadius: 40,
    },
    text1: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: '5%',
        marginBottom: '4%',
    },

    input1: {
        borderWidth: 1,
        padding: 8,
        paddingLeft: 20,
        borderColor: 'grey',
        width: '90%',
        height: 45,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
        borderRadius: 4,
        color: 'black',
        fontSize: 16,

    },
    text2: {
        marginLeft: '5%',
        fontSize: 18,
    },
    text_astaric: {
        color: 'red',

    },
    line: {
        
        
        // width: 163,
        height: 21,
        marginRight: '5%' ,
        marginLeft: '5%' ,
        fontFamily: 'Overpass',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'right' ,
      },
    buttonn2: {
        backgroundColor: "#227BFF",
        borderRadius: 50,        
        width: '90%',
        marginLeft: '5%' ,
        marginRight: '5%' ,
        marginTop: '60%'  ,
        height: 60,
        // bottom: 20 , 
        opacity: 1
    }

})