
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    back_img: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#000000',
        opacity: 0.8,
        borderRadius: 29,
},
    head1: {
    flex: 2,
},
    intro_logo: {
    position: 'absolute',
    width: 298,
    height: 72,
    left: 25,
    top: 60,
    opacity: 1,

},
    head2: {
    flex: 4,
},
    head3: {
    flex: 2,
    

},
text: {
position: 'absolute',
width: 197,
height: 74,
left: 80,
top: 110,
fontFamily: 'Overpass',
fontStyle: 'normal',
fontSize: 24,
lineHeight: 37,
alignItems: 'center',
textAlign: 'center',

color: '#FFFFFF',

textShadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)'
},
buttonn1: {
    // backgroundColor: "#FF3366",
    backgroundColor: "#227BFF",
    borderRadius: 50,
    position: 'absolute' ,
    width: '90%',
    marginTop: '8%',
    marginLeft: '5%' ,
    marginRight: '5%' ,
    height: 60,
    opacity: 1
}
,
buttonn2: {
    // backgroundColor: "#FF3366",
    backgroundColor: "#0C1327",
    borderRadius: 50,
    position: 'absolute' ,
    width: '90%',
    marginTop: "5%" ,
    marginLeft: '5%' ,
    marginRight: '5%' ,
    marginBottom: '5%' ,
    height: 60,
    bottom: 20 , 
    opacity: 1
}
   
});
