import { StyleSheet } from "react-native";

export default StyleSheet.create({

    modalContainer: {
        // borderWidth:1,
        // flex: .7,
        // justifyContent: 'flex-end',
        // backgroundColor:'red'
        marginTop:'auto',
        
      },
      modalContent: {
        // height: '80%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 40,
      },
      outerView: {
        flexDirection: 'row',
        paddingVertical:20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor : '#f3f4f8'
      },
      modalImg: {
        height: 20,
        width: 20,
        marginRight: 20
      }

})
