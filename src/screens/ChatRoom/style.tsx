import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  avatarIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginLeft: 10,
  },
  avatarTxt: {
    textAlign: 'center',
    color: 'white',
  },
  txtName: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  outer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'white',
    padding: 15,
  },
  threeStyle: {
    height: 30,
    width: 30,
  },
  bubble: {
    padding: 8,
    borderRadius: 12,
  },
  timeText: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 30,
    // backgroundColor: '#f8f9f9',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    paddingVertical: 10,
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  sendButtonImage: {
    height: 20,
    width: 20,
  },
  selectedEmoji: {
    fontSize: 15,
  },
  emojiContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 20,
    left: -20,
    height: 30,
    width: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 20,
    color: 'blue',
    
  },
  addView: {
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 25,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
