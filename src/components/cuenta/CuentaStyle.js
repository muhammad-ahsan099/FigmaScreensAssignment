



import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    head1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '3%',
        marginTop: '7%',
        marginRight: '2%',
    },
    text1: {

        fontSize: 20,
        lineHeight: 40,
        fontFamily: 'roboto',
    },
    textHide: {
        color: '#E5E5E5'
    },
    head2: {

        flex: 1,

    },
    head2_inner1: {
            flexDirection: 'row' ,

            borderTopColor: 'grey' ,
            borderBottomColor: 'grey',
            paddingTop:10 ,
            paddingBottom: 8 ,
            borderBottomWidth: 1 ,
            borderTopWidth: 1 ,
            opacity: 0.5 ,
            marginLeft: '5%' ,
            marginRight: '5%' ,
            
            
    } ,
    head3: {
        flex:3 ,
        marginTop: 5 ,
    } ,
    head4: {
        flex: 10 ,
        // backgroundColor: 'cyan' ,
        
    }

    
    
})