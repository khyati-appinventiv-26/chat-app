import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6ecf4',
      padding: 10,
      
    },
    header: {
      paddingTop: 60,
      flexDirection: 'row',
      gap: 20,
      
    },
    backIcon: {
      height: 25,
      width: 25
    },
    backContainer: {
      backgroundColor: 'white',
      width: '13%',
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    input: {
      width: '80%',
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    resultContainer: {
    //   marginTop: 20,
      
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
      
    //   backgroundColor:'#fff',
    //   borderRadius: 12
    },
    result: {
    padding:20
      
    },
    resultIcon: {
      height: 300,
      width: 300,
    },
    resultText: {
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 14,
    },
    
    userContainer: {
        flexDirection: 'row',
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        
        
       
      },

      flStyle: {
        marginTop: 20,
      
      justifyContent: 'center',
    //   alignItems: 'center',
      paddingTop: 15,
      
      backgroundColor:'#fff',
      borderRadius: 12,
      marginBottom: 85

      },
    initialsContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        
      },
      initialsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
    
      userName: {
        fontSize: 16,
        fontWeight: '500',
      },
      userPhone: {
        fontSize: 14,
        color: '#777',
      },
  });