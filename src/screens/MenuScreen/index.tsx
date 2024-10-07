import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import styles from './style';
import { Icons } from "../../assets";
import CustomModal from "../../components/CustomModal";
import { useNavigation, useIsFocused, NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import contact from '../../contact.json';

// Define the structure of a contact and chat message
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
}

interface ChattedUser extends Contact {
  lastMessage: string;
  dateObject: string | null;
  user?: {
    name: string;
  };
}

const MenuScreen: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [chattedUser, setChattedUser] = useState<ChattedUser[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const isFocused = useIsFocused();
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const checkChats = async () => {
      console.log(contact);

      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);

      const usersWithMessages = await Promise.all(
        contact
          .filter(user => keys.includes(user.id.toString())) // Ensure ID is compared as string
          .map(async (user) => {
            const lastMessage = await AsyncStorage.getItem(`${user.id}`);
            const parsedMessage = lastMessage ? JSON.parse(lastMessage) : null;

            const dateObject =
              parsedMessage && parsedMessage.length > 0
                ? new Date(parsedMessage[0].createdAt).toLocaleString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : null;

            return {
              ...user,
              lastMessage: parsedMessage && parsedMessage.length > 0 ? parsedMessage[0].text : 'No message',
              dateObject: dateObject,
              user: {
                name: parsedMessage && parsedMessage.length > 0 ? parsedMessage[0].user.name : 'React-Native',
              },
            };
          })
      );

      const filteredUsersWithMessages = usersWithMessages.filter(user => user !== null);
      setChattedUser(filteredUsersWithMessages as ChattedUser[]);
    };

    checkChats();
  }, [isFocused]);

  const modaldata = [
    {
      id: 1,
      txt: 'New Chat',
      src: Icons.newChat,
    },
    {
      id: 2,
      txt: 'Group Chat',
      src: Icons.groupChat,
    },
    {
      id: 3,
      txt: 'Announcement',
      src: Icons.announcement,
    },
  ];

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleNewChat = () => {
    setVisible(!visible);
    navigation.navigate('contact');
  };

  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const handleChatRoom = (id: number, firstName: string, lastName: string) => {
    navigation.navigate('chatroom', {
      firstName: firstName,
      lastName: lastName,
      id: id
    });
  };

  const renderItem = ({ item }: { item: ChattedUser }) => (
    <TouchableOpacity
      onPress={() => handleChatRoom(item.id, item.firstName, item.lastName)}
      style={styles.userContainer}
    >
      <View style={styles.outerContainer}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initialsText}>{getInitials(item.firstName, item.lastName)}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {item.firstName} {item.lastName}
          </Text>
          <View style={styles.lastmsg}>
            <Text style={styles.userPhone}>{item.user?.name}: </Text>
            <Text style={styles.userPhone}>{item.lastMessage}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.date}>{item.dateObject}</Text>
    </TouchableOpacity>
  );

  const filteredUsers = chattedUser.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSec}>
        <View >
          <Text style={styles.msgTxt}>Messages</Text>
          <Text style={styles.contactTxt}>45 Contacts</Text>
        </View>

        <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate('contact')}>
          <Text style={styles.addTxt}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}>
        <TextInput
          placeholder="Search messages..."
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Image source={Icons.search} style={styles.searchIcon} />
      </View>

      {filteredUsers.length === 0 ? (
        <View style={styles.noChatView}>
          <Image source={Icons.noChat} style={styles.noChatImg} resizeMode="contain" />
          <Text style={styles.txt}>No chats, yet!</Text>
          <TouchableOpacity style={styles.btn} onPress={toggleModal}>
            <Text style={styles.btnTxt}>Start chat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}

      <CustomModal visible={visible} onRequestClose={toggleModal} data={modaldata} onpress={handleNewChat} />
    </View>
  );
};

export default MenuScreen;
