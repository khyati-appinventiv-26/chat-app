import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    topSec: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 30,
        backgroundColor:'#2a7bbb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    msgTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5
    },
    contactTxt: {
        color: 'white'
    },
    addIcon: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 30,
        width: 30,
        borderRadius: 12,
        marginTop: 10
    },

    addTxt: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    searchView: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    input: {
        height: 48,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius:12,
        position: 'relative',
        paddingLeft: 35
    },
    searchIcon: {
        position: 'absolute',
        top: 35,
        left: 30
    },
    noChatView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 20,
       
    },
    noChatImg: {
        height: 350,
        width: 350,
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',

    }
    ,
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor:'#2a7bbb',
        borderRadius: 12,
        marginTop: 10
    },
    btnTxt: {
        color: 'white',
        fontSize: 16
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      outerContainer: {
        flexDirection: 'row',
      },
      listContainer: {
        borderRadius: 8,
        paddingHorizontal: 20,
        // borderWidth: 2,
        // borderColor: '#ffffff',
        // backgroundColor: '#f8f9f9',
      },
      date: {textAlign: 'right'},
      lastmsg: {flexDirection: 'row'},
      announcementContainer: {
        alignItems: 'center',
        width: '30%',
        marginBottom: 20,
        borderRightWidth: 1,
        paddingRight: 10,
        borderRightColor: '#ccc',
        paddingVertical: 10,
      },
      announcementIconContainer: {
        backgroundColor: '#287bbb',
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      announcementIcon: {
        aspectRatio: 0.6,
      },
      initialsContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
      },
      initialsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
      },
    userInfo: {
        justifyContent: 'space-around',
        alignContent: 'center',
      },
      userName: {
        fontSize: 16,
        fontWeight: '500',
      },
      userPhone: {
        fontSize: 14,
        color: '#777',
      },
      

    
})