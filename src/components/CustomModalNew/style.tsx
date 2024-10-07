import { StyleSheet } from "react-native";
export default StyleSheet.create({
    modalContainer: {
      marginTop: 'auto',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 40,
    },
    outerView: {
      flexDirection: 'row',
      paddingVertical: 20,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#f3f4f8',
    },
    modalImg: {
      height: 20,
      width: 20,
      marginRight: 20,
    },
    emojiContainer: {
      paddingBottom:10,
    },
    emojiButton: {
      padding: 8,
      margin:2,
      // backgroundColor:color.overlay,
      borderRadius:13,
    },
    emojiText: {
      fontSize: 24,
    },
  });